// Code generated from the AveeCare OpenAPI specification. DO NOT EDIT.

/** Current care status. */
export type PatientStatus = "active" | "inactive" | "discharged";

/** Visit status. */
export type VisitStatus = "scheduled" | "in_progress" | "completed" | "cancelled" | "missed";

/** Invoice status. */
export type InvoiceStatus = "draft" | "open" | "paid" | "void";

export type MeScope = "read" | "write";

/** A client receiving care from the agency. */
export interface Patient {
  /**
   * String representing the object type. Always `patient`.
   *
   * @example "patient"
   */
  object: "patient";
  /**
   * Unique identifier for the patient.
   *
   * @example "pat_8f2k1m9x"
   */
  id: string;
  /**
   * Given name.
   *
   * @example "Margaret"
   */
  firstName: string;
  /**
   * Family name.
   *
   * @example "Alvarez"
   */
  lastName: string;
  /**
   * Date of birth.
   *
   * @example "1941-03-14"
   */
  dateOfBirth?: string | null;
  /**
   * Contact email address.
   *
   * @example "margaret@example.com"
   */
  email?: string | null;
  /**
   * Primary phone number in E.164 format.
   *
   * @example "+16025550142"
   */
  phone?: string | null;
  /**
   * Current care status.
   *
   * @example "active"
   */
  status: PatientStatus;
  /** Service address where care is delivered. */
  address?: PatientAddress | null;
  /**
   * Time the patient was created, ISO 8601.
   *
   * @example "2026-09-12T16:04:11Z"
   */
  createdAt: string;
  /**
   * Time the patient was last changed, ISO 8601.
   *
   * @example "2026-09-30T09:12:45Z"
   */
  updatedAt: string;
}

/** Service address where care is delivered. */
export interface PatientAddress {
  /**
   * Street address.
   *
   * @example "1420 W Camelback Rd"
   */
  line1: string;
  /**
   * Apartment, suite or unit.
   *
   * @example "Unit 4"
   */
  line2?: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city: string;
  /**
   * Two-letter state code.
   *
   * @example "AZ"
   */
  state: string;
  /**
   * ZIP code.
   *
   * @example "85015"
   */
  postalCode: string;
}

/** Fields for a new patient. */
export interface PatientCreate {
  /**
   * Given name.
   *
   * @example "Margaret"
   */
  firstName: string;
  /**
   * Family name.
   *
   * @example "Alvarez"
   */
  lastName: string;
  /**
   * Date of birth.
   *
   * @example "1941-03-14"
   */
  dateOfBirth?: string | null;
  /**
   * Contact email address.
   *
   * @example "margaret@example.com"
   */
  email?: string | null;
  /**
   * Primary phone number in E.164 format.
   *
   * @example "+16025550142"
   */
  phone?: string | null;
  /**
   * Current care status.
   *
   * @example "active"
   */
  status?: PatientStatus;
  /** Service address where care is delivered. */
  address?: PatientAddress | null;
}

/** Fields to change on a patient. */
export interface PatientUpdate {
  /**
   * Given name.
   *
   * @example "Margaret"
   */
  firstName?: string;
  /**
   * Family name.
   *
   * @example "Alvarez"
   */
  lastName?: string;
  /**
   * Date of birth.
   *
   * @example "1941-03-14"
   */
  dateOfBirth?: string | null;
  /**
   * Contact email address.
   *
   * @example "margaret@example.com"
   */
  email?: string | null;
  /**
   * Primary phone number in E.164 format.
   *
   * @example "+16025550142"
   */
  phone?: string | null;
  /**
   * Current care status.
   *
   * @example "active"
   */
  status?: PatientStatus;
  /** Service address where care is delivered. */
  address?: PatientAddress | null;
}

