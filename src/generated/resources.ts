// Code generated from the AveeCare OpenAPI specification. DO NOT EDIT.

import { APIResource, path, type RequestOptions } from '../core.js';
import type { PagePromise } from '../pagination.js';
import type {
  Alert,
  AlertCreate,
  AlertDeleted,
  AlertListParams,
  AlertUpdate,
  Allergy,
  AllergyCreate,
  AllergyDeleted,
  AllergyListParams,
  AllergyUpdate,
  Applicant,
  ApplicantCreate,
  ApplicantDeleted,
  ApplicantListParams,
  ApplicantUpdate,
  Authorization,
  AuthorizationCreate,
  AuthorizationDeleted,
  AuthorizationListParams,
  AuthorizationUpdate,
  Availability,
  AvailabilityCreate,
  AvailabilityDeleted,
  AvailabilityListParams,
  AvailabilityUpdate,
  CareGoal,
  CareGoalCreate,
  CareGoalDeleted,
  CareGoalListParams,
  CareGoalUpdate,
  CarePlan,
  CarePlanCreate,
  CarePlanDeleted,
  CarePlanListParams,
  CarePlanUpdate,
  Caregiver,
  CaregiverCreate,
  CaregiverDeleted,
  CaregiverListParams,
  CaregiverNote,
  CaregiverNoteCreate,
  CaregiverNoteDeleted,
  CaregiverNoteListParams,
  CaregiverNoteUpdate,
  CaregiverUpdate,
  Certification,
  CertificationCreate,
  CertificationDeleted,
  CertificationListParams,
  CertificationUpdate,
  Claim,
  ClaimListParams,
  Contact,
  ContactCreate,
  ContactDeleted,
  ContactListParams,
  ContactUpdate,
  Conversation,
  ConversationListParams,
  Event,
  EventCreate,
  EventDeleted,
  EventListParams,
  EventUpdate,
  Incident,
  IncidentCreate,
  IncidentDeleted,
  IncidentListParams,
  IncidentUpdate,
  Invoice,
  InvoiceLineItem,
  InvoiceLineItemListParams,
  InvoiceListParams,
  Me,
  Medication,
  MedicationAdministration,
  MedicationAdministrationListParams,
  MedicationCreate,
  MedicationDeleted,
  MedicationListParams,
  MedicationUpdate,
  Message,
  MessageCreate,
  MessageListParams,
  OasisAssessment,
  OasisAssessmentListParams,
  Office,
  OfficeCreate,
  OfficeDeleted,
  OfficeListParams,
  OfficeUpdate,
  OpenShift,
  OpenShiftCreate,
  OpenShiftDeleted,
  OpenShiftListParams,
  OpenShiftUpdate,
  Patient,
  PatientCreate,
  PatientDeleted,
  PatientListParams,
  PatientNote,
  PatientNoteCreate,
  PatientNoteDeleted,
  PatientNoteListParams,
  PatientNoteUpdate,
  PatientUpdate,
  PayrollEntry,
  PayrollEntryListParams,
  ProgressNote,
  ProgressNoteCreate,
  ProgressNoteDeleted,
  ProgressNoteListParams,
  ProgressNoteUpdate,
  Referral,
  ReferralCreate,
  ReferralDeleted,
  ReferralListParams,
  ReferralSource,
  ReferralSourceCreate,
  ReferralSourceDeleted,
  ReferralSourceListParams,
  ReferralSourceUpdate,
  ReferralUpdate,
  ShiftSwap,
  ShiftSwapCreate,
  ShiftSwapDeleted,
  ShiftSwapListParams,
  ShiftSwapUpdate,
  Specialization,
  SpecializationCreate,
  SpecializationDeleted,
  SpecializationListParams,
  SpecializationUpdate,
  Visit,
  VisitCreate,
  VisitDeleted,
  VisitListParams,
  VisitNote,
  VisitNoteCreate,
  VisitNoteDeleted,
  VisitNoteListParams,
  VisitNoteUpdate,
  VisitRequest,
  VisitRequestCreate,
  VisitRequestDeleted,
  VisitRequestListParams,
  VisitRequestUpdate,
  VisitUpdate,
} from './models.js';

/**
 * Patients are the clients your agency provides care to, including prospective clients you have
 * not yet admitted.
 */
