// Code generated from the AveeCare OpenAPI specification. DO NOT EDIT.

import { APIResource, path, type RequestOptions } from '../core.js';
import type { PagePromise } from '../pagination.js';
import type {
  Invoice,
  InvoiceListParams,
  Me,
  Patient,
  PatientCreate,
  PatientDeleted,
  PatientListParams,
  PatientUpdate,
  Visit,
  VisitCreate,
  VisitDeleted,
  VisitListParams,
  VisitUpdate,
} from './models.js';

/** Patients are the clients your agency provides care to. */
export class Patients extends APIResource {
  /**
   * List patients.
   *
   * Returns a cursor-paginated list of patients, newest first.
   *
   * Requires the `read` scope.
   */
  list(params: PatientListParams = {}, options?: RequestOptions): PagePromise<Patient> {
    return this._client.getList<Patient>('/v1/patients', {
      status: params.status,
      updated_after: params.updatedAfter,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a patient.
   *
   * Creates a new patient. Send an Idempotency-Key header to make retries safe.
   *
   * Requires the `write` scope.
   */
  create(params: PatientCreate, options?: RequestOptions): Promise<Patient> {
    return this._client.request<Patient>({ method: 'POST', path: '/v1/patients', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a patient.
   *
   * Retrieves the patient with the given ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Patient> {
    return this._client.request<Patient>({ method: 'GET', path: path`/v1/patients/${id}` }, options);
  }

  /**
   * Update a patient.
   *
   * Updates the given fields of a patient. Fields you leave out are unchanged.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: PatientUpdate, options?: RequestOptions): Promise<Patient> {
    return this._client.request<Patient>({ method: 'PATCH', path: path`/v1/patients/${id}`, body: params }, options);
  }

  /**
   * Delete a patient.
   *
   * Permanently deletes a patient.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<PatientDeleted> {
    return this._client.request<PatientDeleted>({ method: 'DELETE', path: path`/v1/patients/${id}` }, options);
  }
}

/** Visits are scheduled or completed caregiver shifts at a patient home. */
export class Visits extends APIResource {
  /**
   * List visits.
   *
   * Returns visits whose start time falls in the given window. `start_from` and `start_to` are
   * required.
   *
   * Requires the `read` scope.
   */
  list(params: VisitListParams, options?: RequestOptions): PagePromise<Visit> {
    return this._client.getList<Visit>('/v1/visits', {
      start_from: params.startFrom,
      start_to: params.startTo,
      patient_id: params.patientId,
      caregiver_id: params.caregiverId,
      status: params.status,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a visit.
   *
   * Creates a new visit. Send an Idempotency-Key header to make retries safe.
   *
   * Requires the `write` scope.
   */
  create(params: VisitCreate, options?: RequestOptions): Promise<Visit> {
    return this._client.request<Visit>({ method: 'POST', path: '/v1/visits', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a visit.
   *
   * Retrieves the visit with the given ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Visit> {
    return this._client.request<Visit>({ method: 'GET', path: path`/v1/visits/${id}` }, options);
  }

  /**
   * Update a visit.
   *
   * Updates the given fields of a visit. Fields you leave out are unchanged.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: VisitUpdate, options?: RequestOptions): Promise<Visit> {
    return this._client.request<Visit>({ method: 'PATCH', path: path`/v1/visits/${id}`, body: params }, options);
  }

  /**
   * Delete a visit.
   *
   * Permanently deletes a visit.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<VisitDeleted> {
    return this._client.request<VisitDeleted>({ method: 'DELETE', path: path`/v1/visits/${id}` }, options);
  }
}

/** Invoices billed to patients and payers. Read-only. */
export class Invoices extends APIResource {
  /**
   * List invoices.
   *
   * Returns a cursor-paginated list of invoices, newest first.
   *
   * Requires the `read` scope.
   */
  list(params: InvoiceListParams = {}, options?: RequestOptions): PagePromise<Invoice> {
    return this._client.getList<Invoice>('/v1/invoices', {
      status: params.status,
      patient_id: params.patientId,
      updated_after: params.updatedAfter,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Retrieve a invoice.
   *
   * Retrieves the invoice with the given ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Invoice> {
    return this._client.request<Invoice>({ method: 'GET', path: path`/v1/invoices/${id}` }, options);
  }
}

/** Information about the API key making the request. */
export class MeResource extends APIResource {
  /**
   * Retrieve the current API key.
   *
   * Returns the API key making the request, its scopes and its organization.
   *
   * Requires the `read` scope.
   */
  retrieve(options?: RequestOptions): Promise<Me> {
    return this._client.request<Me>({ method: 'GET', path: '/v1/me' }, options);
  }
}
