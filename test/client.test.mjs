import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import AveeCare, {
  AveeCareError,
  APIError,
  APIConnectionError,
  APITimeoutError,
  AuthenticationError,
  ConflictError,
  InvalidRequestError,
  NotFoundError,
  PermissionError,
  RateLimitError,
  Page,
  VERSION,
} from '../dist/esm/index.js';

const patient = (id, extra = {}) => ({
  object: 'patient',
  id,
  firstName: 'Margaret',
  lastName: 'Alvarez',
  status: 'active',
  createdAt: '2026-09-12T16:04:11Z',
  updatedAt: '2026-09-30T09:12:45Z',
  ...extra,
});

function json(status, body, headers = {}) {
  return new Response(body === undefined ? '' : JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', 'request-id': 'req_test', ...headers },
  });
}

/** A fetch double that records calls and answers from a queue of handlers. */
function mockFetch(...handlers) {
  const calls = [];
  const fetch = async (url, init) => {
    const call = { url: new URL(url), method: init.method, headers: init.headers, body: init.body ? JSON.parse(init.body) : undefined };
    calls.push(call);
    const handler = handlers.length > 1 ? handlers.shift() : handlers[0];
    return handler(call, init);
  };
  return { fetch, calls };
}

const client = (fetch, extra = {}) => new AveeCare({ apiKey: 'ak_test_secret', baseURL: 'http://mock.local', fetch, ...extra });

test('sends auth, user agent and JSON accept headers', async () => {
  const { fetch, calls } = mockFetch(() => json(200, { object: 'me', id: 'key_1', name: 'k', scopes: ['read'], organization: { id: 'o', name: 'n' } }));
  const me = await client(fetch).me.retrieve();
  assert.equal(me.id, 'key_1');
  assert.equal(calls[0].url.href, 'http://mock.local/v1/me');
  assert.equal(calls[0].headers.Authorization, 'Bearer ak_test_secret');
  assert.equal(calls[0].headers['User-Agent'], `aveecare-node/${VERSION}`);
  assert.equal(calls[0].headers.Accept, 'application/json');
  assert.equal(calls[0].headers['Idempotency-Key'], undefined);
});

test('VERSION matches package.json', async () => {
  const pkg = createRequire(import.meta.url)('../package.json');
  assert.equal(VERSION, pkg.version);
});

test('list maps camelCase params to wire names and returns a page', async () => {
  const { fetch, calls } = mockFetch(() => json(200, { object: 'list', data: [patient('pat_1')], next_cursor: null, has_more: false }));
  const page = await client(fetch).patients.list({ status: 'active', updatedAfter: '2026-01-01T00:00:00Z', limit: 25 });
  assert.ok(page instanceof Page);
  assert.equal(page.data[0].firstName, 'Margaret');
  assert.equal(page.hasMore, false);
  assert.equal(page.nextCursor, null);
  assert.equal(page.hasNextPage(), false);
  const q = calls[0].url.searchParams;
  assert.equal(q.get('status'), 'active');
  assert.equal(q.get('updated_after'), '2026-01-01T00:00:00Z');
  assert.equal(q.get('limit'), '25');
  assert.equal(q.has('cursor'), false);
});

test('required list params are sent (visits window)', async () => {
  const { fetch, calls } = mockFetch(() => json(200, { object: 'list', data: [], next_cursor: null, has_more: false }));
  await client(fetch).visits.list({ startFrom: '2026-10-01T00:00:00Z', startTo: '2026-10-08T00:00:00Z', patientId: 'pat_1' });
  const q = calls[0].url.searchParams;
  assert.equal(q.get('start_from'), '2026-10-01T00:00:00Z');
  assert.equal(q.get('start_to'), '2026-10-08T00:00:00Z');
  assert.equal(q.get('patient_id'), 'pat_1');
});

const twoPages = () =>
  mockFetch((call) =>
    call.url.searchParams.get('cursor') === 'cur_2'
      ? json(200, { object: 'list', data: [patient('pat_3')], next_cursor: null, has_more: false })
      : json(200, { object: 'list', data: [patient('pat_1'), patient('pat_2')], next_cursor: 'cur_2', has_more: true }),
  );

test('for await on list() auto-pages through every item', async () => {
  const { fetch, calls } = twoPages();
  const ids = [];
  for await (const p of client(fetch).patients.list({ limit: 2 })) ids.push(p.id);
  assert.deepEqual(ids, ['pat_1', 'pat_2', 'pat_3']);
  assert.equal(calls.length, 2);
  assert.equal(calls[1].url.searchParams.get('cursor'), 'cur_2');
  assert.equal(calls[1].url.searchParams.get('limit'), '2');
});

