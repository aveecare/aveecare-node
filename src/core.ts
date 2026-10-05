import {
  APIConnectionError,
  APITimeoutError,
  AveeCareError,
  errorFromResponse,
} from './errors.js';
import { Page, PagePromise, type ListEnvelope } from './pagination.js';
import { VERSION } from './version.js';

export const DEFAULT_BASE_URL = 'https://api.aveecare.com';
export const DEFAULT_TIMEOUT_MS = 60_000;
export const DEFAULT_MAX_RETRIES = 2;
const MAX_RETRY_DELAY_MS = 60_000;

export interface ClientOptions {
  /** Your secret key, `ak_<keyId>_<secret>`. Defaults to `process.env.AVEECARE_API_KEY`. */
  apiKey?: string | undefined;
  /** Defaults to `process.env.AVEECARE_BASE_URL`, then `https://api.aveecare.com`. */
  baseURL?: string | undefined;
  /** Per-attempt timeout in milliseconds. Default 60000. */
  timeout?: number | undefined;
  /** Retries for 429, 5xx and network errors. Default 2. */
  maxRetries?: number | undefined;
  /** Headers sent with every request. */
  defaultHeaders?: Record<string, string> | undefined;
  /** A fetch implementation. Defaults to the global `fetch` (Node 18+). */
  fetch?: typeof fetch | undefined;
}

export interface RequestOptions {
  /** Idempotency key for a POST. One is generated for you when omitted. */
  idempotencyKey?: string | undefined;
  timeout?: number | undefined;
  maxRetries?: number | undefined;
  headers?: Record<string, string> | undefined;
  signal?: AbortSignal | undefined;
}

export type QueryValue = string | number | boolean | null | undefined | ReadonlyArray<string | number | boolean>;

export interface RequestSpec {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  query?: Record<string, QueryValue> | undefined;
  body?: unknown;
  idempotent?: boolean | undefined;
}

function readEnv(name: string): string | undefined {
  const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  const value = env?.[name];
  return value && value.trim() ? value.trim() : undefined;
}