export class Patients extends APIResource {
  /**
   * List patients.
   *
   * Returns a page of patients. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: PatientListParams = {}, options?: RequestOptions): PagePromise<Patient> {
    return this._client.getList<Patient>('/v1/patients', {
      status: params.status,
      active: params.active,
      lifecycle_stage: params.lifecycleStage,
      office_id: params.officeId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a patient.
   *
   * Creates a patient and returns it. Send an `Idempotency-Key` header to make the request safe to
   * retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: PatientCreate, options?: RequestOptions): Promise<Patient> {
    return this._client.request<Patient>({ method: 'POST', path: '/v1/patients', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a patient.
   *
   * Returns one patient by ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Patient> {
    return this._client.request<Patient>({ method: 'GET', path: path`/v1/patients/${id}` }, options);
  }

  /**
   * Update a patient.
   *
   * Changes the fields you send and returns the updated patient. Send `null` to clear an optional
   * field. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: PatientUpdate, options?: RequestOptions): Promise<Patient> {
    return this._client.request<Patient>({ method: 'PATCH', path: path`/v1/patients/${id}`, body: params }, options);
  }

  /**
   * Delete a patient.
   *
   * Deletes a patient. The patient's visits, notes and other related records are not deleted.
   * Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<PatientDeleted> {
    return this._client.request<PatientDeleted>({ method: 'DELETE', path: path`/v1/patients/${id}` }, options);
  }
}

/**
 * Contacts are family members and other people connected to a patient, such as an emergency
 * contact.
 */
export class Contacts extends APIResource {
  /**
   * List contacts.
   *
   * Returns a page of contacts. Filters combine with AND. Use `next_cursor` to fetch the next
   * page.
   *
   * Requires the `read` scope.
   */
  list(params: ContactListParams = {}, options?: RequestOptions): PagePromise<Contact> {
    return this._client.getList<Contact>('/v1/contacts', {
      patient_id: params.patientId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a contact.
   *
   * Creates a contact and returns it. Send an `Idempotency-Key` header to make the request safe to
   * retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: ContactCreate, options?: RequestOptions): Promise<Contact> {
    return this._client.request<Contact>({ method: 'POST', path: '/v1/contacts', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a contact.
   *
   * Returns one contact by ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Contact> {
    return this._client.request<Contact>({ method: 'GET', path: path`/v1/contacts/${id}` }, options);
  }

  /**
   * Update a contact.
   *
   * Changes the fields you send and returns the updated contact. Send `null` to clear an optional
   * field. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: ContactUpdate, options?: RequestOptions): Promise<Contact> {
    return this._client.request<Contact>({ method: 'PATCH', path: path`/v1/contacts/${id}`, body: params }, options);
  }

  /**
   * Delete a contact.
   *
   * Deletes a contact. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<ContactDeleted> {
    return this._client.request<ContactDeleted>({ method: 'DELETE', path: path`/v1/contacts/${id}` }, options);
  }
}

/** Allergies recorded on a patient's profile. */
export class Allergies extends APIResource {
  /**
   * List allergies.
   *
   * Returns a page of allergies. Filters combine with AND. Use `next_cursor` to fetch the next
   * page.
   *
   * Requires the `read` scope.
   */
  list(params: AllergyListParams = {}, options?: RequestOptions): PagePromise<Allergy> {
    return this._client.getList<Allergy>('/v1/allergies', {
      patient_id: params.patientId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create an allergy.
   *
   * Creates an allergy and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: AllergyCreate, options?: RequestOptions): Promise<Allergy> {
    return this._client.request<Allergy>({ method: 'POST', path: '/v1/allergies', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve an allergy.
   *
   * Returns one allergy by ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Allergy> {
    return this._client.request<Allergy>({ method: 'GET', path: path`/v1/allergies/${id}` }, options);
  }

  /**
   * Update an allergy.
   *
   * Changes the fields you send and returns the updated allergy. Send `null` to clear an optional
   * field. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: AllergyUpdate, options?: RequestOptions): Promise<Allergy> {
    return this._client.request<Allergy>({ method: 'PATCH', path: path`/v1/allergies/${id}`, body: params }, options);
  }

  /**
   * Delete an allergy.
   *
   * Deletes an allergy. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<AllergyDeleted> {
    return this._client.request<AllergyDeleted>({ method: 'DELETE', path: path`/v1/allergies/${id}` }, options);
  }
}

/**
 * Medications on a patient's medication list, with the schedule caregivers follow when they give
 * or assist with them.
 */
export class Medications extends APIResource {
  /**
   * List medications.
   *
   * Returns a page of medications. Filters combine with AND. Use `next_cursor` to fetch the next
   * page.
   *
   * Requires the `read` scope.
   */
  list(params: MedicationListParams = {}, options?: RequestOptions): PagePromise<Medication> {
    return this._client.getList<Medication>('/v1/medications', {
      patient_id: params.patientId,
      status: params.status,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a medication.
   *
   * Creates a medication and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: MedicationCreate, options?: RequestOptions): Promise<Medication> {
    return this._client.request<Medication>({ method: 'POST', path: '/v1/medications', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a medication.
   *
   * Returns one medication by ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Medication> {
    return this._client.request<Medication>({ method: 'GET', path: path`/v1/medications/${id}` }, options);
  }

  /**
   * Update a medication.
   *
   * Changes the fields you send and returns the updated medication. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: MedicationUpdate, options?: RequestOptions): Promise<Medication> {
    return this._client.request<Medication>({ method: 'PATCH', path: path`/v1/medications/${id}`, body: params }, options);
  }

  /**
   * Delete a medication.
   *
   * Deletes a medication. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<MedicationDeleted> {
    return this._client.request<MedicationDeleted>({ method: 'DELETE', path: path`/v1/medications/${id}` }, options);
  }
}

/** Goals of care set for a patient, such as walking to the mailbox unaided. */
export class CareGoals extends APIResource {
  /**
   * List care goals.
   *
   * Returns a page of care goals. Filters combine with AND. Use `next_cursor` to fetch the next
   * page.
   *
   * Requires the `read` scope.
   */
  list(params: CareGoalListParams = {}, options?: RequestOptions): PagePromise<CareGoal> {
    return this._client.getList<CareGoal>('/v1/care-goals', {
      patient_id: params.patientId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a care goal.
   *
   * Creates a care goal and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: CareGoalCreate, options?: RequestOptions): Promise<CareGoal> {
    return this._client.request<CareGoal>({ method: 'POST', path: '/v1/care-goals', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a care goal.
   *
   * Returns one care goal by ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<CareGoal> {
    return this._client.request<CareGoal>({ method: 'GET', path: path`/v1/care-goals/${id}` }, options);
  }

  /**
   * Update a care goal.
   *
   * Changes the fields you send and returns the updated care goal. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: CareGoalUpdate, options?: RequestOptions): Promise<CareGoal> {
    return this._client.request<CareGoal>({ method: 'PATCH', path: path`/v1/care-goals/${id}`, body: params }, options);
  }

  /**
   * Delete a care goal.
   *
   * Deletes a care goal. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<CareGoalDeleted> {
    return this._client.request<CareGoalDeleted>({ method: 'DELETE', path: path`/v1/care-goals/${id}` }, options);
  }
}

/** Notes your staff and caregivers keep on a patient's profile. */
export class PatientNotes extends APIResource {
  /**
   * List patient notes.
   *
   * Returns a page of patient notes. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: PatientNoteListParams = {}, options?: RequestOptions): PagePromise<PatientNote> {
    return this._client.getList<PatientNote>('/v1/patient-notes', {
      patient_id: params.patientId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a patient note.
   *
   * Creates a patient note and returns it. Send an `Idempotency-Key` header to make the request
   * safe to retry. Available to keys belonging to office staff and caregivers. With a caregiver's
   * or patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: PatientNoteCreate, options?: RequestOptions): Promise<PatientNote> {
    return this._client.request<PatientNote>({ method: 'POST', path: '/v1/patient-notes', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a patient note.
   *
   * Returns one patient note by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<PatientNote> {
    return this._client.request<PatientNote>({ method: 'GET', path: path`/v1/patient-notes/${id}` }, options);
  }

  /**
   * Update a patient note.
   *
   * Changes the fields you send and returns the updated patient note. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: PatientNoteUpdate, options?: RequestOptions): Promise<PatientNote> {
    return this._client.request<PatientNote>({ method: 'PATCH', path: path`/v1/patient-notes/${id}`, body: params }, options);
  }

  /**
   * Delete a patient note.
   *
   * Deletes a patient note. Available to keys belonging to office staff. Requires a key with
   * `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<PatientNoteDeleted> {
    return this._client.request<PatientNoteDeleted>({ method: 'DELETE', path: path`/v1/patient-notes/${id}` }, options);
  }
}

/**
 * The medication administration record (MAR): each dose a caregiver gave, or the reason it was not
 * given. Read-only.
 */
export class MedicationAdministrations extends APIResource {
  /**
   * List medication administrations.
   *
   * Returns a page of medication administrations. Filters combine with AND. Use `next_cursor` to
   * fetch the next page.
   *
   * Requires the `read` scope.
   */
  list(params: MedicationAdministrationListParams = {}, options?: RequestOptions): PagePromise<MedicationAdministration> {
    return this._client.getList<MedicationAdministration>('/v1/medication-administrations', {
      patient_id: params.patientId,
      medication_id: params.medicationId,
      scheduled_date: params.scheduledDate,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Retrieve a medication administration.
   *
   * Returns one medication administration by ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<MedicationAdministration> {
    return this._client.request<MedicationAdministration>({ method: 'GET', path: path`/v1/medication-administrations/${id}` }, options);
  }
}

/**
 * OASIS assessments recorded for Medicare home health patients. This lists each assessment and its
 * status; the item-level answers are not included. Read-only.
 */
export class OasisAssessments extends APIResource {
  /**
   * List OASIS assessments.
   *
   * Returns a page of OASIS assessments. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: OasisAssessmentListParams = {}, options?: RequestOptions): PagePromise<OasisAssessment> {
    return this._client.getList<OasisAssessment>('/v1/oasis-assessments', {
      patient_id: params.patientId,
      status: params.status,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Retrieve an OASIS assessment.
   *
   * Returns one OASIS assessment by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<OasisAssessment> {
    return this._client.request<OasisAssessment>({ method: 'GET', path: path`/v1/oasis-assessments/${id}` }, options);
  }
}

/** Caregivers are the aides, nurses and therapists your agency schedules to visit patients. */
export class Caregivers extends APIResource {
  /**
   * List caregivers.
   *
   * Returns a page of caregivers. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: CaregiverListParams = {}, options?: RequestOptions): PagePromise<Caregiver> {
    return this._client.getList<Caregiver>('/v1/caregivers', {
      status: params.status,
      active: params.active,
      office_id: params.officeId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a caregiver.
   *
   * Creates a caregiver and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: CaregiverCreate, options?: RequestOptions): Promise<Caregiver> {
    return this._client.request<Caregiver>({ method: 'POST', path: '/v1/caregivers', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a caregiver.
   *
   * Returns one caregiver by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Caregiver> {
    return this._client.request<Caregiver>({ method: 'GET', path: path`/v1/caregivers/${id}` }, options);
  }

  /**
   * Update a caregiver.
   *
   * Changes the fields you send and returns the updated caregiver. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: CaregiverUpdate, options?: RequestOptions): Promise<Caregiver> {
    return this._client.request<Caregiver>({ method: 'PATCH', path: path`/v1/caregivers/${id}`, body: params }, options);
  }

  /**
   * Delete a caregiver.
   *
   * Deletes a caregiver. The caregiver's past visits and other related records are not deleted.
   * Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<CaregiverDeleted> {
    return this._client.request<CaregiverDeleted>({ method: 'DELETE', path: path`/v1/caregivers/${id}` }, options);
  }
}

/** Notes your staff keep on a caregiver's profile. */
export class CaregiverNotes extends APIResource {
  /**
   * List caregiver notes.
   *
   * Returns a page of caregiver notes. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: CaregiverNoteListParams = {}, options?: RequestOptions): PagePromise<CaregiverNote> {
    return this._client.getList<CaregiverNote>('/v1/caregiver-notes', {
      caregiver_id: params.caregiverId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a caregiver note.
   *
   * Creates a caregiver note and returns it. Send an `Idempotency-Key` header to make the request
   * safe to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: CaregiverNoteCreate, options?: RequestOptions): Promise<CaregiverNote> {
    return this._client.request<CaregiverNote>({ method: 'POST', path: '/v1/caregiver-notes', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a caregiver note.
   *
   * Returns one caregiver note by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<CaregiverNote> {
    return this._client.request<CaregiverNote>({ method: 'GET', path: path`/v1/caregiver-notes/${id}` }, options);
  }

  /**
   * Update a caregiver note.
   *
   * Changes the fields you send and returns the updated caregiver note. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: CaregiverNoteUpdate, options?: RequestOptions): Promise<CaregiverNote> {
    return this._client.request<CaregiverNote>({ method: 'PATCH', path: path`/v1/caregiver-notes/${id}`, body: params }, options);
  }

  /**
   * Delete a caregiver note.
   *
   * Deletes a caregiver note. Available to keys belonging to office staff. Requires a key with
   * `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<CaregiverNoteDeleted> {
    return this._client.request<CaregiverNoteDeleted>({ method: 'DELETE', path: path`/v1/caregiver-notes/${id}` }, options);
  }
}

/**
 * Certifications, licenses and background checks on a caregiver's profile, with their expiry
 * dates.
 */
export class Certifications extends APIResource {
  /**
   * List certifications.
   *
   * Returns a page of certifications. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: CertificationListParams = {}, options?: RequestOptions): PagePromise<Certification> {
    return this._client.getList<Certification>('/v1/certifications', {
      caregiver_id: params.caregiverId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a certification.
   *
   * Creates a certification and returns it. Send an `Idempotency-Key` header to make the request
   * safe to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: CertificationCreate, options?: RequestOptions): Promise<Certification> {
    return this._client.request<Certification>({ method: 'POST', path: '/v1/certifications', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a certification.
   *
   * Returns one certification by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Certification> {
    return this._client.request<Certification>({ method: 'GET', path: path`/v1/certifications/${id}` }, options);
  }

  /**
   * Update a certification.
   *
   * Changes the fields you send and returns the updated certification. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: CertificationUpdate, options?: RequestOptions): Promise<Certification> {
    return this._client.request<Certification>({ method: 'PATCH', path: path`/v1/certifications/${id}`, body: params }, options);
  }

  /**
   * Delete a certification.
   *
   * Deletes a certification. Available to keys belonging to office staff. Requires a key with
   * `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<CertificationDeleted> {
    return this._client.request<CertificationDeleted>({ method: 'DELETE', path: path`/v1/certifications/${id}` }, options);
  }
}

/**
 * When a caregiver can or cannot work. A window is either a weekly recurring time on one weekday,
 * or a one-off date range such as time off.
 */
export class AvailabilityResource extends APIResource {
  /**
   * List availability windows.
   *
   * Returns a page of availability windows. Filters combine with AND. Use `next_cursor` to fetch
   * the next page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: AvailabilityListParams = {}, options?: RequestOptions): PagePromise<Availability> {
    return this._client.getList<Availability>('/v1/availability', {
      caregiver_id: params.caregiverId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create an availability window.
   *
   * Creates an availability window and returns it. Send an `Idempotency-Key` header to make the
   * request safe to retry. Available to keys belonging to office staff and caregivers. With a
   * caregiver's or patient's key, a saved record that key cannot read back is answered with only
   * `object` and `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: AvailabilityCreate, options?: RequestOptions): Promise<Availability> {
    return this._client.request<Availability>({ method: 'POST', path: '/v1/availability', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve an availability window.
   *
   * Returns one availability window by ID. Available to keys belonging to office staff and
   * caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Availability> {
    return this._client.request<Availability>({ method: 'GET', path: path`/v1/availability/${id}` }, options);
  }

  /**
   * Update an availability window.
   *
   * Changes the fields you send and returns the updated availability window. Send `null` to clear
   * an optional field. Available to keys belonging to office staff and caregivers. With a
   * caregiver's or patient's key, a saved record that key cannot read back is answered with only
   * `object` and `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: AvailabilityUpdate, options?: RequestOptions): Promise<Availability> {
    return this._client.request<Availability>({ method: 'PATCH', path: path`/v1/availability/${id}`, body: params }, options);
  }

  /**
   * Delete an availability window.
   *
   * Deletes an availability window. Available to keys belonging to office staff and caregivers.
   * Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<AvailabilityDeleted> {
    return this._client.request<AvailabilityDeleted>({ method: 'DELETE', path: path`/v1/availability/${id}` }, options);
  }
}

/** Skills and specialties on a caregiver's profile, such as dementia care or Hoyer lift transfers. */
export class Specializations extends APIResource {
  /**
   * List specializations.
   *
   * Returns a page of specializations. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: SpecializationListParams = {}, options?: RequestOptions): PagePromise<Specialization> {
    return this._client.getList<Specialization>('/v1/specializations', {
      caregiver_id: params.caregiverId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a specialization.
   *
   * Creates a specialization and returns it. Send an `Idempotency-Key` header to make the request
   * safe to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: SpecializationCreate, options?: RequestOptions): Promise<Specialization> {
    return this._client.request<Specialization>({ method: 'POST', path: '/v1/specializations', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a specialization.
   *
   * Returns one specialization by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Specialization> {
    return this._client.request<Specialization>({ method: 'GET', path: path`/v1/specializations/${id}` }, options);
  }

  /**
   * Update a specialization.
   *
   * Changes the fields you send and returns the updated specialization. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: SpecializationUpdate, options?: RequestOptions): Promise<Specialization> {
    return this._client.request<Specialization>({ method: 'PATCH', path: path`/v1/specializations/${id}`, body: params }, options);
  }

  /**
   * Delete a specialization.
   *
   * Deletes a specialization. Available to keys belonging to office staff. Requires a key with
   * `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<SpecializationDeleted> {
    return this._client.request<SpecializationDeleted>({ method: 'DELETE', path: path`/v1/specializations/${id}` }, options);
  }
}

/**
 * People who applied to work for your agency, tracked through your hiring stages until they are
 * hired as caregivers.
 */
export class Applicants extends APIResource {
  /**
   * List applicants.
   *
   * Returns a page of applicants. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: ApplicantListParams = {}, options?: RequestOptions): PagePromise<Applicant> {
    return this._client.getList<Applicant>('/v1/applicants', {
      stage: params.stage,
      office_id: params.officeId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create an applicant.
   *
   * Creates an applicant and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: ApplicantCreate, options?: RequestOptions): Promise<Applicant> {
    return this._client.request<Applicant>({ method: 'POST', path: '/v1/applicants', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve an applicant.
   *
   * Returns one applicant by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Applicant> {
    return this._client.request<Applicant>({ method: 'GET', path: path`/v1/applicants/${id}` }, options);
  }

  /**
   * Update an applicant.
   *
   * Changes the fields you send and returns the updated applicant. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: ApplicantUpdate, options?: RequestOptions): Promise<Applicant> {
    return this._client.request<Applicant>({ method: 'PATCH', path: path`/v1/applicants/${id}`, body: params }, options);
  }

  /**
   * Delete an applicant.
   *
   * Deletes an applicant. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<ApplicantDeleted> {
    return this._client.request<ApplicantDeleted>({ method: 'DELETE', path: path`/v1/applicants/${id}` }, options);
  }
}

/**
 * Visits are scheduled or completed caregiver shifts at a patient's home. A visit's patient,
 * caregiver, times and status are set when it is created; reschedule or reassign a visit in
 * AveeCare.
 */
export class Visits extends APIResource {
  /**
   * List visits.
   *
   * Returns a page of visits, ordered by scheduled start, earliest first. Filters combine with
   * AND. Use `next_cursor` to fetch the next page.
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
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a visit.
   *
   * Creates a visit and returns it. Send an `Idempotency-Key` header to make the request safe to
   * retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: VisitCreate, options?: RequestOptions): Promise<Visit> {
    return this._client.request<Visit>({ method: 'POST', path: '/v1/visits', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a visit.
   *
   * Returns one visit by ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Visit> {
    return this._client.request<Visit>({ method: 'GET', path: path`/v1/visits/${id}` }, options);
  }

  /**
   * Update a visit.
   *
   * Changes the fields you send and returns the updated visit. Send `null` to clear an optional
   * field. Available to keys belonging to office staff and caregivers. With a caregiver's or
   * patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: VisitUpdate, options?: RequestOptions): Promise<Visit> {
    return this._client.request<Visit>({ method: 'PATCH', path: path`/v1/visits/${id}`, body: params }, options);
  }

  /**
   * Delete a visit.
   *
   * Deletes a visit. The visit moves to the schedule's recycle bin in AveeCare, where staff can
   * restore it. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<VisitDeleted> {
    return this._client.request<VisitDeleted>({ method: 'DELETE', path: path`/v1/visits/${id}` }, options);
  }
}

/** Notes written about a visit by the caregiver or office staff. */
export class VisitNotes extends APIResource {
  /**
   * List visit notes.
   *
   * Returns a page of visit notes. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: VisitNoteListParams = {}, options?: RequestOptions): PagePromise<VisitNote> {
    return this._client.getList<VisitNote>('/v1/visit-notes', {
      visit_id: params.visitId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a visit note.
   *
   * Creates a visit note and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff and caregivers. With a caregiver's or
   * patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: VisitNoteCreate, options?: RequestOptions): Promise<VisitNote> {
    return this._client.request<VisitNote>({ method: 'POST', path: '/v1/visit-notes', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a visit note.
   *
   * Returns one visit note by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<VisitNote> {
    return this._client.request<VisitNote>({ method: 'GET', path: path`/v1/visit-notes/${id}` }, options);
  }

  /**
   * Update a visit note.
   *
   * Changes the fields you send and returns the updated visit note. Send `null` to clear an
   * optional field. Available to keys belonging to office staff and caregivers. With a caregiver's
   * or patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: VisitNoteUpdate, options?: RequestOptions): Promise<VisitNote> {
    return this._client.request<VisitNote>({ method: 'PATCH', path: path`/v1/visit-notes/${id}`, body: params }, options);
  }

  /**
   * Delete a visit note.
   *
   * Deletes a visit note. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<VisitNoteDeleted> {
    return this._client.request<VisitNoteDeleted>({ method: 'DELETE', path: path`/v1/visit-notes/${id}` }, options);
  }
}

/** Requests from caregivers to pick up visits with a patient, which office staff approve or deny. */
export class VisitRequests extends APIResource {
  /**
   * List visit requests.
   *
   * Returns a page of visit requests. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: VisitRequestListParams = {}, options?: RequestOptions): PagePromise<VisitRequest> {
    return this._client.getList<VisitRequest>('/v1/visit-requests', {
      caregiver_id: params.caregiverId,
      status: params.status,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a visit request.
   *
   * Creates a visit request and returns it. Send an `Idempotency-Key` header to make the request
   * safe to retry. Available to keys belonging to office staff and caregivers. With a caregiver's
   * or patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: VisitRequestCreate, options?: RequestOptions): Promise<VisitRequest> {
    return this._client.request<VisitRequest>({ method: 'POST', path: '/v1/visit-requests', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a visit request.
   *
   * Returns one visit request by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<VisitRequest> {
    return this._client.request<VisitRequest>({ method: 'GET', path: path`/v1/visit-requests/${id}` }, options);
  }

  /**
   * Update a visit request.
   *
   * Changes the fields you send and returns the updated visit request. Send `null` to clear an
   * optional field. Available to keys belonging to office staff and caregivers. With a caregiver's
   * or patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: VisitRequestUpdate, options?: RequestOptions): Promise<VisitRequest> {
    return this._client.request<VisitRequest>({ method: 'PATCH', path: path`/v1/visit-requests/${id}`, body: params }, options);
  }

  /**
   * Delete a visit request.
   *
   * Deletes a visit request. Available to keys belonging to office staff. Requires a key with
   * `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<VisitRequestDeleted> {
    return this._client.request<VisitRequestDeleted>({ method: 'DELETE', path: path`/v1/visit-requests/${id}` }, options);
  }
}

/** Open shifts are unassigned visits offered to caregivers so one of them can claim it. */
export class OpenShifts extends APIResource {
  /**
   * List open shifts.
   *
   * Returns a page of open shifts. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: OpenShiftListParams = {}, options?: RequestOptions): PagePromise<OpenShift> {
    return this._client.getList<OpenShift>('/v1/open-shifts', {
      status: params.status,
      visit_id: params.visitId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create an open shift.
   *
   * Creates an open shift and returns it. Send an `Idempotency-Key` header to make the request
   * safe to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: OpenShiftCreate, options?: RequestOptions): Promise<OpenShift> {
    return this._client.request<OpenShift>({ method: 'POST', path: '/v1/open-shifts', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve an open shift.
   *
   * Returns one open shift by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<OpenShift> {
    return this._client.request<OpenShift>({ method: 'GET', path: path`/v1/open-shifts/${id}` }, options);
  }

  /**
   * Update an open shift.
   *
   * Changes the fields you send and returns the updated open shift. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: OpenShiftUpdate, options?: RequestOptions): Promise<OpenShift> {
    return this._client.request<OpenShift>({ method: 'PATCH', path: path`/v1/open-shifts/${id}`, body: params }, options);
  }

  /**
   * Delete an open shift.
   *
   * Deletes an open shift. Available to keys belonging to office staff. Requires a key with
   * `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<OpenShiftDeleted> {
    return this._client.request<OpenShiftDeleted>({ method: 'DELETE', path: path`/v1/open-shifts/${id}` }, options);
  }
}

/**
 * Requests from one caregiver to hand a visit to another, which the other caregiver and then the
 * office approve.
 */
export class ShiftSwaps extends APIResource {
  /**
   * List shift swaps.
   *
   * Returns a page of shift swaps. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: ShiftSwapListParams = {}, options?: RequestOptions): PagePromise<ShiftSwap> {
    return this._client.getList<ShiftSwap>('/v1/shift-swaps', {
      status: params.status,
      visit_id: params.visitId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a shift swap.
   *
   * Creates a shift swap and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff and caregivers. With a caregiver's or
   * patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: ShiftSwapCreate, options?: RequestOptions): Promise<ShiftSwap> {
    return this._client.request<ShiftSwap>({ method: 'POST', path: '/v1/shift-swaps', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a shift swap.
   *
   * Returns one shift swap by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<ShiftSwap> {
    return this._client.request<ShiftSwap>({ method: 'GET', path: path`/v1/shift-swaps/${id}` }, options);
  }

  /**
   * Update a shift swap.
   *
   * Changes the fields you send and returns the updated shift swap. Send `null` to clear an
   * optional field. Available to keys belonging to office staff and caregivers. With a caregiver's
   * or patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: ShiftSwapUpdate, options?: RequestOptions): Promise<ShiftSwap> {
    return this._client.request<ShiftSwap>({ method: 'PATCH', path: path`/v1/shift-swaps/${id}`, body: params }, options);
  }

  /**
   * Delete a shift swap.
   *
   * Deletes a shift swap. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<ShiftSwapDeleted> {
    return this._client.request<ShiftSwapDeleted>({ method: 'DELETE', path: path`/v1/shift-swaps/${id}` }, options);
  }
}

/**
 * Care plans describe the services a patient receives, how often, and when the plan is next
 * reviewed. The plan's goals and task lists are managed in AveeCare and are not included here.
 */
export class CarePlans extends APIResource {
  /**
   * List care plans.
   *
   * Returns a page of care plans. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: CarePlanListParams = {}, options?: RequestOptions): PagePromise<CarePlan> {
    return this._client.getList<CarePlan>('/v1/care-plans', {
      patient_id: params.patientId,
      status: params.status,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a care plan.
   *
   * Creates a care plan and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: CarePlanCreate, options?: RequestOptions): Promise<CarePlan> {
    return this._client.request<CarePlan>({ method: 'POST', path: '/v1/care-plans', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a care plan.
   *
   * Returns one care plan by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<CarePlan> {
    return this._client.request<CarePlan>({ method: 'GET', path: path`/v1/care-plans/${id}` }, options);
  }

  /**
   * Update a care plan.
   *
   * Changes the fields you send and returns the updated care plan. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: CarePlanUpdate, options?: RequestOptions): Promise<CarePlan> {
    return this._client.request<CarePlan>({ method: 'PATCH', path: path`/v1/care-plans/${id}`, body: params }, options);
  }

  /**
   * Delete a care plan.
   *
   * Deletes a care plan. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<CarePlanDeleted> {
    return this._client.request<CarePlanDeleted>({ method: 'DELETE', path: path`/v1/care-plans/${id}` }, options);
  }
}

/** Progress notes are the clinical summaries caregivers write after a visit. */
export class ProgressNotes extends APIResource {
  /**
   * List progress notes.
   *
   * Returns a page of progress notes. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: ProgressNoteListParams = {}, options?: RequestOptions): PagePromise<ProgressNote> {
    return this._client.getList<ProgressNote>('/v1/progress-notes', {
      patient_id: params.patientId,
      visit_id: params.visitId,
      caregiver_id: params.caregiverId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a progress note.
   *
   * Creates a progress note and returns it. Send an `Idempotency-Key` header to make the request
   * safe to retry. Available to keys belonging to office staff and caregivers. With a caregiver's
   * or patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: ProgressNoteCreate, options?: RequestOptions): Promise<ProgressNote> {
    return this._client.request<ProgressNote>({ method: 'POST', path: '/v1/progress-notes', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a progress note.
   *
   * Returns one progress note by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<ProgressNote> {
    return this._client.request<ProgressNote>({ method: 'GET', path: path`/v1/progress-notes/${id}` }, options);
  }

  /**
   * Update a progress note.
   *
   * Changes the fields you send and returns the updated progress note. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: ProgressNoteUpdate, options?: RequestOptions): Promise<ProgressNote> {
    return this._client.request<ProgressNote>({ method: 'PATCH', path: path`/v1/progress-notes/${id}`, body: params }, options);
  }

  /**
   * Delete a progress note.
   *
   * Deletes a progress note. Available to keys belonging to office staff. Requires a key with
   * `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<ProgressNoteDeleted> {
    return this._client.request<ProgressNoteDeleted>({ method: 'DELETE', path: path`/v1/progress-notes/${id}` }, options);
  }
}

/**
 * Payer authorizations: how many units of a service a payer has approved for a patient, and over
 * what dates.
 */
export class Authorizations extends APIResource {
  /**
   * List authorizations.
   *
   * Returns a page of authorizations. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: AuthorizationListParams = {}, options?: RequestOptions): PagePromise<Authorization> {
    return this._client.getList<Authorization>('/v1/authorizations', {
      patient_id: params.patientId,
      status: params.status,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create an authorization.
   *
   * Creates an authorization and returns it. Send an `Idempotency-Key` header to make the request
   * safe to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: AuthorizationCreate, options?: RequestOptions): Promise<Authorization> {
    return this._client.request<Authorization>({ method: 'POST', path: '/v1/authorizations', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve an authorization.
   *
   * Returns one authorization by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Authorization> {
    return this._client.request<Authorization>({ method: 'GET', path: path`/v1/authorizations/${id}` }, options);
  }

  /**
   * Update an authorization.
   *
   * Changes the fields you send and returns the updated authorization. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: AuthorizationUpdate, options?: RequestOptions): Promise<Authorization> {
    return this._client.request<Authorization>({ method: 'PATCH', path: path`/v1/authorizations/${id}`, body: params }, options);
  }

  /**
   * Delete an authorization.
   *
   * Deletes an authorization. Available to keys belonging to office staff. Requires a key with
   * `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<AuthorizationDeleted> {
    return this._client.request<AuthorizationDeleted>({ method: 'DELETE', path: path`/v1/authorizations/${id}` }, options);
  }
}

/**
 * Incident reports: falls, injuries, medication errors and other events that need follow-up, often
 * for regulatory reporting.
 */
export class Incidents extends APIResource {
  /**
   * List incidents.
   *
   * Returns a page of incidents. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: IncidentListParams = {}, options?: RequestOptions): PagePromise<Incident> {
    return this._client.getList<Incident>('/v1/incidents', {
      status: params.status,
      patient_id: params.patientId,
      caregiver_id: params.caregiverId,
      resolved: params.resolved,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create an incident.
   *
   * Creates an incident and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff and caregivers. With a caregiver's or
   * patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: IncidentCreate, options?: RequestOptions): Promise<Incident> {
    return this._client.request<Incident>({ method: 'POST', path: '/v1/incidents', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve an incident.
   *
   * Returns one incident by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Incident> {
    return this._client.request<Incident>({ method: 'GET', path: path`/v1/incidents/${id}` }, options);
  }

  /**
   * Update an incident.
   *
   * Changes the fields you send and returns the updated incident. Send `null` to clear an optional
   * field. Available to keys belonging to office staff and caregivers. With a caregiver's or
   * patient's key, a saved record that key cannot read back is answered with only `object` and
   * `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: IncidentUpdate, options?: RequestOptions): Promise<Incident> {
    return this._client.request<Incident>({ method: 'PATCH', path: path`/v1/incidents/${id}`, body: params }, options);
  }

  /**
   * Delete an incident.
   *
   * Deletes an incident. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<IncidentDeleted> {
    return this._client.request<IncidentDeleted>({ method: 'DELETE', path: path`/v1/incidents/${id}` }, options);
  }
}

/**
 * Events your agency documents about a patient, caregiver or visit, such as a complaint, a
 * compliment or an attendance issue.
 */
export class Events extends APIResource {
  /**
   * List events.
   *
   * Returns a page of events. Filters combine with AND. Use `next_cursor` to fetch the next page.
   * Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: EventListParams = {}, options?: RequestOptions): PagePromise<Event> {
    return this._client.getList<Event>('/v1/events', {
      status: params.status,
      patient_id: params.patientId,
      caregiver_id: params.caregiverId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create an event.
   *
   * Creates an event and returns it. Send an `Idempotency-Key` header to make the request safe to
   * retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: EventCreate, options?: RequestOptions): Promise<Event> {
    return this._client.request<Event>({ method: 'POST', path: '/v1/events', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve an event.
   *
   * Returns one event by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Event> {
    return this._client.request<Event>({ method: 'GET', path: path`/v1/events/${id}` }, options);
  }

  /**
   * Update an event.
   *
   * Changes the fields you send and returns the updated event. Send `null` to clear an optional
   * field. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: EventUpdate, options?: RequestOptions): Promise<Event> {
    return this._client.request<Event>({ method: 'PATCH', path: path`/v1/events/${id}`, body: params }, options);
  }

  /**
   * Delete an event.
   *
   * Deletes an event. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<EventDeleted> {
    return this._client.request<EventDeleted>({ method: 'DELETE', path: path`/v1/events/${id}` }, options);
  }
}

/** Hospitals, physicians, case managers and other organizations that refer clients to your agency. */
export class ReferralSources extends APIResource {
  /**
   * List referral sources.
   *
   * Returns a page of referral sources. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: ReferralSourceListParams = {}, options?: RequestOptions): PagePromise<ReferralSource> {
    return this._client.getList<ReferralSource>('/v1/referral-sources', {
      is_active: params.isActive,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a referral source.
   *
   * Creates a referral source and returns it. Send an `Idempotency-Key` header to make the request
   * safe to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: ReferralSourceCreate, options?: RequestOptions): Promise<ReferralSource> {
    return this._client.request<ReferralSource>({ method: 'POST', path: '/v1/referral-sources', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a referral source.
   *
   * Returns one referral source by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<ReferralSource> {
    return this._client.request<ReferralSource>({ method: 'GET', path: path`/v1/referral-sources/${id}` }, options);
  }

  /**
   * Update a referral source.
   *
   * Changes the fields you send and returns the updated referral source. Send `null` to clear an
   * optional field. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: ReferralSourceUpdate, options?: RequestOptions): Promise<ReferralSource> {
    return this._client.request<ReferralSource>({ method: 'PATCH', path: path`/v1/referral-sources/${id}`, body: params }, options);
  }

  /**
   * Delete a referral source.
   *
   * Deletes a referral source. Available to keys belonging to office staff. Requires a key with
   * `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<ReferralSourceDeleted> {
    return this._client.request<ReferralSourceDeleted>({ method: 'DELETE', path: path`/v1/referral-sources/${id}` }, options);
  }
}

/** Individual referrals of a prospective client, tracked from first contact to admission. */
export class Referrals extends APIResource {
  /**
   * List referrals.
   *
   * Returns a page of referrals. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: ReferralListParams = {}, options?: RequestOptions): PagePromise<Referral> {
    return this._client.getList<Referral>('/v1/referrals', {
      status: params.status,
      referral_source_id: params.referralSourceId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a referral.
   *
   * Creates a referral and returns it. Send an `Idempotency-Key` header to make the request safe
   * to retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: ReferralCreate, options?: RequestOptions): Promise<Referral> {
    return this._client.request<Referral>({ method: 'POST', path: '/v1/referrals', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a referral.
   *
   * Returns one referral by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Referral> {
    return this._client.request<Referral>({ method: 'GET', path: path`/v1/referrals/${id}` }, options);
  }

  /**
   * Update a referral.
   *
   * Changes the fields you send and returns the updated referral. Send `null` to clear an optional
   * field. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: ReferralUpdate, options?: RequestOptions): Promise<Referral> {
    return this._client.request<Referral>({ method: 'PATCH', path: path`/v1/referrals/${id}`, body: params }, options);
  }

  /**
   * Delete a referral.
   *
   * Deletes a referral. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<ReferralDeleted> {
    return this._client.request<ReferralDeleted>({ method: 'DELETE', path: path`/v1/referrals/${id}` }, options);
  }
}

/** Invoices billed to patients and their families for private-pay care. Read-only. */
export class Invoices extends APIResource {
  /**
   * List invoices.
   *
   * Returns a page of invoices. Filters combine with AND. Use `next_cursor` to fetch the next
   * page. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: InvoiceListParams = {}, options?: RequestOptions): PagePromise<Invoice> {
    return this._client.getList<Invoice>('/v1/invoices', {
      patient_id: params.patientId,
      status: params.status,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Retrieve an invoice.
   *
   * Returns one invoice by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Invoice> {
    return this._client.request<Invoice>({ method: 'GET', path: path`/v1/invoices/${id}` }, options);
  }
}

/** The individual charges on an invoice. Read-only. */
export class InvoiceLineItems extends APIResource {
  /**
   * List invoice line items.
   *
   * Returns a page of invoice line items. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: InvoiceLineItemListParams = {}, options?: RequestOptions): PagePromise<InvoiceLineItem> {
    return this._client.getList<InvoiceLineItem>('/v1/invoice-line-items', {
      invoice_id: params.invoiceId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Retrieve an invoice line item.
   *
   * Returns one invoice line item by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<InvoiceLineItem> {
    return this._client.request<InvoiceLineItem>({ method: 'GET', path: path`/v1/invoice-line-items/${id}` }, options);
  }
}

/**
 * Insurance claims billed to Medicaid, Medicare and other payers, with their adjudication status.
 * Read-only.
 */
export class Claims extends APIResource {
  /**
   * List claims.
   *
   * Returns a page of claims. Filters combine with AND. Use `next_cursor` to fetch the next page.
   * Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: ClaimListParams = {}, options?: RequestOptions): PagePromise<Claim> {
    return this._client.getList<Claim>('/v1/claims', {
      patient_id: params.patientId,
      status: params.status,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Retrieve a claim.
   *
   * Returns one claim by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Claim> {
    return this._client.request<Claim>({ method: 'GET', path: path`/v1/claims/${id}` }, options);
  }
}

/** One caregiver's hours and pay for one pay period. Read-only. */
export class PayrollEntries extends APIResource {
  /**
   * List payroll entries.
   *
   * Returns a page of payroll entries. Filters combine with AND. Use `next_cursor` to fetch the
   * next page. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: PayrollEntryListParams = {}, options?: RequestOptions): PagePromise<PayrollEntry> {
    return this._client.getList<PayrollEntry>('/v1/payroll-entries', {
      caregiver_id: params.caregiverId,
      status: params.status,
      pay_period_start: params.payPeriodStart,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Retrieve a payroll entry.
   *
   * Returns one payroll entry by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<PayrollEntry> {
    return this._client.request<PayrollEntry>({ method: 'GET', path: path`/v1/payroll-entries/${id}` }, options);
  }
}

/**
 * In-app message threads between people at your agency: one-to-one chats and named group chats.
 * Read-only; start conversations in AveeCare.
 */
export class Conversations extends APIResource {
  /**
   * List conversations.
   *
   * Returns a page of conversations. Filters combine with AND. Use `next_cursor` to fetch the next
   * page.
   *
   * Requires the `read` scope.
   */
  list(params: ConversationListParams = {}, options?: RequestOptions): PagePromise<Conversation> {
    return this._client.getList<Conversation>('/v1/conversations', {
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Retrieve a conversation.
   *
   * Returns one conversation by ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Conversation> {
    return this._client.request<Conversation>({ method: 'GET', path: path`/v1/conversations/${id}` }, options);
  }
}

/** Messages in a conversation. Messages you send through the API are sent as the API key's user. */
export class Messages extends APIResource {
  /**
   * List messages.
   *
   * Returns a page of messages. Filters combine with AND. Use `next_cursor` to fetch the next
   * page.
   *
   * Requires the `read` scope.
   */
  list(params: MessageListParams, options?: RequestOptions): PagePromise<Message> {
    return this._client.getList<Message>('/v1/messages', {
      conversation_id: params.conversationId,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create a message.
   *
   * Creates a message and returns it. Send an `Idempotency-Key` header to make the request safe to
   * retry. With a caregiver's or patient's key, a saved record that key cannot read back is
   * answered with only `object` and `id`. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: MessageCreate, options?: RequestOptions): Promise<Message> {
    return this._client.request<Message>({ method: 'POST', path: '/v1/messages', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve a message.
   *
   * Returns one message by ID.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Message> {
    return this._client.request<Message>({ method: 'GET', path: path`/v1/messages/${id}` }, options);
  }
}

/**
 * Alerts on your agency's alert board, such as a credential about to expire or a missed clock-in,
 * and announcements staff post for caregivers.
 */
export class Alerts extends APIResource {
  /**
   * List alerts.
   *
   * Returns a page of alerts. Filters combine with AND. Use `next_cursor` to fetch the next page.
   * Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  list(params: AlertListParams = {}, options?: RequestOptions): PagePromise<Alert> {
    return this._client.getList<Alert>('/v1/alerts', {
      type: params.type,
      audience: params.audience,
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create an alert.
   *
   * Creates an alert and returns it. Send an `Idempotency-Key` header to make the request safe to
   * retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: AlertCreate, options?: RequestOptions): Promise<Alert> {
    return this._client.request<Alert>({ method: 'POST', path: '/v1/alerts', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve an alert.
   *
   * Returns one alert by ID. Available to keys belonging to office staff and caregivers.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Alert> {
    return this._client.request<Alert>({ method: 'GET', path: path`/v1/alerts/${id}` }, options);
  }

  /**
   * Update an alert.
   *
   * Changes the fields you send and returns the updated alert. Send `null` to clear an optional
   * field. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: AlertUpdate, options?: RequestOptions): Promise<Alert> {
    return this._client.request<Alert>({ method: 'PATCH', path: path`/v1/alerts/${id}`, body: params }, options);
  }

  /**
   * Delete an alert.
   *
   * Deletes an alert. Available to keys belonging to office staff. Requires a key with `write`
   * scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<AlertDeleted> {
    return this._client.request<AlertDeleted>({ method: 'DELETE', path: path`/v1/alerts/${id}` }, options);
  }
}

/**
 * Your agency's offices (branches). Patients, caregivers and applicants can each belong to one
 * office. There is always exactly one default office.
 */
export class Offices extends APIResource {
  /**
   * List offices.
   *
   * Returns a page of offices. Filters combine with AND. Use `next_cursor` to fetch the next page.
   * Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  list(params: OfficeListParams = {}, options?: RequestOptions): PagePromise<Office> {
    return this._client.getList<Office>('/v1/offices', {
      created_after: params.createdAfter,
      created_before: params.createdBefore,
      updated_after: params.updatedAfter,
      updated_before: params.updatedBefore,
      limit: params.limit,
      cursor: params.cursor,
    }, options);
  }

  /**
   * Create an office.
   *
   * Creates an office and returns it. Send an `Idempotency-Key` header to make the request safe to
   * retry. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  create(params: OfficeCreate, options?: RequestOptions): Promise<Office> {
    return this._client.request<Office>({ method: 'POST', path: '/v1/offices', body: params, idempotent: true }, options);
  }

  /**
   * Retrieve an office.
   *
   * Returns one office by ID. Available to keys belonging to office staff.
   *
   * Requires the `read` scope.
   */
  retrieve(id: string, options?: RequestOptions): Promise<Office> {
    return this._client.request<Office>({ method: 'GET', path: path`/v1/offices/${id}` }, options);
  }

  /**
   * Update an office.
   *
   * Changes the fields you send and returns the updated office. Send `null` to clear an optional
   * field. Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  update(id: string, params: OfficeUpdate, options?: RequestOptions): Promise<Office> {
    return this._client.request<Office>({ method: 'PATCH', path: path`/v1/offices/${id}`, body: params }, options);
  }

  /**
   * Delete an office.
   *
   * Deletes an office. The default office, and an agency's only office, cannot be deleted.
   * Available to keys belonging to office staff. Requires a key with `write` scope.
   *
   * Requires the `write` scope.
   */
  delete(id: string, options?: RequestOptions): Promise<OfficeDeleted> {
    return this._client.request<OfficeDeleted>({ method: 'DELETE', path: path`/v1/offices/${id}` }, options);
  }
}

/** The API key making the request: its scopes, its user's role and its agency. */
export class MeResource extends APIResource {
  /**
   * Retrieve the current API key.
   *
   * Returns the API key making the request, its scopes, the role of the user it belongs to, and
   * its agency. Useful to check a key works.
   *
   * Requires the `read` scope.
   */
  retrieve(options?: RequestOptions): Promise<Me> {
    return this._client.request<Me>({ method: 'GET', path: '/v1/me' }, options);
  }
}
