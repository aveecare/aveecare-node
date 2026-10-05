# Contributing to aveecare-node

Thanks for helping improve the AveeCare Node.js library.

## How this library is built

- **Models and resource classes are generated** from the public AveeCare OpenAPI
  specification, published in
  [aveecare-openapi](https://github.com/aveecare/aveecare-openapi). Everything in
  `src/generated/` is overwritten on each release, so please do not edit it by hand.
  If a model, field or endpoint is wrong or missing, open an issue here or in
  aveecare-openapi and we will fix it at the source.
- **The runtime is hand-written** (configuration, authentication, retries,
  pagination, errors). Fixes and improvements to it are very welcome as pull
  requests.

## Development

```sh
npm install
npm test          # build + unit tests (mocked HTTP)
npm run typecheck # public type checks
```

Unit tests use a mocked HTTP server and never touch the network. Live tests run
only when both `AVEECARE_API_KEY` and `AVEECARE_BASE_URL` are set, and they
create, update and delete one test patient, so point them at a sandbox:

```sh
AVEECARE_API_KEY=ak_... AVEECARE_BASE_URL=https://... npm run test:live
```

## Pull requests

1. Open an issue first for anything larger than a small fix.
2. Add or update tests for the behaviour you change.
3. Keep the public API backwards compatible within a major version.
4. Add a line to `CHANGELOG.md` under "Unreleased".

By contributing you agree that your contributions are licensed under the MIT
License, and you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

Security issues: please follow [SECURITY.md](SECURITY.md) instead of opening a
public issue.
