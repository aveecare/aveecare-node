/**
 * Every error thrown by this library is an AveeCareError, so one
 * `catch (err) { if (err instanceof AveeCareError) ... }` covers them all.
 *
 * HTTP errors are APIError subclasses chosen by status code:
 *   400/422 InvalidRequestError   401 AuthenticationError   403 PermissionError
 *   404 NotFoundError             409 ConflictError         429 RateLimitError
 *   anything else (including 5xx) APIError
 * Failures before a response arrives are APIConnectionError / APITimeoutError.
 */
export class AveeCareError extends Error {
  /** HTTP status, when the error came from a response. */
  readonly status: number | undefined;
  /** Machine-readable code such as `not_found` or `insufficient_scope`. */
  readonly code: string | undefined;
  /** Broad category such as `invalid_request_error`. */
  readonly type: string | undefined;
  /** The `Request-Id` of the failed request. Quote it when contacting support. */
  readonly requestId: string | undefined;
  /** Response headers, when there was a response. */
  readonly headers: Headers | undefined;

  constructor(
    message: string,
    init: { status?: number; code?: string; type?: string; requestId?: string; headers?: Headers; cause?: unknown } = {},
  ) {
    super(message);
    this.name = new.target.name;
    this.status = init.status;
    this.code = init.code;
    this.type = init.type;
    this.requestId = init.requestId;
    this.headers = init.headers;
    if (init.cause !== undefined) (this as { cause?: unknown }).cause = init.cause;
  }
}

/** The API answered with a non-2xx status. */
export class APIError extends AveeCareError {
  declare readonly status: number;
}
export class InvalidRequestError extends APIError {}
export class AuthenticationError extends APIError {}
export class PermissionError extends APIError {}
export class NotFoundError extends APIError {}
export class ConflictError extends APIError {}
export class RateLimitError extends APIError {
  /** Seconds the API asked us to wait (from `Retry-After`), if given. */
  get retryAfter(): number | undefined {
    const raw = this.headers?.get('retry-after');
    if (!raw) return undefined;
    const n = Number(raw);
    return Number.isFinite(n) ? n : undefined;
  }
}

/** The request never got a response (DNS, TLS, connection reset, ...). */
export class APIConnectionError extends AveeCareError {}
/** The request exceeded its timeout. */
export class APITimeoutError extends APIConnectionError {}

interface ErrorBody {
  error?: { type?: string; code?: string; message?: string; request_id?: string };
}

export function errorFromResponse(status: number, body: unknown, headers: Headers): APIError {
  const err = (body as ErrorBody | undefined)?.error;
  const requestId = err?.request_id ?? headers.get('request-id') ?? undefined;
  const message = err?.message ?? `Request failed with status ${status}`;
  const init = { status, code: err?.code, type: err?.type, requestId, headers };
  switch (true) {
    case status === 400 || status === 422:
      return new InvalidRequestError(message, init);
    case status === 401:
      return new AuthenticationError(message, init);
    case status === 403:
      return new PermissionError(message, init);
    case status === 404:
      return new NotFoundError(message, init);
    case status === 409:
      return new ConflictError(message, init);
    case status === 429:
      return new RateLimitError(message, init);
    default:
      return new APIError(message, init);
  }
}