test('manual paging with getNextPage and iterPages', async () => {
  const { fetch } = twoPages();
  const first = await client(fetch).patients.list();
  assert.equal(first.hasNextPage(), true);
  const second = await first.getNextPage();
  assert.deepEqual(second.data.map((p) => p.id), ['pat_3']);
  await assert.rejects(second.getNextPage(), /No more pages/);
  const pages = [];
  for await (const page of first.iterPages()) pages.push(page.data.length);
  assert.deepEqual(pages, [2, 1]);
});

test('retrieve, update and delete build the right request', async () => {
  const { fetch, calls } = mockFetch(
    () => json(200, patient('pat 1/x')),
    () => json(200, patient('pat_1', { phone: '+16025550142' })),
    () => json(200, { object: 'patient', id: 'pat_1', deleted: true }),
  );
  const c = client(fetch);
  await c.patients.retrieve('pat 1/x');
  assert.equal(calls[0].url.pathname, '/v1/patients/pat%201%2Fx');
  const updated = await c.patients.update('pat_1', { phone: '+16025550142', email: null });
  assert.equal(updated.phone, '+16025550142');
  assert.equal(calls[1].method, 'PATCH');
  assert.deepEqual(calls[1].body, { phone: '+16025550142', email: null });
  assert.equal(calls[1].headers['Content-Type'], 'application/json');
  const deleted = await c.patients.delete('pat_1');
  assert.equal(deleted.deleted, true);
  assert.equal(calls[2].method, 'DELETE');
});