function uuid4(): string {
  const c = (globalThis as { crypto?: { randomUUID?: () => string; getRandomValues?: (a: Uint8Array) => Uint8Array } }).crypto;
  if (c?.randomUUID) return c.randomUUID();
  const bytes = new Uint8Array(16);
  if (c?.getRandomValues) c.getRandomValues(bytes);
  else for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  bytes[6] = (bytes[6]! & 0x0f) | 0x40;
  bytes[8] = (bytes[8]! & 0x3f) | 0x80;
  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/** Seconds (or an HTTP date) from Retry-After, as milliseconds. */
export function parseRetryAfter(value: string | null): number | undefined {
  if (!value) return undefined;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const date = Date.parse(value);
  if (Number.isFinite(date)) return Math.max(0, date - Date.now());
  return undefined;
}

/** Jittered exponential backoff: 0.5s, 1s, 2s, ... capped at 8s, minus up to 25%. */
export function backoffDelay(attempt: number): number {
  const base = Math.min(500 * 2 ** attempt, 8000);
  return base * (1 - Math.random() * 0.25);
}

function shouldRetry(status: number): boolean {
  return status === 408 || status === 429 || status >= 500;
}

export class APIClient {
  readonly apiKey: string;
  readonly baseURL: string;
  readonly timeout: number;
  readonly maxRetries: number;
  readonly #defaultHeaders: Record<string, string>;
  readonly #fetch: typeof fetch;

  constructor(options: ClientOptions = {}) {
    const apiKey = options.apiKey ?? readEnv('AVEECARE_API_KEY');
    if (!apiKey) {
      throw new AveeCareError(
        'No API key provided. Pass `apiKey` or set the AVEECARE_API_KEY environment variable. ' +
          'See https://www.aveecare.com/docs/api/authentication',
      );
    }
    this.apiKey = apiKey;
    this.baseURL = (options.baseURL ?? readEnv('AVEECARE_BASE_URL') ?? DEFAULT_BASE_URL).replace(/\/+$/, '');
    this.timeout = options.timeout ?? DEFAULT_TIMEOUT_MS;
    this.maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES;
    this.#defaultHeaders = { ...(options.defaultHeaders ?? {}) };
    const f = options.fetch ?? (globalThis as { fetch?: typeof fetch }).fetch;
    if (!f) throw new AveeCareError('No global fetch found. Use Node 18 or newer, or pass a `fetch` option.');
    this.#fetch = f;
  }

  /** Builds the full URL for a path and query, dropping undefined/null values. */
  buildURL(path: string, query?: Record<string, QueryValue>): string {
    const url = new URL(this.baseURL + path);
    for (const [key, value] of Object.entries(query ?? {})) {
      if (value === undefined || value === null) continue;
      if (Array.isArray(value)) for (const v of value) url.searchParams.append(key, String(v));
      else url.searchParams.set(key, String(value));
    }
    return url.toString();
  }

  async request<T>(spec: RequestSpec, options: RequestOptions = {}): Promise<T> {
    const url = this.buildURL(spec.path, spec.query);
    const headers: Record<string, string> = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
      'User-Agent': `aveecare-node/${VERSION}`,
      ...this.#defaultHeaders,
      ...(options.headers ?? {}),
    };
    let body: string | undefined;
    if (spec.body !== undefined) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(spec.body);
    }
    if (spec.method === 'POST' || spec.idempotent) {
      headers['Idempotency-Key'] = options.idempotencyKey ?? headers['Idempotency-Key'] ?? uuid4();
    }
    const maxRetries = options.maxRetries ?? this.maxRetries;
    const timeout = options.timeout ?? this.timeout;

    for (let attempt = 0; ; attempt++) {
      const controller = new AbortController();
      const onAbort = () => controller.abort();
      options.signal?.addEventListener('abort', onAbort, { once: true });
      let timedOut = false;
      const timer = setTimeout(() => {
        timedOut = true;
        controller.abort();
      }, timeout);
      let response: Response;
      try {
        response = await this.#fetch(url, { method: spec.method, headers, body, signal: controller.signal });
      } catch (cause) {
        clearTimeout(timer);
        options.signal?.removeEventListener('abort', onAbort);
        if (options.signal?.aborted) throw new APIConnectionError('Request was aborted.', { cause });
        if (attempt < maxRetries) {
          await sleep(backoffDelay(attempt));
          continue;
        }
        if (timedOut) throw new APITimeoutError(`Request timed out after ${timeout} ms.`, { cause });
        throw new APIConnectionError(`Could not reach the AveeCare API: ${(cause as Error)?.message ?? cause}`, { cause });
      }

      let text: string;
      try {
        text = await response.text();
      } catch (cause) {
        clearTimeout(timer);
        options.signal?.removeEventListener('abort', onAbort);
        if (attempt < maxRetries) {
          await sleep(backoffDelay(attempt));
          continue;
        }
        if (timedOut) throw new APITimeoutError(`Request timed out after ${timeout} ms.`, { cause });
        throw new APIConnectionError('The connection closed before the response finished.', { cause });
      }
      clearTimeout(timer);
      options.signal?.removeEventListener('abort', onAbort);

      let parsed: unknown = undefined;
      if (text) {
        try {
          parsed = JSON.parse(text);
        } catch {
          parsed = undefined;
        }
      }
      if (response.ok) {
        if (text && parsed === undefined) {
          throw new AveeCareError('The API returned a response that is not JSON.', {
            status: response.status,
            requestId: response.headers.get('request-id') ?? undefined,
            headers: response.headers,
          });
        }
        return parsed as T;
      }
      if (shouldRetry(response.status) && attempt < maxRetries) {
        const hinted = parseRetryAfter(response.headers.get('retry-after'));
        await sleep(Math.min(hinted ?? backoffDelay(attempt), MAX_RETRY_DELAY_MS));
        continue;
      }
      throw errorFromResponse(response.status, parsed, response.headers);
    }
  }

  /** GET a list endpoint; the result is awaitable (one page) and async-iterable (every item). */
  getList<T>(path: string, query: Record<string, QueryValue>, options?: RequestOptions): PagePromise<T> {
    const fetchPage = (cursor: string | undefined): Promise<Page<T>> =>
      this.request<ListEnvelope<T>>(
        { method: 'GET', path, query: cursor === undefined ? query : { ...query, cursor } },
        options,
      ).then((envelope) => new Page<T>(envelope, fetchPage));
    return new PagePromise<T>(fetchPage(typeof query['cursor'] === 'string' ? query['cursor'] : undefined));
  }
}

/** Base class for generated resource namespaces such as `client.patients`. */
export class APIResource {
  protected readonly _client: APIClient;
  constructor(client: APIClient) {
    this._client = client;
  }
}

export const path = (strings: TemplateStringsArray, ...params: string[]): string =>
  strings.reduce((acc, s, i) => acc + s + (i < params.length ? encodeURIComponent(params[i]!) : ''), '');
