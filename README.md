# AveeCare Node.js Library

[![npm version](https://img.shields.io/npm/v/aveecare.svg)](https://www.npmjs.com/package/aveecare)
[![CI](https://github.com/aveecare/aveecare-node/actions/workflows/ci.yml/badge.svg)](https://github.com/aveecare/aveecare-node/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

The official Node.js and TypeScript library for the [AveeCare API](https://www.aveecare.com/docs/api).
Read and write your home care agency's patients, visits, invoices and more from your own
servers, with full types, automatic pagination, retries and idempotency built in.

- Zero runtime dependencies (uses the built-in `fetch`, Node.js 18+)
- ES modules and CommonJS, with complete TypeScript types
- Typed errors, automatic retries with backoff, automatic idempotency keys

## Install

```sh
npm install aveecare
```

## Quickstart

Create an API key in AveeCare, then:

```js
import AveeCare from 'aveecare';

const avee = new AveeCare({ apiKey: process.env.AVEECARE_API_KEY });

const page = await avee.patients.list({ status: 'Active', limit: 25 });
for (const patient of page.data) {
  console.log(patient.id, patient.firstName, patient.lastName);
}
```

CommonJS works too: `const AveeCare = require('aveecare');`.

## Authentication

Every request is authenticated with your secret API key, sent as
`Authorization: Bearer ak_<keyId>_<secret>`. Pass it as `apiKey`, or set the
`AVEECARE_API_KEY` environment variable and call `new AveeCare()`. Keys are
read-only or read and write; see
[Authentication](https://www.aveecare.com/docs/api/authentication).

Keep keys on your server. Never put an API key in browser or mobile code.

## Usage

```ts
// Retrieve, create, update and delete
const patient = await avee.patients.retrieve('pat_8f2k1m9x');
const created = await avee.patients.create({ firstName: 'Margaret', lastName: 'Alvarez' });
const updated = await avee.patients.update(created.id, { schedulingNotes: 'Prefers morning visits', email: null });
await avee.patients.delete(created.id);

// Visits are listed by start-time window (at most 93 days)
const visits = await avee.visits.list({
  startFrom: '2026-10-01T00:00:00Z',
  startTo: '2026-10-08T00:00:00Z',
});

// The API key making the request
const me = await avee.me.retrieve();
```

Object fields use the API's exact field names (`firstName`, `createdAt`).
Query parameters are camelCase in TypeScript (`startFrom`, `updatedAfter`) and
are sent as the API's `start_from` and `updated_after`.

## Pagination

`list()` returns the first page, and the same call can be iterated with
`for await` to walk every item across every page:

```js
for await (const patient of avee.patients.list({ limit: 100 })) {
  console.log(patient.id);
}

// Or one page at a time
let page = await avee.patients.list({ limit: 25 });
while (page.hasNextPage()) {
  page = await page.getNextPage();
}
```

## Errors

Every error is an `AveeCareError`. API errors carry `status`, `code`,
`type`, `message` and `requestId`:

```js
import { NotFoundError, RateLimitError, AveeCareError } from 'aveecare';

try {
  await avee.patients.retrieve('pat_missing');
} catch (err) {
  if (err instanceof NotFoundError) {
    console.log('No such patient', err.requestId);
  } else if (err instanceof AveeCareError) {
    console.log(err.status, err.code, err.message);
  } else {
    throw err;
  }
}
```

| Status | Class | Example codes |
|---|---|---|
| 400 | `InvalidRequestError` | `invalid_request`, `unknown_field` |
| 401 | `AuthenticationError` | `unauthorized` |
| 403 | `PermissionError` | `forbidden`, `insufficient_scope` |
| 404 | `NotFoundError` | `not_found` |
| 409 | `ConflictError` | `idempotency_conflict` |
| 429 | `RateLimitError` | `rate_limited` |
| other | `APIError` | `internal_error` |

Network failures raise `APIConnectionError`, and timeouts `APITimeoutError`.

## Retries, timeouts and idempotency

Rate-limited (429), server error (5xx) and network failures are retried twice
by default with jittered exponential backoff. When the API sends
`Retry-After`, the client waits that long.

Every `create` sends an `Idempotency-Key` (a random UUID), and the same key is
reused across retries, so a retried create never makes a duplicate. Pass your
own key to make a create safe to repeat across processes:

```js
const avee = new AveeCare({ maxRetries: 4, timeout: 20_000 });

await avee.patients.create(
  { firstName: 'Margaret', lastName: 'Alvarez' },
  { idempotencyKey: 'import-row-1042', timeout: 5_000 },
);
```

## Configuration

| Option | Default | |
|---|---|---|
| `apiKey` | `process.env.AVEECARE_API_KEY` | Your secret key |
| `baseURL` | `process.env.AVEECARE_BASE_URL`, then `https://api.aveecare.com` | API origin |
| `timeout` | `60000` | Milliseconds per attempt |
| `maxRetries` | `2` | Retries for 429, 5xx and network errors |
| `defaultHeaders` | none | Headers sent with every request |
| `fetch` | global `fetch` | A custom fetch implementation |

Every request sends `User-Agent: aveecare-node/<version>`.

## Documentation

The full API reference, with every resource and field, is at
[www.aveecare.com/docs/api](https://www.aveecare.com/docs/api).
Building an integration to offer other agencies? See the
[AveeCare Partner Center](https://www.aveecare.com/partners).

## Other official SDKs

- [aveecare-node](https://github.com/aveecare/aveecare-node): Node.js and TypeScript
- [aveecare-python](https://github.com/aveecare/aveecare-python): Python
- [aveecare-rust](https://github.com/aveecare/aveecare-rust): Rust
- [aveecare-go](https://github.com/aveecare/aveecare-go): Go
- [aveecare-ruby](https://github.com/aveecare/aveecare-ruby): Ruby
- [aveecare-php](https://github.com/aveecare/aveecare-php): PHP
- [aveecare-java](https://github.com/aveecare/aveecare-java): Java and Kotlin
- [aveecare-dotnet](https://github.com/aveecare/aveecare-dotnet): .NET
- [aveecare-cli](https://github.com/aveecare/aveecare-cli): command line
- [aveecare-openapi](https://github.com/aveecare/aveecare-openapi): OpenAPI specification
- [aveecare-mcp](https://github.com/aveecare/aveecare-mcp): connect AI assistants
- [aveecare-examples](https://github.com/aveecare/aveecare-examples): sample apps

## License

MIT. See [LICENSE](LICENSE).

---

Built by [AveeCare](https://www.aveecare.com) — home care software.