/** Confirmation that a patient was deleted. */
export interface PatientDeleted {
  /**
   * Always `patient`.
   *
   * @example "patient"
   */
  object: "patient";
  /**
   * ID of the deleted object.
   *
   * @example "pat_8f2k1m9x"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/** A scheduled or completed caregiver shift. */
export interface Visit {
  /**
   * String representing the object type. Always `visit`.
   *
   * @example "visit"
   */
  object: "visit";
  /**
   * Unique identifier for the visit.
   *
   * @example "vis_5t9r2k4m"
   */
  id: string;
  /**
   * ID of the patient receiving care.
   *
   * @example "pat_8f2k1m9x"
   */
  patientId: string;
  /**
   * ID of the assigned caregiver, or null when unassigned.
   *
   * @example "cg_3n7q2w8e"
   */
  caregiverId?: string | null;
  /**
   * Scheduled start, ISO 8601.
   *
   * @example "2026-10-06T15:00:00Z"
   */
  startTime: string;
  /**
   * Scheduled end, ISO 8601.
   *
   * @example "2026-10-06T19:00:00Z"
   */
  endTime: string;
  /**
   * Visit status.
   *
   * @example "scheduled"
   */
  status: VisitStatus;
  /**
   * Scheduling notes visible to the caregiver.
   *
   * @example "Use the side door."
   */
  notes?: string | null;
  /**
   * Time the visit was created, ISO 8601.
   *
   * @example "2026-09-12T16:04:11Z"
   */
  createdAt: string;
  /**
   * Time the visit was last changed, ISO 8601.
   *
   * @example "2026-09-30T09:12:45Z"
   */
  updatedAt: string;
}

/** Fields for a new visit. */
export interface VisitCreate {
  /**
   * ID of the patient receiving care.
   *
   * @example "pat_8f2k1m9x"
   */
  patientId: string;
  /**
   * ID of the assigned caregiver, or null when unassigned.
   *
   * @example "cg_3n7q2w8e"
   */
  caregiverId?: string | null;
  /**
   * Scheduled start, ISO 8601.
   *
   * @example "2026-10-06T15:00:00Z"
   */
  startTime: string;
  /**
   * Scheduled end, ISO 8601.
   *
   * @example "2026-10-06T19:00:00Z"
   */
  endTime: string;
  /**
   * Visit status.
   *
   * @example "scheduled"
   */
  status?: VisitStatus;
  /**
   * Scheduling notes visible to the caregiver.
   *
   * @example "Use the side door."
   */
  notes?: string | null;
}

/** Fields to change on a visit. */
export interface VisitUpdate {
  /**
   * ID of the patient receiving care.
   *
   * @example "pat_8f2k1m9x"
   */
  patientId?: string;
  /**
   * ID of the assigned caregiver, or null when unassigned.
   *
   * @example "cg_3n7q2w8e"
   */
  caregiverId?: string | null;
  /**
   * Scheduled start, ISO 8601.
   *
   * @example "2026-10-06T15:00:00Z"
   */
  startTime?: string;
  /**
   * Scheduled end, ISO 8601.
   *
   * @example "2026-10-06T19:00:00Z"
   */
  endTime?: string;
  /**
   * Visit status.
   *
   * @example "scheduled"
   */
  status?: VisitStatus;
  /**
   * Scheduling notes visible to the caregiver.
   *
   * @example "Use the side door."
   */
  notes?: string | null;
}

/** Confirmation that a visit was deleted. */
export interface VisitDeleted {
  /**
   * Always `visit`.
   *
   * @example "visit"
   */
  object: "visit";
  /**
   * ID of the deleted object.
   *
   * @example "vis_5t9r2k4m"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/** An invoice for care delivered. */
export interface Invoice {
  /**
   * String representing the object type. Always `invoice`.
   *
   * @example "invoice"
   */
  object: "invoice";
  /**
   * Unique identifier for the invoice.
   *
   * @example "inv_2h8d4k1p"
   */
  id: string;
  /**
   * ID of the billed patient.
   *
   * @example "pat_8f2k1m9x"
   */
  patientId: string;
  /**
   * Human-readable invoice number.
   *
   * @example "INV-1042"
   */
  number: string;
  /**
   * Invoice status.
   *
   * @example "open"
   */
  status: InvoiceStatus;
  /**
   * Total in cents.
   *
   * @example 48000
   */
  totalCents: number;
  /**
   * Amount still owed in cents.
   *
   * @example 12000
   */
  balanceCents: number;
  /**
   * Date issued.
   *
   * @example "2026-09-30"
   */
  issuedOn?: string | null;
  /**
   * Date payment is due.
   *
   * @example "2026-10-30"
   */
  dueOn?: string | null;
  /** Line items on the invoice. */
  lineItems: InvoiceLineItem[];
  /**
   * Time the invoice was created, ISO 8601.
   *
   * @example "2026-09-12T16:04:11Z"
   */
  createdAt: string;
  /**
   * Time the invoice was last changed, ISO 8601.
   *
   * @example "2026-09-30T09:12:45Z"
   */
  updatedAt: string;
}

/** One billed line on an invoice. */
export interface InvoiceLineItem {
  /**
   * What was billed.
   *
   * @example "Personal care, hourly"
   */
  description: string;
  /**
   * Units billed, such as hours.
   *
   * @example 4
   */
  quantity: number;
  /**
   * Price per unit in cents.
   *
   * @example 3000
   */
  unitPriceCents: number;
  /**
   * Line total in cents.
   *
   * @example 12000
   */
  amountCents: number;
}

/** The API key making the request. */
export interface Me {
  /**
   * String representing the object type. Always `me`.
   *
   * @example "me"
   */
  object: "me";
  /**
   * ID of the API key.
   *
   * @example "key_7c1v9b3n"
   */
  id: string;
  /**
   * Name given to the API key.
   *
   * @example "Payroll export"
   */
  name: string;
  /**
   * Scopes granted to the key.
   *
   * @example ["read","write"]
   */
  scopes: MeScope[];
  /** The agency the key belongs to. */
  organization: MeOrganization;
}

/** The agency the key belongs to. */
export interface MeOrganization {
  /**
   * ID of the agency.
   *
   * @example "org_4m8x2c6v"
   */
  id: string;
  /**
   * Agency name.
   *
   * @example "Sunrise Home Care"
   */
  name: string;
}

/** Query parameters for `patients.list`. */
export interface PatientListParams {
  /** Only return patients with this status. */
  status?: PatientStatus;
  /** Only return patients changed after this time, ISO 8601. */
  updatedAfter?: string;
  /**
   * Number of objects to return, between 1 and 100.
   *
   * @default 25
   */
  limit?: number;
  /** Opaque cursor from a previous response `next_cursor`. */
  cursor?: string;
}

/** Query parameters for `visits.list`. */
export interface VisitListParams {
  /** Start of the window (inclusive), ISO 8601. The window may span at most 93 days. */
  startFrom: string;
  /** End of the window (exclusive), ISO 8601. */
  startTo: string;
  /** Only return visits for this patient. */
  patientId?: string;
  /** Only return visits for this caregiver. */
  caregiverId?: string;
  /** Only return visits with this status. */
  status?: VisitStatus;
  /**
   * Number of objects to return, between 1 and 100.
   *
   * @default 25
   */
  limit?: number;
  /** Opaque cursor from a previous response `next_cursor`. */
  cursor?: string;
}

/** Query parameters for `invoices.list`. */
export interface InvoiceListParams {
  /** Only return invoices with this status. */
  status?: InvoiceStatus;
  /** Only return invoices for this patient. */
  patientId?: string;
  /** Only return invoices changed after this time, ISO 8601. */
  updatedAfter?: string;
  /**
   * Number of objects to return, between 1 and 100.
   *
   * @default 25
   */
  limit?: number;
  /** Opaque cursor from a previous response `next_cursor`. */
  cursor?: string;
}
