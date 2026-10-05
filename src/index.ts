import { AveeCare } from './generated/client.js';

export default AveeCare;
export { AveeCare };
export {
  AveeCareError,
  APIError,
  InvalidRequestError,
  AuthenticationError,
  PermissionError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  APIConnectionError,
  APITimeoutError,
} from './errors.js';
export { Page, PagePromise } from './pagination.js';
export type { ListEnvelope } from './pagination.js';
export type { ClientOptions, RequestOptions } from './core.js';
export { VERSION } from './version.js';
export * from './generated/models.js';
export * from './generated/resources.js';
