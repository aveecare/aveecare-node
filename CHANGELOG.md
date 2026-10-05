# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the project uses
[Semantic Versioning](https://semver.org/).

## [Unreleased]

## [0.1.0] - 2026-10-05

### Added

- First release of the AveeCare Node.js library.
- Patients (list, retrieve, create, update, delete), visits (list by date
  window, retrieve, create, update, delete), invoices (list, retrieve) and the
  current API key (`me`).
- Cursor pagination with automatic paging.
- Typed errors carrying the error code, HTTP status and request ID.
- Automatic retries with jittered exponential backoff for rate limits (honoring
  `Retry-After`), server errors and network failures.
- Automatic `Idempotency-Key` on every create request.