test('create sends an automatic UUID idempotency key, or the one given', async () => {
  const { fetch, calls } = mockFetch(() => json(201, patient('pat_9')));
  const c = client(fetch);
  const created = await c.patients.create({ firstName: 'Margaret', lastName: 'Alvarez' });
  assert.equal(created.id, 'pat_9');
  assert.equal(calls[0].method, 'POST');
  assert.deepEqual(calls[0].body, { firstName: 'Margaret', lastName: 'Alvarez' });
  assert.match(calls[0].headers['Idempotency-Key'], /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  await c.patients.create({ firstName: 'A', lastName: 'B' }, { idempotencyKey: 'my-key-1' });
  assert.equal(calls[1].headers['Idempotency-Key'], 'my-key-1');
  assert.notEqual(calls[0].headers['Idempotency-Key'], calls[1].headers['Idempotency-Key']);
});

test('errors map to typed classes with code, status and requestId', async () => {
  const cases = [
    [400, 'unknown_field', InvalidRequestError],
    [401, 'unauthorized', AuthenticationError],
    [403, 'insufficient_scope', PermissionError],
    [404, 'not_found', NotFoundError],
    [409, 'idempotency_conflict', ConflictError],
  ];
  for (const [status, code, Cls] of cases) {
    const { fetch } = mockFetch(() => json(status, { error: { type: 'x_error', code, message: `boom ${code}`, request_id: 'req_abc' } }));
    const err = await client(fetch).patients.retrieve('pat_1').catch((e) => e);
    assert.ok(err instanceof Cls, `${status} -> ${Cls.name}`);
    assert.ok(err instanceof APIError);
    assert.ok(err instanceof AveeCareError);
    assert.equal(err.status, status);
    assert.equal(err.code, code);
    assert.equal(err.type, 'x_error');
    assert.equal(err.requestId, 'req_abc');
    assert.equal(err.message, `boom ${code}`);
    assert.equal(err.name, Cls.name);
  }
});

test('request id falls back to the Request-Id header', async () => {
  const { fetch } = mockFetch(() => new Response('oops', { status: 502, headers: { 'request-id': 'req_hdr' } }));
  const err = await client(fetch, { maxRetries: 0 }).me.retrieve().catch((e) => e);
  assert.ok(err instanceof APIError);
  assert.equal(err.status, 502);
  assert.equal(err.requestId, 'req_hdr');
});

test('retries 429 honoring Retry-After and keeps the same idempotency key', async () => {
  const { fetch, calls } = mockFetch(
    () => json(429, { error: { type: 'rate_limit_error', code: 'rate_limited', message: 'slow down', request_id: 'r1' } }, { 'retry-after': '0' }),
    () => json(201, patient('pat_1')),
  );
  const created = await client(fetch).patients.create({ firstName: 'A', lastName: 'B' });
  assert.equal(created.id, 'pat_1');
  assert.equal(calls.length, 2);
  assert.equal(calls[0].headers['Idempotency-Key'], calls[1].headers['Idempotency-Key']);
});

test('Retry-After delay is honored', async () => {
  const { fetch } = mockFetch(
    () => json(429, { error: { code: 'rate_limited', message: 'x', request_id: 'r' } }, { 'retry-after': '1' }),
    () => json(200, patient('pat_1')),
  );
  const started = Date.now();
  await client(fetch).patients.retrieve('pat_1');
  assert.ok(Date.now() - started >= 950, 'waited about one second');
});

test('gives up after maxRetries and throws RateLimitError with retryAfter', async () => {
  const { fetch, calls } = mockFetch(() =>
    json(429, { error: { type: 'rate_limit_error', code: 'rate_limited', message: 'slow down', request_id: 'r1' } }, { 'retry-after': '0' }),
  );
  const err = await client(fetch, { maxRetries: 2 }).patients.retrieve('pat_1').catch((e) => e);
  assert.ok(err instanceof RateLimitError);
  assert.equal(err.retryAfter, 0);
  assert.equal(calls.length, 3);
});

test('retries 5xx with backoff then succeeds', async () => {
  const { fetch, calls } = mockFetch(
    () => json(503, { error: { type: 'api_error', code: 'internal_error', message: 'x', request_id: 'r' } }),
    () => json(200, patient('pat_1')),
  );
  const p = await client(fetch).patients.retrieve('pat_1');
  assert.equal(p.id, 'pat_1');
  assert.equal(calls.length, 2);
});

test('does not retry 4xx other than 408/429', async () => {
  const { fetch, calls } = mockFetch(() => json(404, { error: { code: 'not_found', message: 'nope', request_id: 'r' } }));
  await assert.rejects(client(fetch).patients.retrieve('x'), NotFoundError);
  assert.equal(calls.length, 1);
});

test('network errors are retried, then raise APIConnectionError', async () => {
  let n = 0;
  const fetch = async () => {
    n++;
    throw new TypeError('fetch failed');
  };
  const err = await client(fetch, { maxRetries: 1 }).me.retrieve().catch((e) => e);
  assert.ok(err instanceof APIConnectionError);
  assert.equal(n, 2);
});

test('timeouts raise APITimeoutError', async () => {
  const fetch = (_url, init) =>
    new Promise((_resolve, reject) => {
      init.signal.addEventListener('abort', () => reject(new DOMException('aborted', 'AbortError')));
    });
  const err = await client(fetch, { timeout: 30, maxRetries: 0 }).me.retrieve().catch((e) => e);
  assert.ok(err instanceof APITimeoutError);
  assert.ok(err instanceof APIConnectionError);
});

test('API key and base URL come from the environment', async () => {
  const saved = { key: process.env.AVEECARE_API_KEY, url: process.env.AVEECARE_BASE_URL };
  try {
    process.env.AVEECARE_API_KEY = 'ak_env_key';
    process.env.AVEECARE_BASE_URL = 'http://env.local/';
    const { fetch, calls } = mockFetch(() => json(200, patient('pat_1')));
    const c = new AveeCare({ fetch });
    assert.equal(c.baseURL, 'http://env.local');
    await c.patients.retrieve('pat_1');
    assert.equal(calls[0].url.origin, 'http://env.local');
    assert.equal(calls[0].headers.Authorization, 'Bearer ak_env_key');
    delete process.env.AVEECARE_BASE_URL;
    assert.equal(new AveeCare({ fetch }).baseURL, 'https://api.aveecare.com');
    delete process.env.AVEECARE_API_KEY;
    assert.throws(() => new AveeCare({ fetch }), AveeCareError);
  } finally {
    if (saved.key === undefined) delete process.env.AVEECARE_API_KEY;
    else process.env.AVEECARE_API_KEY = saved.key;
    if (saved.url === undefined) delete process.env.AVEECARE_BASE_URL;
    else process.env.AVEECARE_BASE_URL = saved.url;
  }
});

test('CommonJS require returns the client class with named exports', () => {
  const require = createRequire(import.meta.url);
  const cjs = require('../dist/cjs/entry.cjs');
  assert.equal(typeof cjs, 'function');
  assert.equal(cjs.default, cjs);
  assert.equal(typeof cjs.NotFoundError, 'function');
  const c = new cjs({ apiKey: 'ak_x_y', fetch: async () => json(200, {}) });
  assert.equal(typeof c.patients.list, 'function');
});
