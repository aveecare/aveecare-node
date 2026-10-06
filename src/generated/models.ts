// Code generated from the AveeCare OpenAPI specification. DO NOT EDIT.

/**
 * Whether this person is a prospective client or an admitted client. `null` means client.
 * Prospects appear in the prospective-patient pool in AveeCare, not on the patient roster.
 */
export type PatientLifecycleStage = "Prospect" | "Client";

/** The main type of service the patient receives. */
export type PatientServiceType = "SkilledNursing" | "PhysicalTherapy" | "Hospice" | "StandardCare";

/** How statements are delivered. */
export type PatientStatementDelivery = "Email" | "Mail" | "EmailAndMail" | "NoStatement";

/** How the patient usually pays. */
export type PatientPaymentMethodPreference = "ACH" | "Card" | "Check" | "Cash" | "PayerOnly" | "Other";

/**
 * The client's status as shown in AveeCare. `Inactive` and `Discharged` mean the person is no
 * longer receiving care. A prospective client (`lifecycleStage: Prospect`) reads `Prospect` even
 * if you send `Active`. Creating a patient with `Prospect` makes them a prospective client.
 * Defaults to `Active`.
 */
export type PatientCreateStatus = "Active" | "Inactive" | "Prospect" | "Discharged";

/** Which updates the contact is notified about. */
export type ContactNotificationPolicy = "All" | "Emergencies";

/** `Scheduled` for regular doses, `PRN` for as-needed. */
export type MedicationScheduleType = "Scheduled" | "PRN";

/** Whether the medication is currently given. */
export type MedicationStatus = "Active" | "OnHold" | "Discontinued";

/** What happened to the dose. */
export type MedicationAdministrationStatus = "Given" | "Refused" | "Held" | "Missed" | "SelfAdministered";

/** Which OASIS time point this assessment covers. */
export type OasisAssessmentTimepoint = "SOC" | "ROC" | "Recertification" | "Transfer" | "Discharge" | "DeathAtHome";

/** Where the assessment is in its lifecycle. */
export type OasisAssessmentStatus = "Draft" | "Completed" | "Exported" | "Accepted" | "Rejected" | "Inactivated";

/** Employment status. */
export type CaregiverStatus = "Active" | "OnLeave" | "Inactive";

/** Where the visit is in its day. New visits are `Scheduled`. */
export type VisitStatus = "Scheduled" | "InProgress" | "Cancelled" | "Completed" | "Late" | "OverTime" | "Incomplete";

/** Electronic visit verification status. */
export type VisitEvvStatus = "Pending" | "Validated" | "Flagged" | "Overridden" | "Exported" | "Submitted";

/** Whether the visit has been billed. */
export type VisitBillingStatus = "NotBilled" | "Pending" | "Invoiced" | "Paid";

/** The caregiver's response to the assignment. */
export type VisitCaregiverRsvp = "confirmed" | "declined";

/** Whether office staff (`User`) or a caregiver wrote the note. Set from the API key's user. */
export type VisitNoteAuthorType = "User" | "Caregiver";

/**
 * Where the request stands. A caregiver's key creates `Pending` requests and can only change its
 * own pending request to `Cancelled`; approving and denying is for office staff.
 */
export type VisitRequestStatus = "Pending" | "Approved" | "Denied" | "Cancelled";

/** Whether the offer is still open. */
export type OpenShiftStatus = "Active" | "Filled" | "Cancelled";

/**
 * Where the swap stands. With a caregiver's key: new swaps are `Pending`; the asked caregiver
 * changes a `Pending` swap to `Accepted` or `Declined`; the requesting caregiver can change it to
 * `Cancelled`. `AdminApproved` and `AdminDenied` are for office staff.
 */
export type ShiftSwapStatus = "Pending" | "Accepted" | "Declined" | "Cancelled" | "AdminApproved" | "AdminDenied";

/** Where the plan is in its lifecycle. */
export type CarePlanStatus = "Active" | "Draft" | "Archived" | "UnderReview" | "Completed" | "Discontinued";

/** Whether units count time, visits or days. */
export type AuthorizationUnitBasis = "Time" | "Visits" | "Days";

/** Whether the authorization is in effect. */
export type AuthorizationStatus = "Active" | "Expired" | "PendingRenewal";

/** Kind of incident. */
export type IncidentCategory = "Fall" | "Medication" | "Behavioral" | "Injury" | "Equipment" | "Attendance" | "Conduct" | "Other";

/** How serious it was. */
export type IncidentSeverity = "Low" | "Medium" | "High" | "Critical";

/** Where follow-up stands. New incidents start `Open`. */
export type IncidentStatus = "Open" | "Monitoring" | "AwaitingFollowUp" | "Resolved" | "Closed";

/** Where the referral stands. */
export type ReferralStatus = "New" | "Contacted" | "AssessmentScheduled" | "AssessmentCompleted" | "ServiceAgreementSent" | "Admitted" | "Declined" | "Lost";

/** Payment status. */
export type InvoiceStatus = "Draft" | "Pending" | "Processing" | "Paid" | "PartiallyPaid" | "Overdue" | "Cancelled" | "Refunded" | "Failed";

/** Claim format: professional (837P) or institutional (837I). */
export type ClaimClaimType = "Professional837P" | "Institutional837I";

/** Where the claim is in adjudication. */
export type ClaimStatus = "Draft" | "Validated" | "ValidationFailed" | "Submitted" | "Acknowledged" | "Accepted" | "Rejected" | "InAdjudication" | "Paid" | "PartiallyPaid" | "Denied" | "Appealed" | "Voided";

/** Where the entry is in your payroll process. */
export type PayrollEntryStatus = "Pending" | "Approved" | "Processed" | "Paid" | "Cancelled" | "Failed" | "HoursSubmitted" | "CheckCreated" | "PaidConfirmed" | "PaidExternally" | "Voided";

/** How the caregiver is paid. */
export type PayrollEntryPaymentMethod = "DirectDeposit" | "Check" | "Manual" | "ACH";

/** How prominently the alert is shown. */
export type AlertType = "Critical" | "Important" | "Notice";

/**
 * Who sees the alert. `Caregiver`, `Patient`, `Visit` and `PatientCareTeam` need
 * `audienceTargetId`.
 */
export type AlertAudience = "CompanyWide" | "StaffOnly" | "CaregiversAll" | "PatientsAll" | "Caregiver" | "Patient" | "Visit" | "PatientCareTeam";

export type MeScope = "read" | "write";

/**
 * Role of the person the key belongs to: `RootUser` (agency administrator), `User` (office staff),
 * `Caregiver` or `Patient`. It decides which resources the key can reach.
 */
export type MeRole = "RootUser" | "User" | "Caregiver" | "Patient";

/**
 * Patients are the clients your agency provides care to, including prospective clients you have
 * not yet admitted. Every field is always present; a field with no value is `null`.
 */
export interface Patient {
  /**
   * String representing the object's type. Always `patient`.
   *
   * @example "patient"
   */
  object: "patient";
  /**
   * Unique identifier of the patient.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Given name.
   *
   * @example "Margaret"
   */
  firstName: string | null;
  /**
   * Middle name.
   *
   * @example "Ann"
   */
  middleName: string | null;
  /**
   * Family name.
   *
   * @example "Alvarez"
   */
  lastName: string | null;
  /**
   * The name the patient prefers to be called.
   *
   * @example "Peggy"
   */
  goesByName: string | null;
  /**
   * Date of birth.
   *
   * @example "1941-03-14"
   */
  dateOfBirth: string | null;
  /**
   * Gender as recorded by the agency.
   *
   * @example "Female"
   */
  gender: string | null;
  /**
   * Language the patient is most comfortable speaking.
   *
   * @example "Spanish"
   */
  primaryLanguage: string | null;
  /**
   * Contact email address.
   *
   * @example "margaret.alvarez@example.com"
   */
  email: string | null;
  /**
   * Whether the patient is an active client. Only active clients are scheduled and billed. A
   * prospective client is always inactive. If you leave it out on create, it is `false` for a
   * prospect or an `Inactive` or `Discharged` status and `true` otherwise.
   *
   * @example true
   */
  active: boolean | null;
  /**
   * The client's status as shown in AveeCare. `Inactive` and `Discharged` mean the person is no
   * longer receiving care. A prospective client (`lifecycleStage: Prospect`) reads `Prospect` even
   * if you send `Active`. Creating a patient with `Prospect` makes them a prospective client.
   * Defaults to `Active`. Usually one of `Active`, `Inactive`, `Prospect`, `Discharged`; records
   * imported from another system can hold other values.
   *
   * @example "Active"
   */
  status: string | null;
  /**
   * Whether this person is a prospective client or an admitted client. `null` means client.
   * Prospects appear in the prospective-patient pool in AveeCare, not on the patient roster.
   *
   * @example "Client"
   */
  lifecycleStage: PatientLifecycleStage | null;
  /**
   * The main type of service the patient receives.
   *
   * @example "StandardCare"
   */
  serviceType: PatientServiceType | null;
  /**
   * Street address where care is delivered.
   *
   * @example "1458 Mesquite Lane"
   */
  address: string | null;
  /**
   * City of the service address.
   *
   * @example "Phoenix"
   */
  city: string | null;
  /**
   * State of the service address, as a two-letter code.
   *
   * @example "AZ"
   */
  state: string | null;
  /**
   * ZIP code of the service address.
   *
   * @example "85016"
   */
  zipCode: string | null;
  /**
   * The office (branch) that serves this patient.
   *
   * @example "6b0e4d1a-2c7f-4a93-8e15-f3d9a7c2b604"
   */
  officeId: string | null;
  /**
   * The referral source that sent this patient to you.
   *
   * @example "9c3a1e7d-4b2f-4d86-a0c5-1e8f6b3d2a97"
   */
  referralSourceId: string | null;
  /**
   * Primary diagnosis, in plain words.
   *
   * @example "Type 2 diabetes with neuropathy"
   */
  primaryDiagnosisDescription: string | null;
  /**
   * Whether the patient is a fall risk.
   *
   * @example true
   */
  fallRisk: boolean | null;
  /**
   * Caregiver gender the patient prefers, if any.
   *
   * @example "Female"
   */
  preferredCaregiverGender: string | null;
  /**
   * Notes schedulers see when booking visits for this patient.
   *
   * @example "Prefers morning visits before 11am."
   */
  schedulingNotes: string | null;
  /**
   * Person legally responsible for the patient, if not the patient.
   *
   * @example "Daniel Alvarez"
   */
  responsiblePartyName: string | null;
  /**
   * Medicaid member ID.
   *
   * @example "A12345678"
   */
  medicaidId: string | null;
  /**
   * Medicare beneficiary identifier.
   *
   * @example "1EG4-TE5-MK73"
   */
  medicareId: string | null;
  /**
   * Primary insurance company name.
   *
   * @example "Mercy Care"
   */
  insuranceProvider: string | null;
  /**
   * Member ID with the primary insurance.
   *
   * @example "MC00981234"
   */
  insuranceId: string | null;
  /**
   * Group number with the primary insurance.
   *
   * @example "GRP-4410"
   */
  insuranceGroupNumber: string | null;
  /**
   * Who receives the bills.
   *
   * @example "Daniel Alvarez"
   */
  billingContactName: string | null;
  /**
   * Email address bills are sent to.
   *
   * @example "daniel.alvarez@example.com"
   */
  billingContactEmail: string | null;
  /**
   * Phone number of the billing contact.
   *
   * @example "+16025550142"
   */
  billingContactPhone: string | null;
  /**
   * How statements are delivered.
   *
   * @example "Email"
   */
  statementDelivery: PatientStatementDelivery | null;
  /**
   * How the patient usually pays.
   *
   * @example "Card"
   */
  paymentMethodPreference: PatientPaymentMethodPreference | null;
  /**
   * Balance the patient currently owes. In cents.
   *
   * @example 12500
   */
  outstandingBalanceCents: number | null;
  /**
   * When the patient was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the patient was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new patient. Any other field is refused with `unknown_field`. */
export interface PatientCreate {
  /**
   * Given name.
   *
   * @example "Margaret"
   */
  firstName: string;
  /**
   * Middle name.
   *
   * @example "Ann"
   */
  middleName?: string | null;
  /**
   * Family name.
   *
   * @example "Alvarez"
   */
  lastName: string;
  /**
   * The name the patient prefers to be called.
   *
   * @example "Peggy"
   */
  goesByName?: string | null;
  /**
   * Date of birth.
   *
   * @example "1941-03-14"
   */
  dateOfBirth?: string | null;
  /**
   * Gender as recorded by the agency.
   *
   * @example "Female"
   */
  gender?: string | null;
  /**
   * Language the patient is most comfortable speaking.
   *
   * @example "Spanish"
   */
  primaryLanguage?: string | null;
  /**
   * Contact email address.
   *
   * @example "margaret.alvarez@example.com"
   */
  email?: string | null;
  /**
   * Whether the patient is an active client. Only active clients are scheduled and billed. A
   * prospective client is always inactive. If you leave it out on create, it is `false` for a
   * prospect or an `Inactive` or `Discharged` status and `true` otherwise.
   *
   * @example true
   */
  active?: boolean | null;
  /**
   * The client's status as shown in AveeCare. `Inactive` and `Discharged` mean the person is no
   * longer receiving care. A prospective client (`lifecycleStage: Prospect`) reads `Prospect` even
   * if you send `Active`. Creating a patient with `Prospect` makes them a prospective client.
   * Defaults to `Active`.
   *
   * @example "Active"
   */
  status?: PatientCreateStatus | null;
  /**
   * Whether this person is a prospective client or an admitted client. `null` means client.
   * Prospects appear in the prospective-patient pool in AveeCare, not on the patient roster.
   *
   * @example "Client"
   */
  lifecycleStage?: PatientLifecycleStage | null;
  /**
   * The main type of service the patient receives.
   *
   * @example "StandardCare"
   */
  serviceType?: PatientServiceType | null;
  /**
   * Street address where care is delivered.
   *
   * @example "1458 Mesquite Lane"
   */
  address?: string | null;
  /**
   * City of the service address.
   *
   * @example "Phoenix"
   */
  city?: string | null;
  /**
   * State of the service address, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code of the service address.
   *
   * @example "85016"
   */
  zipCode?: string | null;
  /**
   * The office (branch) that serves this patient.
   *
   * @example "6b0e4d1a-2c7f-4a93-8e15-f3d9a7c2b604"
   */
  officeId?: string | null;
  /**
   * The referral source that sent this patient to you.
   *
   * @example "9c3a1e7d-4b2f-4d86-a0c5-1e8f6b3d2a97"
   */
  referralSourceId?: string | null;
  /**
   * Primary diagnosis, in plain words.
   *
   * @example "Type 2 diabetes with neuropathy"
   */
  primaryDiagnosisDescription?: string | null;
  /**
   * Whether the patient is a fall risk.
   *
   * @example true
   */
  fallRisk?: boolean | null;
  /**
   * Caregiver gender the patient prefers, if any.
   *
   * @example "Female"
   */
  preferredCaregiverGender?: string | null;
  /**
   * Notes schedulers see when booking visits for this patient.
   *
   * @example "Prefers morning visits before 11am."
   */
  schedulingNotes?: string | null;
  /**
   * Person legally responsible for the patient, if not the patient.
   *
   * @example "Daniel Alvarez"
   */
  responsiblePartyName?: string | null;
  /**
   * Medicaid member ID.
   *
   * @example "A12345678"
   */
  medicaidId?: string | null;
  /**
   * Medicare beneficiary identifier.
   *
   * @example "1EG4-TE5-MK73"
   */
  medicareId?: string | null;
  /**
   * Primary insurance company name.
   *
   * @example "Mercy Care"
   */
  insuranceProvider?: string | null;
  /**
   * Member ID with the primary insurance.
   *
   * @example "MC00981234"
   */
  insuranceId?: string | null;
  /**
   * Group number with the primary insurance.
   *
   * @example "GRP-4410"
   */
  insuranceGroupNumber?: string | null;
  /**
   * Who receives the bills.
   *
   * @example "Daniel Alvarez"
   */
  billingContactName?: string | null;
  /**
   * Email address bills are sent to.
   *
   * @example "daniel.alvarez@example.com"
   */
  billingContactEmail?: string | null;
  /**
   * Phone number of the billing contact.
   *
   * @example "+16025550142"
   */
  billingContactPhone?: string | null;
  /**
   * How statements are delivered.
   *
   * @example "Email"
   */
  statementDelivery?: PatientStatementDelivery | null;
  /**
   * How the patient usually pays.
   *
   * @example "Card"
   */
  paymentMethodPreference?: PatientPaymentMethodPreference | null;
}

/**
 * Fields to change on a patient. Send only the fields to change; any other field is refused with
 * `unknown_field`.
 */
export interface PatientUpdate {
  /**
   * Given name.
   *
   * @example "Margaret"
   */
  firstName?: string;
  /**
   * Middle name.
   *
   * @example "Ann"
   */
  middleName?: string | null;
  /**
   * Family name.
   *
   * @example "Alvarez"
   */
  lastName?: string;
  /**
   * The name the patient prefers to be called.
   *
   * @example "Peggy"
   */
  goesByName?: string | null;
  /**
   * Date of birth.
   *
   * @example "1941-03-14"
   */
  dateOfBirth?: string | null;
  /**
   * Gender as recorded by the agency.
   *
   * @example "Female"
   */
  gender?: string | null;
  /**
   * Language the patient is most comfortable speaking.
   *
   * @example "Spanish"
   */
  primaryLanguage?: string | null;
  /**
   * Contact email address.
   *
   * @example "margaret.alvarez@example.com"
   */
  email?: string | null;
  /**
   * Whether the patient is an active client. Only active clients are scheduled and billed. A
   * prospective client is always inactive. If you leave it out on create, it is `false` for a
   * prospect or an `Inactive` or `Discharged` status and `true` otherwise.
   *
   * @example true
   */
  active?: boolean | null;
  /**
   * The client's status as shown in AveeCare. `Inactive` and `Discharged` mean the person is no
   * longer receiving care. A prospective client (`lifecycleStage: Prospect`) reads `Prospect` even
   * if you send `Active`. Creating a patient with `Prospect` makes them a prospective client.
   * Defaults to `Active`.
   *
   * @example "Active"
   */
  status?: PatientCreateStatus | null;
  /**
   * Whether this person is a prospective client or an admitted client. `null` means client.
   * Prospects appear in the prospective-patient pool in AveeCare, not on the patient roster.
   *
   * @example "Client"
   */
  lifecycleStage?: PatientLifecycleStage | null;
  /**
   * The main type of service the patient receives.
   *
   * @example "StandardCare"
   */
  serviceType?: PatientServiceType | null;
  /**
   * Street address where care is delivered.
   *
   * @example "1458 Mesquite Lane"
   */
  address?: string | null;
  /**
   * City of the service address.
   *
   * @example "Phoenix"
   */
  city?: string | null;
  /**
   * State of the service address, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code of the service address.
   *
   * @example "85016"
   */
  zipCode?: string | null;
  /**
   * The office (branch) that serves this patient.
   *
   * @example "6b0e4d1a-2c7f-4a93-8e15-f3d9a7c2b604"
   */
  officeId?: string | null;
  /**
   * The referral source that sent this patient to you.
   *
   * @example "9c3a1e7d-4b2f-4d86-a0c5-1e8f6b3d2a97"
   */
  referralSourceId?: string | null;
  /**
   * Primary diagnosis, in plain words.
   *
   * @example "Type 2 diabetes with neuropathy"
   */
  primaryDiagnosisDescription?: string | null;
  /**
   * Whether the patient is a fall risk.
   *
   * @example true
   */
  fallRisk?: boolean | null;
  /**
   * Caregiver gender the patient prefers, if any.
   *
   * @example "Female"
   */
  preferredCaregiverGender?: string | null;
  /**
   * Notes schedulers see when booking visits for this patient.
   *
   * @example "Prefers morning visits before 11am."
   */
  schedulingNotes?: string | null;
  /**
   * Person legally responsible for the patient, if not the patient.
   *
   * @example "Daniel Alvarez"
   */
  responsiblePartyName?: string | null;
  /**
   * Medicaid member ID.
   *
   * @example "A12345678"
   */
  medicaidId?: string | null;
  /**
   * Medicare beneficiary identifier.
   *
   * @example "1EG4-TE5-MK73"
   */
  medicareId?: string | null;
  /**
   * Primary insurance company name.
   *
   * @example "Mercy Care"
   */
  insuranceProvider?: string | null;
  /**
   * Member ID with the primary insurance.
   *
   * @example "MC00981234"
   */
  insuranceId?: string | null;
  /**
   * Group number with the primary insurance.
   *
   * @example "GRP-4410"
   */
  insuranceGroupNumber?: string | null;
  /**
   * Who receives the bills.
   *
   * @example "Daniel Alvarez"
   */
  billingContactName?: string | null;
  /**
   * Email address bills are sent to.
   *
   * @example "daniel.alvarez@example.com"
   */
  billingContactEmail?: string | null;
  /**
   * Phone number of the billing contact.
   *
   * @example "+16025550142"
   */
  billingContactPhone?: string | null;
  /**
   * How statements are delivered.
   *
   * @example "Email"
   */
  statementDelivery?: PatientStatementDelivery | null;
  /**
   * How the patient usually pays.
   *
   * @example "Card"
   */
  paymentMethodPreference?: PatientPaymentMethodPreference | null;
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
   * ID of the deleted patient.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Contacts are family members and other people connected to a patient, such as an emergency
 * contact. Every field is always present; a field with no value is `null`.
 */
export interface Contact {
  /**
   * String representing the object's type. Always `contact`.
   *
   * @example "contact"
   */
  object: "contact";
  /**
   * Unique identifier of the contact.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient this contact belongs to.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * Full name.
   *
   * @example "Daniel Alvarez"
   */
  name: string | null;
  /**
   * Relationship to the patient.
   *
   * @example "Son"
   */
  relationship: string | null;
  /**
   * Phone number.
   *
   * @example "+16025550142"
   */
  phoneNumber: string | null;
  /**
   * Email address.
   *
   * @example "daniel.alvarez@example.com"
   */
  email: string | null;
  /**
   * Whether the contact prefers email over phone.
   *
   * @example false
   */
  preferEmail: boolean | null;
  /**
   * Whether this person is an emergency contact.
   *
   * @example true
   */
  emergencyContact: boolean | null;
  /**
   * Which updates the contact is notified about.
   *
   * @example "Emergencies"
   */
  notificationPolicy: ContactNotificationPolicy | null;
  /**
   * When the contact was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the contact was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new contact. Any other field is refused with `unknown_field`. */
export interface ContactCreate {
  /**
   * The patient this contact belongs to.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string;
  /**
   * Full name.
   *
   * @example "Daniel Alvarez"
   */
  name: string;
  /**
   * Relationship to the patient.
   *
   * @example "Son"
   */
  relationship?: string | null;
  /**
   * Phone number.
   *
   * @example "+16025550142"
   */
  phoneNumber?: string | null;
  /**
   * Email address.
   *
   * @example "daniel.alvarez@example.com"
   */
  email?: string | null;
  /**
   * Whether the contact prefers email over phone.
   *
   * @example false
   */
  preferEmail?: boolean | null;
  /**
   * Whether this person is an emergency contact.
   *
   * @example true
   */
  emergencyContact?: boolean | null;
  /**
   * Which updates the contact is notified about.
   *
   * @example "Emergencies"
   */
  notificationPolicy?: ContactNotificationPolicy | null;
}

/**
 * Fields to change on a contact. Send only the fields to change; any other field is refused with
 * `unknown_field`. `patientId` is set when the contact is created and cannot be changed
 * afterwards.
 */
export interface ContactUpdate {
  /**
   * Full name.
   *
   * @example "Daniel Alvarez"
   */
  name?: string;
  /**
   * Relationship to the patient.
   *
   * @example "Son"
   */
  relationship?: string | null;
  /**
   * Phone number.
   *
   * @example "+16025550142"
   */
  phoneNumber?: string | null;
  /**
   * Email address.
   *
   * @example "daniel.alvarez@example.com"
   */
  email?: string | null;
  /**
   * Whether the contact prefers email over phone.
   *
   * @example false
   */
  preferEmail?: boolean | null;
  /**
   * Whether this person is an emergency contact.
   *
   * @example true
   */
  emergencyContact?: boolean | null;
  /**
   * Which updates the contact is notified about.
   *
   * @example "Emergencies"
   */
  notificationPolicy?: ContactNotificationPolicy | null;
}

/** Confirmation that a contact was deleted. */
export interface ContactDeleted {
  /**
   * Always `contact`.
   *
   * @example "contact"
   */
  object: "contact";
  /**
   * ID of the deleted contact.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Allergies recorded on a patient's profile. Every field is always present; a field with no value
 * is `null`.
 */
export interface Allergy {
  /**
   * String representing the object's type. Always `allergy`.
   *
   * @example "allergy"
   */
  object: "allergy";
  /**
   * Unique identifier of the allergy.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient who has this allergy.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * What the patient is allergic to.
   *
   * @example "Penicillin"
   */
  name: string | null;
  /**
   * Reaction and other details.
   *
   * @example "Hives and swelling within an hour."
   */
  description: string | null;
  /**
   * When the allergy was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the allergy was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new allergy. Any other field is refused with `unknown_field`. */
export interface AllergyCreate {
  /**
   * The patient who has this allergy.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string;
  /**
   * What the patient is allergic to.
   *
   * @example "Penicillin"
   */
  name: string;
  /**
   * Reaction and other details.
   *
   * @example "Hives and swelling within an hour."
   */
  description?: string | null;
}

/**
 * Fields to change on an allergy. Send only the fields to change; any other field is refused with
 * `unknown_field`. `patientId` is set when the allergy is created and cannot be changed
 * afterwards.
 */
export interface AllergyUpdate {
  /**
   * What the patient is allergic to.
   *
   * @example "Penicillin"
   */
  name?: string;
  /**
   * Reaction and other details.
   *
   * @example "Hives and swelling within an hour."
   */
  description?: string | null;
}

/** Confirmation that an allergy was deleted. */
export interface AllergyDeleted {
  /**
   * Always `allergy`.
   *
   * @example "allergy"
   */
  object: "allergy";
  /**
   * ID of the deleted allergy.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Medications on a patient's medication list, with the schedule caregivers follow when they give
 * or assist with them. Every field is always present; a field with no value is `null`.
 */
export interface Medication {
  /**
   * String representing the object's type. Always `medication`.
   *
   * @example "medication"
   */
  object: "medication";
  /**
   * Unique identifier of the medication.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient who takes this medication.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * Drug name, without the strength.
   *
   * @example "Metformin"
   */
  name: string | null;
  /**
   * Strength per dose unit.
   *
   * @example "500 mg"
   */
  strength: string | null;
  /**
   * Dose form.
   *
   * @example "Tablet"
   */
  form: string | null;
  /**
   * How it is taken.
   *
   * @example "By mouth"
   */
  route: string | null;
  /**
   * Directions as written on the prescription.
   *
   * @example "Take 1 tablet twice daily with meals."
   */
  directions: string | null;
  /**
   * What the medication is for.
   *
   * @example "Diabetes"
   */
  indication: string | null;
  /**
   * `Scheduled` for regular doses, `PRN` for as-needed.
   *
   * @example "Scheduled"
   */
  scheduleType: MedicationScheduleType | null;
  /**
   * For as-needed medications, when to give it.
   *
   * @example "Pain above 5 out of 10"
   */
  prnReason: string | null;
  /**
   * For as-needed medications, the most doses allowed in a day.
   *
   * @example 4
   */
  prnMaxDailyDoses: number | null;
  /**
   * For as-needed medications, the minimum hours between doses.
   *
   * @example 6
   */
  prnMinIntervalHours: number | null;
  /**
   * Date the patient started the medication.
   *
   * @example "2026-01-15"
   */
  startDate: string | null;
  /**
   * Whether the medication is currently given.
   *
   * @example "Active"
   */
  status: MedicationStatus | null;
  /**
   * Date the medication was stopped.
   *
   * @example null
   */
  discontinuedDate: string | null;
  /**
   * Why the medication was stopped.
   *
   * @example null
   */
  discontinuedReason: string | null;
  /**
   * Prescribing clinician.
   *
   * @example "Dr. Lena Ortiz"
   */
  prescriber: string | null;
  /**
   * Prescriber's phone number.
   *
   * @example "+16025550199"
   */
  prescriberPhone: string | null;
  /**
   * Pharmacy that fills the prescription.
   *
   * @example "Camelback Pharmacy"
   */
  pharmacy: string | null;
  /**
   * Pharmacy phone number.
   *
   * @example "+16025550111"
   */
  pharmacyPhone: string | null;
  /**
   * Whether a second person must witness each dose.
   *
   * @example false
   */
  requiresWitness: boolean | null;
  /**
   * Doses currently on hand.
   *
   * @example 42
   */
  quantityOnHand: number | null;
  /**
   * Refills left on the prescription.
   *
   * @example 2
   */
  refillsRemaining: number | null;
  /**
   * Other notes.
   *
   * @example null
   */
  notes: string | null;
  /**
   * When the medication was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the medication was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new medication. Any other field is refused with `unknown_field`. */
export interface MedicationCreate {
  /**
   * The patient who takes this medication.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string;
  /**
   * Drug name, without the strength.
   *
   * @example "Metformin"
   */
  name: string;
  /**
   * Strength per dose unit.
   *
   * @example "500 mg"
   */
  strength?: string | null;
  /**
   * Dose form.
   *
   * @example "Tablet"
   */
  form?: string | null;
  /**
   * How it is taken.
   *
   * @example "By mouth"
   */
  route?: string | null;
  /**
   * Directions as written on the prescription.
   *
   * @example "Take 1 tablet twice daily with meals."
   */
  directions?: string | null;
  /**
   * What the medication is for.
   *
   * @example "Diabetes"
   */
  indication?: string | null;
  /**
   * `Scheduled` for regular doses, `PRN` for as-needed.
   *
   * @example "Scheduled"
   */
  scheduleType?: MedicationScheduleType | null;
  /**
   * For as-needed medications, when to give it.
   *
   * @example "Pain above 5 out of 10"
   */
  prnReason?: string | null;
  /**
   * For as-needed medications, the most doses allowed in a day.
   *
   * @example 4
   */
  prnMaxDailyDoses?: number | null;
  /**
   * For as-needed medications, the minimum hours between doses.
   *
   * @example 6
   */
  prnMinIntervalHours?: number | null;
  /**
   * Date the patient started the medication.
   *
   * @example "2026-01-15"
   */
  startDate?: string | null;
  /**
   * Whether the medication is currently given.
   *
   * @example "Active"
   */
  status?: MedicationStatus | null;
  /**
   * Date the medication was stopped.
   *
   * @example null
   */
  discontinuedDate?: string | null;
  /**
   * Why the medication was stopped.
   *
   * @example null
   */
  discontinuedReason?: string | null;
  /**
   * Prescribing clinician.
   *
   * @example "Dr. Lena Ortiz"
   */
  prescriber?: string | null;
  /**
   * Prescriber's phone number.
   *
   * @example "+16025550199"
   */
  prescriberPhone?: string | null;
  /**
   * Pharmacy that fills the prescription.
   *
   * @example "Camelback Pharmacy"
   */
  pharmacy?: string | null;
  /**
   * Pharmacy phone number.
   *
   * @example "+16025550111"
   */
  pharmacyPhone?: string | null;
  /**
   * Whether a second person must witness each dose.
   *
   * @example false
   */
  requiresWitness?: boolean | null;
  /**
   * Doses currently on hand.
   *
   * @example 42
   */
  quantityOnHand?: number | null;
  /**
   * Refills left on the prescription.
   *
   * @example 2
   */
  refillsRemaining?: number | null;
  /**
   * Other notes.
   *
   * @example null
   */
  notes?: string | null;
}

/**
 * Fields to change on a medication. Send only the fields to change; any other field is refused
 * with `unknown_field`. `patientId` is set when the medication is created and cannot be changed
 * afterwards.
 */
export interface MedicationUpdate {
  /**
   * Drug name, without the strength.
   *
   * @example "Metformin"
   */
  name?: string;
  /**
   * Strength per dose unit.
   *
   * @example "500 mg"
   */
  strength?: string | null;
  /**
   * Dose form.
   *
   * @example "Tablet"
   */
  form?: string | null;
  /**
   * How it is taken.
   *
   * @example "By mouth"
   */
  route?: string | null;
  /**
   * Directions as written on the prescription.
   *
   * @example "Take 1 tablet twice daily with meals."
   */
  directions?: string | null;
  /**
   * What the medication is for.
   *
   * @example "Diabetes"
   */
  indication?: string | null;
  /**
   * `Scheduled` for regular doses, `PRN` for as-needed.
   *
   * @example "Scheduled"
   */
  scheduleType?: MedicationScheduleType | null;
  /**
   * For as-needed medications, when to give it.
   *
   * @example "Pain above 5 out of 10"
   */
  prnReason?: string | null;
  /**
   * For as-needed medications, the most doses allowed in a day.
   *
   * @example 4
   */
  prnMaxDailyDoses?: number | null;
  /**
   * For as-needed medications, the minimum hours between doses.
   *
   * @example 6
   */
  prnMinIntervalHours?: number | null;
  /**
   * Date the patient started the medication.
   *
   * @example "2026-01-15"
   */
  startDate?: string | null;
  /**
   * Whether the medication is currently given.
   *
   * @example "Active"
   */
  status?: MedicationStatus | null;
  /**
   * Date the medication was stopped.
   *
   * @example null
   */
  discontinuedDate?: string | null;
  /**
   * Why the medication was stopped.
   *
   * @example null
   */
  discontinuedReason?: string | null;
  /**
   * Prescribing clinician.
   *
   * @example "Dr. Lena Ortiz"
   */
  prescriber?: string | null;
  /**
   * Prescriber's phone number.
   *
   * @example "+16025550199"
   */
  prescriberPhone?: string | null;
  /**
   * Pharmacy that fills the prescription.
   *
   * @example "Camelback Pharmacy"
   */
  pharmacy?: string | null;
  /**
   * Pharmacy phone number.
   *
   * @example "+16025550111"
   */
  pharmacyPhone?: string | null;
  /**
   * Whether a second person must witness each dose.
   *
   * @example false
   */
  requiresWitness?: boolean | null;
  /**
   * Doses currently on hand.
   *
   * @example 42
   */
  quantityOnHand?: number | null;
  /**
   * Refills left on the prescription.
   *
   * @example 2
   */
  refillsRemaining?: number | null;
  /**
   * Other notes.
   *
   * @example null
   */
  notes?: string | null;
}

/** Confirmation that a medication was deleted. */
export interface MedicationDeleted {
  /**
   * Always `medication`.
   *
   * @example "medication"
   */
  object: "medication";
  /**
   * ID of the deleted medication.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Goals of care set for a patient, such as walking to the mailbox unaided. Every field is always
 * present; a field with no value is `null`.
 */
export interface CareGoal {
  /**
   * String representing the object's type. Always `care_goal`.
   *
   * @example "care_goal"
   */
  object: "care_goal";
  /**
   * Unique identifier of the care goal.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient this goal is for.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * Short name of the goal.
   *
   * @example "Walk to the mailbox"
   */
  name: string | null;
  /**
   * What success looks like.
   *
   * @example "Walk to the mailbox and back with a cane, three times a week."
   */
  description: string | null;
  /**
   * When the care goal was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the care goal was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new care goal. Any other field is refused with `unknown_field`. */
export interface CareGoalCreate {
  /**
   * The patient this goal is for.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string;
  /**
   * Short name of the goal.
   *
   * @example "Walk to the mailbox"
   */
  name: string;
  /**
   * What success looks like.
   *
   * @example "Walk to the mailbox and back with a cane, three times a week."
   */
  description?: string | null;
}

/**
 * Fields to change on a care goal. Send only the fields to change; any other field is refused with
 * `unknown_field`. `patientId` is set when the care goal is created and cannot be changed
 * afterwards.
 */
export interface CareGoalUpdate {
  /**
   * Short name of the goal.
   *
   * @example "Walk to the mailbox"
   */
  name?: string;
  /**
   * What success looks like.
   *
   * @example "Walk to the mailbox and back with a cane, three times a week."
   */
  description?: string | null;
}

/** Confirmation that a care goal was deleted. */
export interface CareGoalDeleted {
  /**
   * Always `care_goal`.
   *
   * @example "care_goal"
   */
  object: "care_goal";
  /**
   * ID of the deleted care goal.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Notes your staff and caregivers keep on a patient's profile. Every field is always present; a
 * field with no value is `null`.
 */
export interface PatientNote {
  /**
   * String representing the object's type. Always `patient_note`.
   *
   * @example "patient_note"
   */
  object: "patient_note";
  /**
   * Unique identifier of the patient note.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient the note is about.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * The note.
   *
   * @example "Daughter visiting from out of state this week; prefers calls after 5pm."
   */
  content: string | null;
  /**
   * The person who wrote the note. Set to the API key's user.
   *
   * @example "d2b7e9a4-1c3f-4e58-b6a0-8f4c2e1d7b39"
   */
  authorId: string | null;
  /**
   * Display name of the author.
   *
   * @example "Rosa Jimenez"
   */
  authorName: string | null;
  /**
   * When the patient note was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the patient note was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new patient note. Any other field is refused with `unknown_field`. */
export interface PatientNoteCreate {
  /**
   * The patient the note is about.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string;
  /**
   * The note.
   *
   * @example "Daughter visiting from out of state this week; prefers calls after 5pm."
   */
  content: string;
}

/**
 * Fields to change on a patient note. Send only the fields to change; any other field is refused
 * with `unknown_field`. `patientId` is set when the patient note is created and cannot be changed
 * afterwards.
 */
export interface PatientNoteUpdate {
  /**
   * The note.
   *
   * @example "Daughter visiting from out of state this week; prefers calls after 5pm."
   */
  content?: string;
}

/** Confirmation that a patient note was deleted. */
export interface PatientNoteDeleted {
  /**
   * Always `patient_note`.
   *
   * @example "patient_note"
   */
  object: "patient_note";
  /**
   * ID of the deleted patient note.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * The medication administration record (MAR): each dose a caregiver gave, or the reason it was not
 * given. Read-only. Every field is always present; a field with no value is `null`.
 */
export interface MedicationAdministration {
  /**
   * String representing the object's type. Always `medication_administration`.
   *
   * @example "medication_administration"
   */
  object: "medication_administration";
  /**
   * Unique identifier of the medication administration.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The medication this dose was for.
   *
   * @example "0a9d7c3e-5b2f-4f18-a6e4-7c1b9d2e8f50"
   */
  medicationId: string | null;
  /**
   * The patient.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * The visit during which the dose was recorded.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string | null;
  /**
   * Date the dose was due.
   *
   * @example "2026-10-05"
   */
  scheduledDate: string | null;
  /**
   * Time slot the dose was due, as `HH:MM`.
   *
   * @example "08:00"
   */
  scheduledSlot: string | null;
  /**
   * What happened to the dose.
   *
   * @example "Given"
   */
  status: MedicationAdministrationStatus | null;
  /**
   * When the dose was given.
   *
   * @example "2026-10-05T15:04:00.000Z"
   */
  administeredAt: string | null;
  /**
   * Who gave or recorded the dose.
   *
   * @example "Rosa Jimenez"
   */
  administeredByName: string | null;
  /**
   * Why the dose was refused, held or missed.
   *
   * @example null
   */
  reasonText: string | null;
  /**
   * Note recorded with the dose.
   *
   * @example null
   */
  note: string | null;
  /**
   * Witness, for medications that require one.
   *
   * @example null
   */
  witnessName: string | null;
  /**
   * For as-needed doses, why it was given.
   *
   * @example null
   */
  prnReason: string | null;
  /**
   * Whether this entry was later corrected.
   *
   * @example false
   */
  amended: boolean | null;
  /**
   * When the medication administration was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the medication administration was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/**
 * OASIS assessments recorded for Medicare home health patients. This lists each assessment and its
 * status; the item-level answers are not included. Read-only. Every field is always present; a
 * field with no value is `null`.
 */
export interface OasisAssessment {
  /**
   * String representing the object's type. Always `oasis_assessment`.
   *
   * @example "oasis_assessment"
   */
  object: "oasis_assessment";
  /**
   * Unique identifier of the OASIS assessment.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient assessed.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * Which OASIS time point this assessment covers.
   *
   * @example "SOC"
   */
  timepoint: OasisAssessmentTimepoint | null;
  /**
   * OASIS data set version.
   *
   * @example "OASIS-E1"
   */
  specVersion: string | null;
  /**
   * Where the assessment is in its lifecycle.
   *
   * @example "Completed"
   */
  status: OasisAssessmentStatus | null;
  /**
   * Date the assessment was completed (OASIS item M0090).
   *
   * @example "2026-09-30"
   */
  m0090CompletedDate: string | null;
  /**
   * Start of the care episode.
   *
   * @example "2026-09-28"
   */
  episodeStartDate: string | null;
  /**
   * Date the assessment is due.
   *
   * @example "2026-10-02"
   */
  targetDate: string | null;
  /**
   * Clinician who performed the assessment.
   *
   * @example "Jordan Lee, RN"
   */
  assessorName: string | null;
  /**
   * When the assessment was marked complete.
   *
   * @example "2026-09-30T21:12:00.000Z"
   */
  completedAt: string | null;
  /**
   * When the assessment was exported for submission.
   *
   * @example null
   */
  exportedAt: string | null;
  /**
   * Correction number; 0 for the original.
   *
   * @example 0
   */
  correctionNumber: number | null;
  /**
   * Notes on the assessment.
   *
   * @example null
   */
  notes: string | null;
  /**
   * When the OASIS assessment was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the OASIS assessment was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/**
 * Caregivers are the aides, nurses and therapists your agency schedules to visit patients. Every
 * field is always present; a field with no value is `null`.
 */
export interface Caregiver {
  /**
   * String representing the object's type. Always `caregiver`.
   *
   * @example "caregiver"
   */
  object: "caregiver";
  /**
   * Unique identifier of the caregiver.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Given name.
   *
   * @example "Rosa"
   */
  firstName: string | null;
  /**
   * Middle name.
   *
   * @example null
   */
  middleName: string | null;
  /**
   * Family name.
   *
   * @example "Jimenez"
   */
  lastName: string | null;
  /**
   * The name the caregiver prefers to be called.
   *
   * @example null
   */
  goesByName: string | null;
  /**
   * Work email address.
   *
   * @example "rosa.jimenez@example.com"
   */
  email: string | null;
  /**
   * Employment status.
   *
   * @example "Active"
   */
  status: CaregiverStatus | null;
  /**
   * Whether the caregiver can be scheduled. If you leave it out on create, it is `false` for an
   * `Inactive` status and `true` otherwise.
   *
   * @example true
   */
  active: boolean | null;
  /**
   * Date of birth.
   *
   * @example "1988-07-22"
   */
  dateOfBirth: string | null;
  /**
   * Gender as recorded by the agency.
   *
   * @example "Female"
   */
  gender: string | null;
  /**
   * Language the caregiver is most comfortable speaking.
   *
   * @example "Spanish"
   */
  primaryLanguage: string | null;
  /**
   * Home street address.
   *
   * @example "220 W Indian School Rd"
   */
  address: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state: string | null;
  /**
   * ZIP code.
   *
   * @example "85013"
   */
  zipCode: string | null;
  /**
   * The office (branch) the caregiver works from.
   *
   * @example "6b0e4d1a-2c7f-4a93-8e15-f3d9a7c2b604"
   */
  officeId: string | null;
  /**
   * License or credential type.
   *
   * @example "CNA"
   */
  licenseType: string | null;
  /**
   * National Provider Identifier, for licensed clinicians.
   *
   * @example null
   */
  npiNumber: string | null;
  /**
   * State license number.
   *
   * @example null
   */
  stateLicenseNumber: string | null;
  /**
   * State that issued the license.
   *
   * @example null
   */
  stateLicenseState: string | null;
  /**
   * License expiry date, as `YYYY-MM-DD`.
   *
   * @example null
   */
  stateLicenseExpiry: string | null;
  /**
   * Whether the caregiver works live-in shifts.
   *
   * @example false
   */
  isLiveInCaregiver: boolean | null;
  /**
   * Notes schedulers see when booking this caregiver.
   *
   * @example "No cats - allergic."
   */
  schedulingNotes: string | null;
  /**
   * Date of the caregiver's most recent visit.
   *
   * @example "2026-10-04"
   */
  lastVisit: string | null;
  /**
   * When the caregiver was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the caregiver was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new caregiver. Any other field is refused with `unknown_field`. */
export interface CaregiverCreate {
  /**
   * Given name.
   *
   * @example "Rosa"
   */
  firstName: string;
  /**
   * Middle name.
   *
   * @example null
   */
  middleName?: string | null;
  /**
   * Family name.
   *
   * @example "Jimenez"
   */
  lastName: string;
  /**
   * The name the caregiver prefers to be called.
   *
   * @example null
   */
  goesByName?: string | null;
  /**
   * Work email address.
   *
   * @example "rosa.jimenez@example.com"
   */
  email?: string | null;
  /**
   * Employment status.
   *
   * @example "Active"
   */
  status?: CaregiverStatus | null;
  /**
   * Whether the caregiver can be scheduled. If you leave it out on create, it is `false` for an
   * `Inactive` status and `true` otherwise.
   *
   * @example true
   */
  active?: boolean | null;
  /**
   * Date of birth.
   *
   * @example "1988-07-22"
   */
  dateOfBirth?: string | null;
  /**
   * Gender as recorded by the agency.
   *
   * @example "Female"
   */
  gender?: string | null;
  /**
   * Language the caregiver is most comfortable speaking.
   *
   * @example "Spanish"
   */
  primaryLanguage?: string | null;
  /**
   * Home street address.
   *
   * @example "220 W Indian School Rd"
   */
  address?: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city?: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code.
   *
   * @example "85013"
   */
  zipCode?: string | null;
  /**
   * The office (branch) the caregiver works from.
   *
   * @example "6b0e4d1a-2c7f-4a93-8e15-f3d9a7c2b604"
   */
  officeId?: string | null;
  /**
   * License or credential type.
   *
   * @example "CNA"
   */
  licenseType?: string | null;
  /**
   * National Provider Identifier, for licensed clinicians.
   *
   * @example null
   */
  npiNumber?: string | null;
  /**
   * State license number.
   *
   * @example null
   */
  stateLicenseNumber?: string | null;
  /**
   * State that issued the license.
   *
   * @example null
   */
  stateLicenseState?: string | null;
  /**
   * License expiry date, as `YYYY-MM-DD`.
   *
   * @example null
   */
  stateLicenseExpiry?: string | null;
  /**
   * Whether the caregiver works live-in shifts.
   *
   * @example false
   */
  isLiveInCaregiver?: boolean | null;
  /**
   * Notes schedulers see when booking this caregiver.
   *
   * @example "No cats - allergic."
   */
  schedulingNotes?: string | null;
}

/**
 * Fields to change on a caregiver. Send only the fields to change; any other field is refused with
 * `unknown_field`.
 */
export interface CaregiverUpdate {
  /**
   * Given name.
   *
   * @example "Rosa"
   */
  firstName?: string;
  /**
   * Middle name.
   *
   * @example null
   */
  middleName?: string | null;
  /**
   * Family name.
   *
   * @example "Jimenez"
   */
  lastName?: string;
  /**
   * The name the caregiver prefers to be called.
   *
   * @example null
   */
  goesByName?: string | null;
  /**
   * Work email address.
   *
   * @example "rosa.jimenez@example.com"
   */
  email?: string | null;
  /**
   * Employment status.
   *
   * @example "Active"
   */
  status?: CaregiverStatus | null;
  /**
   * Whether the caregiver can be scheduled. If you leave it out on create, it is `false` for an
   * `Inactive` status and `true` otherwise.
   *
   * @example true
   */
  active?: boolean | null;
  /**
   * Date of birth.
   *
   * @example "1988-07-22"
   */
  dateOfBirth?: string | null;
  /**
   * Gender as recorded by the agency.
   *
   * @example "Female"
   */
  gender?: string | null;
  /**
   * Language the caregiver is most comfortable speaking.
   *
   * @example "Spanish"
   */
  primaryLanguage?: string | null;
  /**
   * Home street address.
   *
   * @example "220 W Indian School Rd"
   */
  address?: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city?: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code.
   *
   * @example "85013"
   */
  zipCode?: string | null;
  /**
   * The office (branch) the caregiver works from.
   *
   * @example "6b0e4d1a-2c7f-4a93-8e15-f3d9a7c2b604"
   */
  officeId?: string | null;
  /**
   * License or credential type.
   *
   * @example "CNA"
   */
  licenseType?: string | null;
  /**
   * National Provider Identifier, for licensed clinicians.
   *
   * @example null
   */
  npiNumber?: string | null;
  /**
   * State license number.
   *
   * @example null
   */
  stateLicenseNumber?: string | null;
  /**
   * State that issued the license.
   *
   * @example null
   */
  stateLicenseState?: string | null;
  /**
   * License expiry date, as `YYYY-MM-DD`.
   *
   * @example null
   */
  stateLicenseExpiry?: string | null;
  /**
   * Whether the caregiver works live-in shifts.
   *
   * @example false
   */
  isLiveInCaregiver?: boolean | null;
  /**
   * Notes schedulers see when booking this caregiver.
   *
   * @example "No cats - allergic."
   */
  schedulingNotes?: string | null;
}

/** Confirmation that a caregiver was deleted. */
export interface CaregiverDeleted {
  /**
   * Always `caregiver`.
   *
   * @example "caregiver"
   */
  object: "caregiver";
  /**
   * ID of the deleted caregiver.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Notes your staff keep on a caregiver's profile. Every field is always present; a field with no
 * value is `null`.
 */
export interface CaregiverNote {
  /**
   * String representing the object's type. Always `caregiver_note`.
   *
   * @example "caregiver_note"
   */
  object: "caregiver_note";
  /**
   * Unique identifier of the caregiver note.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The caregiver the note is about.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * The note.
   *
   * @example "Completed dementia care refresher on 9/30."
   */
  content: string | null;
  /**
   * The person who wrote the note. Set to the API key's user.
   *
   * @example "d2b7e9a4-1c3f-4e58-b6a0-8f4c2e1d7b39"
   */
  authorId: string | null;
  /**
   * Display name of the author.
   *
   * @example "Avery Chen"
   */
  authorName: string | null;
  /**
   * When the caregiver note was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the caregiver note was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new caregiver note. Any other field is refused with `unknown_field`. */
export interface CaregiverNoteCreate {
  /**
   * The caregiver the note is about.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string;
  /**
   * The note.
   *
   * @example "Completed dementia care refresher on 9/30."
   */
  content: string;
}

/**
 * Fields to change on a caregiver note. Send only the fields to change; any other field is refused
 * with `unknown_field`. `caregiverId` is set when the caregiver note is created and cannot be
 * changed afterwards.
 */
export interface CaregiverNoteUpdate {
  /**
   * The note.
   *
   * @example "Completed dementia care refresher on 9/30."
   */
  content?: string;
}

/** Confirmation that a caregiver note was deleted. */
export interface CaregiverNoteDeleted {
  /**
   * Always `caregiver_note`.
   *
   * @example "caregiver_note"
   */
  object: "caregiver_note";
  /**
   * ID of the deleted caregiver note.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Certifications, licenses and background checks on a caregiver's profile, with their expiry
 * dates. Every field is always present; a field with no value is `null`.
 */
export interface Certification {
  /**
   * String representing the object's type. Always `certification`.
   *
   * @example "certification"
   */
  object: "certification";
  /**
   * Unique identifier of the certification.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The caregiver who holds it.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * Name of the certification.
   *
   * @example "CPR and First Aid"
   */
  name: string | null;
  /**
   * Kind of credential, such as a certification or a background check.
   *
   * @example "certification"
   */
  certKind: string | null;
  /**
   * Date it was obtained.
   *
   * @example "2025-11-02"
   */
  obtained: string | null;
  /**
   * Date it expires.
   *
   * @example "2027-11-02"
   */
  expires: string | null;
  /**
   * For background checks, the agency that ran the check.
   *
   * @example null
   */
  checkAgency: string | null;
  /**
   * For background checks, the state the check covers.
   *
   * @example null
   */
  checkState: string | null;
  /**
   * For background checks, the result.
   *
   * @example null
   */
  checkResult: string | null;
  /**
   * Who verified the credential.
   *
   * @example "Avery Chen"
   */
  verifiedByName: string | null;
  /**
   * When the credential was verified.
   *
   * @example "2025-11-03T17:20:00.000Z"
   */
  verifiedAt: string | null;
  /**
   * When the certification was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the certification was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new certification. Any other field is refused with `unknown_field`. */
export interface CertificationCreate {
  /**
   * The caregiver who holds it.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string;
  /**
   * Name of the certification.
   *
   * @example "CPR and First Aid"
   */
  name: string;
  /**
   * Kind of credential, such as a certification or a background check.
   *
   * @example "certification"
   */
  certKind?: string | null;
  /**
   * Date it was obtained.
   *
   * @example "2025-11-02"
   */
  obtained?: string | null;
  /**
   * Date it expires.
   *
   * @example "2027-11-02"
   */
  expires?: string | null;
  /**
   * For background checks, the agency that ran the check.
   *
   * @example null
   */
  checkAgency?: string | null;
  /**
   * For background checks, the state the check covers.
   *
   * @example null
   */
  checkState?: string | null;
  /**
   * For background checks, the result.
   *
   * @example null
   */
  checkResult?: string | null;
}

/**
 * Fields to change on a certification. Send only the fields to change; any other field is refused
 * with `unknown_field`. `caregiverId` is set when the certification is created and cannot be
 * changed afterwards.
 */
export interface CertificationUpdate {
  /**
   * Name of the certification.
   *
   * @example "CPR and First Aid"
   */
  name?: string;
  /**
   * Kind of credential, such as a certification or a background check.
   *
   * @example "certification"
   */
  certKind?: string | null;
  /**
   * Date it was obtained.
   *
   * @example "2025-11-02"
   */
  obtained?: string | null;
  /**
   * Date it expires.
   *
   * @example "2027-11-02"
   */
  expires?: string | null;
  /**
   * For background checks, the agency that ran the check.
   *
   * @example null
   */
  checkAgency?: string | null;
  /**
   * For background checks, the state the check covers.
   *
   * @example null
   */
  checkState?: string | null;
  /**
   * For background checks, the result.
   *
   * @example null
   */
  checkResult?: string | null;
}

/** Confirmation that a certification was deleted. */
export interface CertificationDeleted {
  /**
   * Always `certification`.
   *
   * @example "certification"
   */
  object: "certification";
  /**
   * ID of the deleted certification.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * When a caregiver can or cannot work. A window is either a weekly recurring time on one weekday,
 * or a one-off date range such as time off. Every field is always present; a field with no value
 * is `null`.
 */
export interface Availability {
  /**
   * String representing the object's type. Always `availability`.
   *
   * @example "availability"
   */
  object: "availability";
  /**
   * Unique identifier of the availability window.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The caregiver.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * `true` when the caregiver can work in this window, `false` for time off.
   *
   * @example true
   */
  isAvailable: boolean | null;
  /**
   * Whether the window repeats weekly.
   *
   * @example true
   */
  recurring: boolean | null;
  /**
   * For weekly windows, the weekday: 0 is Sunday, 6 is Saturday.
   *
   * @example 1
   */
  dayOfWeek: number | null;
  /**
   * For weekly windows, the start time in minutes after midnight.
   *
   * @example 480
   */
  startMinute: number | null;
  /**
   * For weekly windows, the end time in minutes after midnight.
   *
   * @example 1020
   */
  endMinute: number | null;
  /**
   * For weekly windows, repeat every this many weeks. Defaults to every week.
   *
   * @example 1
   */
  intervalWeeks: number | null;
  /**
   * First date a weekly window applies.
   *
   * @example "2026-10-01"
   */
  effectiveFrom: string | null;
  /**
   * Last date a weekly window applies; `null` for no end.
   *
   * @example null
   */
  effectiveTo: string | null;
  /**
   * For one-off windows, when it starts.
   *
   * @example null
   */
  startDateTime: string | null;
  /**
   * For one-off windows, when it ends.
   *
   * @example null
   */
  endDateTime: string | null;
  /**
   * Whether these are the caregiver's preferred hours.
   *
   * @example false
   */
  isPreferred: boolean | null;
  /**
   * Why the caregiver is unavailable, for time off.
   *
   * @example null
   */
  reason: string | null;
  /**
   * Whether the window is in effect.
   *
   * @example true
   */
  isActive: boolean | null;
  /**
   * When the availability window was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the availability window was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new availability window. Any other field is refused with `unknown_field`. */
export interface AvailabilityCreate {
  /**
   * The caregiver.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string;
  /**
   * `true` when the caregiver can work in this window, `false` for time off.
   *
   * @example true
   */
  isAvailable?: boolean | null;
  /**
   * Whether the window repeats weekly.
   *
   * @example true
   */
  recurring?: boolean | null;
  /**
   * For weekly windows, the weekday: 0 is Sunday, 6 is Saturday.
   *
   * @example 1
   */
  dayOfWeek?: number | null;
  /**
   * For weekly windows, the start time in minutes after midnight.
   *
   * @example 480
   */
  startMinute?: number | null;
  /**
   * For weekly windows, the end time in minutes after midnight.
   *
   * @example 1020
   */
  endMinute?: number | null;
  /**
   * For weekly windows, repeat every this many weeks. Defaults to every week.
   *
   * @example 1
   */
  intervalWeeks?: number | null;
  /**
   * First date a weekly window applies.
   *
   * @example "2026-10-01"
   */
  effectiveFrom?: string | null;
  /**
   * Last date a weekly window applies; `null` for no end.
   *
   * @example null
   */
  effectiveTo?: string | null;
  /**
   * For one-off windows, when it starts.
   *
   * @example null
   */
  startDateTime?: string | null;
  /**
   * For one-off windows, when it ends.
   *
   * @example null
   */
  endDateTime?: string | null;
  /**
   * Whether these are the caregiver's preferred hours.
   *
   * @example false
   */
  isPreferred?: boolean | null;
  /**
   * Why the caregiver is unavailable, for time off.
   *
   * @example null
   */
  reason?: string | null;
  /**
   * Whether the window is in effect.
   *
   * @example true
   */
  isActive?: boolean | null;
}

/**
 * Fields to change on an availability window. Send only the fields to change; any other field is
 * refused with `unknown_field`. `caregiverId` is set when the availability window is created and
 * cannot be changed afterwards.
 */
export interface AvailabilityUpdate {
  /**
   * `true` when the caregiver can work in this window, `false` for time off.
   *
   * @example true
   */
  isAvailable?: boolean | null;
  /**
   * Whether the window repeats weekly.
   *
   * @example true
   */
  recurring?: boolean | null;
  /**
   * For weekly windows, the weekday: 0 is Sunday, 6 is Saturday.
   *
   * @example 1
   */
  dayOfWeek?: number | null;
  /**
   * For weekly windows, the start time in minutes after midnight.
   *
   * @example 480
   */
  startMinute?: number | null;
  /**
   * For weekly windows, the end time in minutes after midnight.
   *
   * @example 1020
   */
  endMinute?: number | null;
  /**
   * For weekly windows, repeat every this many weeks. Defaults to every week.
   *
   * @example 1
   */
  intervalWeeks?: number | null;
  /**
   * First date a weekly window applies.
   *
   * @example "2026-10-01"
   */
  effectiveFrom?: string | null;
  /**
   * Last date a weekly window applies; `null` for no end.
   *
   * @example null
   */
  effectiveTo?: string | null;
  /**
   * For one-off windows, when it starts.
   *
   * @example null
   */
  startDateTime?: string | null;
  /**
   * For one-off windows, when it ends.
   *
   * @example null
   */
  endDateTime?: string | null;
  /**
   * Whether these are the caregiver's preferred hours.
   *
   * @example false
   */
  isPreferred?: boolean | null;
  /**
   * Why the caregiver is unavailable, for time off.
   *
   * @example null
   */
  reason?: string | null;
  /**
   * Whether the window is in effect.
   *
   * @example true
   */
  isActive?: boolean | null;
}

/** Confirmation that an availability window was deleted. */
export interface AvailabilityDeleted {
  /**
   * Always `availability`.
   *
   * @example "availability"
   */
  object: "availability";
  /**
   * ID of the deleted availability window.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Skills and specialties on a caregiver's profile, such as dementia care or Hoyer lift transfers.
 * Every field is always present; a field with no value is `null`.
 */
export interface Specialization {
  /**
   * String representing the object's type. Always `specialization`.
   *
   * @example "specialization"
   */
  object: "specialization";
  /**
   * Unique identifier of the specialization.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The caregiver.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * Name of the skill.
   *
   * @example "Dementia care"
   */
  name: string | null;
  /**
   * Details.
   *
   * @example "Certified through the Alzheimer's Association, 2024."
   */
  description: string | null;
  /**
   * When the specialization was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the specialization was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new specialization. Any other field is refused with `unknown_field`. */
export interface SpecializationCreate {
  /**
   * The caregiver.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string;
  /**
   * Name of the skill.
   *
   * @example "Dementia care"
   */
  name: string;
  /**
   * Details.
   *
   * @example "Certified through the Alzheimer's Association, 2024."
   */
  description?: string | null;
}

/**
 * Fields to change on a specialization. Send only the fields to change; any other field is refused
 * with `unknown_field`. `caregiverId` is set when the specialization is created and cannot be
 * changed afterwards.
 */
export interface SpecializationUpdate {
  /**
   * Name of the skill.
   *
   * @example "Dementia care"
   */
  name?: string;
  /**
   * Details.
   *
   * @example "Certified through the Alzheimer's Association, 2024."
   */
  description?: string | null;
}

/** Confirmation that a specialization was deleted. */
export interface SpecializationDeleted {
  /**
   * Always `specialization`.
   *
   * @example "specialization"
   */
  object: "specialization";
  /**
   * ID of the deleted specialization.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * People who applied to work for your agency, tracked through your hiring stages until they are
 * hired as caregivers. Every field is always present; a field with no value is `null`.
 */
export interface Applicant {
  /**
   * String representing the object's type. Always `applicant`.
   *
   * @example "applicant"
   */
  object: "applicant";
  /**
   * Unique identifier of the applicant.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Given name.
   *
   * @example "Tasha"
   */
  firstName: string | null;
  /**
   * Middle name.
   *
   * @example null
   */
  middleName: string | null;
  /**
   * Family name.
   *
   * @example "Brooks"
   */
  lastName: string | null;
  /**
   * Email address.
   *
   * @example "tasha.brooks@example.com"
   */
  email: string | null;
  /**
   * Phone number.
   *
   * @example "+16025550173"
   */
  phone: string | null;
  /**
   * Hiring stage, as named in your pipeline.
   *
   * @example "Interview"
   */
  stage: string | null;
  /**
   * When the applicant last moved stage.
   *
   * @example "2026-10-01T16:00:00.000Z"
   */
  stageChangedAt: string | null;
  /**
   * When the application was received.
   *
   * @example "2026-09-24T14:30:00.000Z"
   */
  applicationDate: string | null;
  /**
   * Where the applicant found you.
   *
   * @example "Indeed"
   */
  applicationSource: string | null;
  /**
   * Who referred the applicant.
   *
   * @example null
   */
  referredBy: string | null;
  /**
   * City.
   *
   * @example "Tempe"
   */
  city: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state: string | null;
  /**
   * ZIP code.
   *
   * @example "85281"
   */
  zipCode: string | null;
  /**
   * Earliest date the applicant can start.
   *
   * @example "2026-10-20"
   */
  desiredStartDate: string | null;
  /**
   * Hourly pay the applicant is asking for, in dollars.
   *
   * @example 19.5
   */
  desiredPayRate: number | null;
  /**
   * Hours per week the applicant can work.
   *
   * @example 30
   */
  availableHoursPerWeek: number | null;
  /**
   * Years of caregiving experience.
   *
   * @example 4
   */
  yearsExperience: number | null;
  /**
   * Primary language.
   *
   * @example "English"
   */
  primaryLanguage: string | null;
  /**
   * Whether the applicant has a driver's license.
   *
   * @example true
   */
  hasDriversLicense: boolean | null;
  /**
   * Whether the applicant has reliable transportation.
   *
   * @example true
   */
  hasReliableTransportation: boolean | null;
  /**
   * Whether the applicant holds a current CPR certification.
   *
   * @example true
   */
  hasCPRCertification: boolean | null;
  /**
   * Scheduled or completed interview time.
   *
   * @example "2026-10-07T17:00:00.000Z"
   */
  interviewDate: string | null;
  /**
   * Status of any job offer.
   *
   * @example null
   */
  offerStatus: string | null;
  /**
   * The office the applicant applied to.
   *
   * @example "6b0e4d1a-2c7f-4a93-8e15-f3d9a7c2b604"
   */
  officeId: string | null;
  /**
   * Recruiter notes.
   *
   * @example "Strong references from prior agency."
   */
  notes: string | null;
  /**
   * The caregiver record created when the applicant was hired.
   *
   * @example null
   */
  convertedToCaregiverId: string | null;
  /**
   * When the applicant was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the applicant was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new applicant. Any other field is refused with `unknown_field`. */
export interface ApplicantCreate {
  /**
   * Given name.
   *
   * @example "Tasha"
   */
  firstName: string;
  /**
   * Middle name.
   *
   * @example null
   */
  middleName?: string | null;
  /**
   * Family name.
   *
   * @example "Brooks"
   */
  lastName: string;
  /**
   * Email address.
   *
   * @example "tasha.brooks@example.com"
   */
  email?: string | null;
  /**
   * Phone number.
   *
   * @example "+16025550173"
   */
  phone?: string | null;
  /**
   * Hiring stage, as named in your pipeline.
   *
   * @example "Interview"
   */
  stage?: string | null;
  /**
   * When the application was received.
   *
   * @example "2026-09-24T14:30:00.000Z"
   */
  applicationDate?: string | null;
  /**
   * Where the applicant found you.
   *
   * @example "Indeed"
   */
  applicationSource?: string | null;
  /**
   * Who referred the applicant.
   *
   * @example null
   */
  referredBy?: string | null;
  /**
   * City.
   *
   * @example "Tempe"
   */
  city?: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code.
   *
   * @example "85281"
   */
  zipCode?: string | null;
  /**
   * Earliest date the applicant can start.
   *
   * @example "2026-10-20"
   */
  desiredStartDate?: string | null;
  /**
   * Hourly pay the applicant is asking for, in dollars.
   *
   * @example 19.5
   */
  desiredPayRate?: number | null;
  /**
   * Hours per week the applicant can work.
   *
   * @example 30
   */
  availableHoursPerWeek?: number | null;
  /**
   * Years of caregiving experience.
   *
   * @example 4
   */
  yearsExperience?: number | null;
  /**
   * Primary language.
   *
   * @example "English"
   */
  primaryLanguage?: string | null;
  /**
   * Whether the applicant has a driver's license.
   *
   * @example true
   */
  hasDriversLicense?: boolean | null;
  /**
   * Whether the applicant has reliable transportation.
   *
   * @example true
   */
  hasReliableTransportation?: boolean | null;
  /**
   * Whether the applicant holds a current CPR certification.
   *
   * @example true
   */
  hasCPRCertification?: boolean | null;
  /**
   * Scheduled or completed interview time.
   *
   * @example "2026-10-07T17:00:00.000Z"
   */
  interviewDate?: string | null;
  /**
   * Status of any job offer.
   *
   * @example null
   */
  offerStatus?: string | null;
  /**
   * The office the applicant applied to.
   *
   * @example "6b0e4d1a-2c7f-4a93-8e15-f3d9a7c2b604"
   */
  officeId?: string | null;
  /**
   * Recruiter notes.
   *
   * @example "Strong references from prior agency."
   */
  notes?: string | null;
}

/**
 * Fields to change on an applicant. Send only the fields to change; any other field is refused
 * with `unknown_field`.
 */
export interface ApplicantUpdate {
  /**
   * Given name.
   *
   * @example "Tasha"
   */
  firstName?: string;
  /**
   * Middle name.
   *
   * @example null
   */
  middleName?: string | null;
  /**
   * Family name.
   *
   * @example "Brooks"
   */
  lastName?: string;
  /**
   * Email address.
   *
   * @example "tasha.brooks@example.com"
   */
  email?: string | null;
  /**
   * Phone number.
   *
   * @example "+16025550173"
   */
  phone?: string | null;
  /**
   * Hiring stage, as named in your pipeline.
   *
   * @example "Interview"
   */
  stage?: string | null;
  /**
   * When the application was received.
   *
   * @example "2026-09-24T14:30:00.000Z"
   */
  applicationDate?: string | null;
  /**
   * Where the applicant found you.
   *
   * @example "Indeed"
   */
  applicationSource?: string | null;
  /**
   * Who referred the applicant.
   *
   * @example null
   */
  referredBy?: string | null;
  /**
   * City.
   *
   * @example "Tempe"
   */
  city?: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code.
   *
   * @example "85281"
   */
  zipCode?: string | null;
  /**
   * Earliest date the applicant can start.
   *
   * @example "2026-10-20"
   */
  desiredStartDate?: string | null;
  /**
   * Hourly pay the applicant is asking for, in dollars.
   *
   * @example 19.5
   */
  desiredPayRate?: number | null;
  /**
   * Hours per week the applicant can work.
   *
   * @example 30
   */
  availableHoursPerWeek?: number | null;
  /**
   * Years of caregiving experience.
   *
   * @example 4
   */
  yearsExperience?: number | null;
  /**
   * Primary language.
   *
   * @example "English"
   */
  primaryLanguage?: string | null;
  /**
   * Whether the applicant has a driver's license.
   *
   * @example true
   */
  hasDriversLicense?: boolean | null;
  /**
   * Whether the applicant has reliable transportation.
   *
   * @example true
   */
  hasReliableTransportation?: boolean | null;
  /**
   * Whether the applicant holds a current CPR certification.
   *
   * @example true
   */
  hasCPRCertification?: boolean | null;
  /**
   * Scheduled or completed interview time.
   *
   * @example "2026-10-07T17:00:00.000Z"
   */
  interviewDate?: string | null;
  /**
   * Status of any job offer.
   *
   * @example null
   */
  offerStatus?: string | null;
  /**
   * The office the applicant applied to.
   *
   * @example "6b0e4d1a-2c7f-4a93-8e15-f3d9a7c2b604"
   */
  officeId?: string | null;
  /**
   * Recruiter notes.
   *
   * @example "Strong references from prior agency."
   */
  notes?: string | null;
}

/** Confirmation that an applicant was deleted. */
export interface ApplicantDeleted {
  /**
   * Always `applicant`.
   *
   * @example "applicant"
   */
  object: "applicant";
  /**
   * ID of the deleted applicant.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Visits are scheduled or completed caregiver shifts at a patient's home. A visit's patient,
 * caregiver, times and status are set when it is created; reschedule or reassign a visit in
 * AveeCare. Every field is always present; a field with no value is `null`.
 */
export interface Visit {
  /**
   * String representing the object's type. Always `visit`.
   *
   * @example "visit"
   */
  object: "visit";
  /**
   * Unique identifier of the visit.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient being visited.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * The caregiver assigned to the visit; `null` for an open shift.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * Scheduled start.
   *
   * @example "2026-10-06T15:00:00.000Z"
   */
  startTime: string | null;
  /**
   * Scheduled end.
   *
   * @example "2026-10-06T19:00:00.000Z"
   */
  endTime: string | null;
  /**
   * Where the visit is in its day. New visits are `Scheduled`.
   *
   * @example "Scheduled"
   */
  status: VisitStatus | null;
  /**
   * Short title shown on the schedule.
   *
   * @example "Morning personal care"
   */
  title: string | null;
  /**
   * Whether the visit spans the whole day, such as a live-in shift.
   *
   * @example false
   */
  isAllDay: boolean | null;
  /**
   * Tasks the caregiver should complete during the visit.
   *
   * @example ["Bathing","Meal preparation","Medication reminder"]
   */
  tasks: string[] | null;
  /**
   * Why the visit is scheduled, if it is not routine.
   *
   * @example null
   */
  reason: string | null;
  /**
   * Notes for the caregiver about this visit.
   *
   * @example "Use the side door; front steps are icy."
   */
  notes: string | null;
  /**
   * Billing service code for the visit.
   *
   * @example "S5125"
   */
  serviceCode: string | null;
  /**
   * Where the visit takes place, when it is not the patient's home address.
   *
   * @example null
   */
  locationAddress: string | null;
  /**
   * When the caregiver clocked in.
   *
   * @example "2026-10-06T15:02:11.000Z"
   */
  actualStartTime: string | null;
  /**
   * When the caregiver clocked out.
   *
   * @example "2026-10-06T19:00:40.000Z"
   */
  actualEndTime: string | null;
  /**
   * Tasks the caregiver marked done.
   *
   * @example ["Bathing","Meal preparation"]
   */
  completedTasks: string[] | null;
  /**
   * Whether the visit passed electronic visit verification.
   *
   * @example true
   */
  evvVerified: boolean | null;
  /**
   * Electronic visit verification status.
   *
   * @example "Validated"
   */
  evvStatus: VisitEvvStatus | null;
  /**
   * Whether the visit has been billed.
   *
   * @example "NotBilled"
   */
  billingStatus: VisitBillingStatus | null;
  /**
   * The invoice the visit was billed on.
   *
   * @example null
   */
  invoiceId: string | null;
  /**
   * Hours billed for the visit.
   *
   * @example 4
   */
  billableHours: number | null;
  /**
   * Whether the visit belongs to a repeating series.
   *
   * @example false
   */
  isRecurring: boolean | null;
  /**
   * The repeating series the visit belongs to.
   *
   * @example null
   */
  recurrenceSeriesId: string | null;
  /**
   * The caregiver's response to the assignment.
   *
   * @example "confirmed"
   */
  caregiverRSVP: VisitCaregiverRsvp | null;
  /**
   * When the visit was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the visit was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new visit. Any other field is refused with `unknown_field`. */
export interface VisitCreate {
  /**
   * The patient being visited.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string;
  /**
   * The caregiver assigned to the visit; `null` for an open shift.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId?: string | null;
  /**
   * Scheduled start.
   *
   * @example "2026-10-06T15:00:00.000Z"
   */
  startTime: string;
  /**
   * Scheduled end.
   *
   * @example "2026-10-06T19:00:00.000Z"
   */
  endTime: string;
  /**
   * Where the visit is in its day. New visits are `Scheduled`.
   *
   * @example "Scheduled"
   */
  status?: VisitStatus | null;
  /**
   * Short title shown on the schedule.
   *
   * @example "Morning personal care"
   */
  title?: string | null;
  /**
   * Whether the visit spans the whole day, such as a live-in shift.
   *
   * @example false
   */
  isAllDay?: boolean | null;
  /**
   * Tasks the caregiver should complete during the visit.
   *
   * @example ["Bathing","Meal preparation","Medication reminder"]
   */
  tasks?: string[] | null;
  /**
   * Why the visit is scheduled, if it is not routine.
   *
   * @example null
   */
  reason?: string | null;
  /**
   * Notes for the caregiver about this visit.
   *
   * @example "Use the side door; front steps are icy."
   */
  notes?: string | null;
  /**
   * Billing service code for the visit.
   *
   * @example "S5125"
   */
  serviceCode?: string | null;
  /**
   * Where the visit takes place, when it is not the patient's home address.
   *
   * @example null
   */
  locationAddress?: string | null;
}

/**
 * Fields to change on a visit. Send only the fields to change; any other field is refused with
 * `unknown_field`. `patientId`, `caregiverId`, `startTime`, `endTime`, `status` are set when the
 * visit is created and cannot be changed afterwards.
 */
export interface VisitUpdate {
  /**
   * Short title shown on the schedule.
   *
   * @example "Morning personal care"
   */
  title?: string | null;
  /**
   * Whether the visit spans the whole day, such as a live-in shift.
   *
   * @example false
   */
  isAllDay?: boolean | null;
  /**
   * Tasks the caregiver should complete during the visit.
   *
   * @example ["Bathing","Meal preparation","Medication reminder"]
   */
  tasks?: string[] | null;
  /**
   * Why the visit is scheduled, if it is not routine.
   *
   * @example null
   */
  reason?: string | null;
  /**
   * Notes for the caregiver about this visit.
   *
   * @example "Use the side door; front steps are icy."
   */
  notes?: string | null;
  /**
   * Billing service code for the visit.
   *
   * @example "S5125"
   */
  serviceCode?: string | null;
  /**
   * Where the visit takes place, when it is not the patient's home address.
   *
   * @example null
   */
  locationAddress?: string | null;
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
   * ID of the deleted visit.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Notes written about a visit by the caregiver or office staff. Every field is always present; a
 * field with no value is `null`.
 */
export interface VisitNote {
  /**
   * String representing the object's type. Always `visit_note`.
   *
   * @example "visit_note"
   */
  object: "visit_note";
  /**
   * Unique identifier of the visit note.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The visit the note is about.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string | null;
  /**
   * The note.
   *
   * @example "Patient was in good spirits; ate a full lunch."
   */
  content: string | null;
  /**
   * Whether office staff (`User`) or a caregiver wrote the note. Set from the API key's user.
   *
   * @example "Caregiver"
   */
  authorType: VisitNoteAuthorType | null;
  /**
   * ID of the staff user or caregiver who wrote the note. Set from the API key's user.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  authorId: string | null;
  /**
   * When the visit note was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the visit note was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new visit note. Any other field is refused with `unknown_field`. */
export interface VisitNoteCreate {
  /**
   * The visit the note is about.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string;
  /**
   * The note.
   *
   * @example "Patient was in good spirits; ate a full lunch."
   */
  content: string;
}

/**
 * Fields to change on a visit note. Send only the fields to change; any other field is refused
 * with `unknown_field`. `visitId` is set when the visit note is created and cannot be changed
 * afterwards.
 */
export interface VisitNoteUpdate {
  /**
   * The note.
   *
   * @example "Patient was in good spirits; ate a full lunch."
   */
  content?: string;
}

/** Confirmation that a visit note was deleted. */
export interface VisitNoteDeleted {
  /**
   * Always `visit_note`.
   *
   * @example "visit_note"
   */
  object: "visit_note";
  /**
   * ID of the deleted visit note.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Requests from caregivers to pick up visits with a patient, which office staff approve or deny.
 * Every field is always present; a field with no value is `null`.
 */
export interface VisitRequest {
  /**
   * String representing the object's type. Always `visit_request`.
   *
   * @example "visit_request"
   */
  object: "visit_request";
  /**
   * Unique identifier of the visit request.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The caregiver asking for the visit. With a caregiver's API key this is always that caregiver
   * (leave it out); office staff must send it.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * Caregiver's display name, taken from the caregiver's record.
   *
   * @example "Rosa Jimenez"
   */
  caregiverName: string | null;
  /**
   * The patient the caregiver would visit.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * Patient's display name.
   *
   * @example "Margaret Alvarez"
   */
  patientName: string | null;
  /**
   * First date the caregiver could start.
   *
   * @example "2026-10-10"
   */
  preferredStartDate: string | null;
  /**
   * Last date of the request.
   *
   * @example "2026-10-31"
   */
  preferredEndDate: string | null;
  /**
   * Time of day the caregiver prefers.
   *
   * @example "Mornings"
   */
  preferredTimeOfDay: string | null;
  /**
   * Why the caregiver is asking.
   *
   * @example "I live nearby and have open mornings."
   */
  reason: string | null;
  /**
   * Where the request stands. A caregiver's key creates `Pending` requests and can only change its
   * own pending request to `Cancelled`; approving and denying is for office staff.
   *
   * @example "Pending"
   */
  status: VisitRequestStatus | null;
  /**
   * The office's reply. Set by office staff.
   *
   * @example null
   */
  adminResponse: string | null;
  /**
   * Who answered the request.
   *
   * @example null
   */
  respondedByName: string | null;
  /**
   * When the request was answered.
   *
   * @example null
   */
  respondedAt: string | null;
  /**
   * When the visit request was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the visit request was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new visit request. Any other field is refused with `unknown_field`. */
export interface VisitRequestCreate {
  /**
   * The caregiver asking for the visit. With a caregiver's API key this is always that caregiver
   * (leave it out); office staff must send it.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId?: string | null;
  /**
   * The patient the caregiver would visit.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId?: string | null;
  /**
   * Patient's display name.
   *
   * @example "Margaret Alvarez"
   */
  patientName?: string | null;
  /**
   * First date the caregiver could start.
   *
   * @example "2026-10-10"
   */
  preferredStartDate?: string | null;
  /**
   * Last date of the request.
   *
   * @example "2026-10-31"
   */
  preferredEndDate?: string | null;
  /**
   * Time of day the caregiver prefers.
   *
   * @example "Mornings"
   */
  preferredTimeOfDay?: string | null;
  /**
   * Why the caregiver is asking.
   *
   * @example "I live nearby and have open mornings."
   */
  reason?: string | null;
  /**
   * Where the request stands. A caregiver's key creates `Pending` requests and can only change its
   * own pending request to `Cancelled`; approving and denying is for office staff.
   *
   * @example "Pending"
   */
  status?: VisitRequestStatus | null;
  /**
   * The office's reply. Set by office staff.
   *
   * @example null
   */
  adminResponse?: string | null;
}

/**
 * Fields to change on a visit request. Send only the fields to change; any other field is refused
 * with `unknown_field`. `caregiverId` is set when the visit request is created and cannot be
 * changed afterwards.
 */
export interface VisitRequestUpdate {
  /**
   * The patient the caregiver would visit.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId?: string | null;
  /**
   * Patient's display name.
   *
   * @example "Margaret Alvarez"
   */
  patientName?: string | null;
  /**
   * First date the caregiver could start.
   *
   * @example "2026-10-10"
   */
  preferredStartDate?: string | null;
  /**
   * Last date of the request.
   *
   * @example "2026-10-31"
   */
  preferredEndDate?: string | null;
  /**
   * Time of day the caregiver prefers.
   *
   * @example "Mornings"
   */
  preferredTimeOfDay?: string | null;
  /**
   * Why the caregiver is asking.
   *
   * @example "I live nearby and have open mornings."
   */
  reason?: string | null;
  /**
   * Where the request stands. A caregiver's key creates `Pending` requests and can only change its
   * own pending request to `Cancelled`; approving and denying is for office staff.
   *
   * @example "Pending"
   */
  status?: VisitRequestStatus | null;
  /**
   * The office's reply. Set by office staff.
   *
   * @example null
   */
  adminResponse?: string | null;
}

/** Confirmation that a visit request was deleted. */
export interface VisitRequestDeleted {
  /**
   * Always `visit_request`.
   *
   * @example "visit_request"
   */
  object: "visit_request";
  /**
   * ID of the deleted visit request.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Open shifts are unassigned visits offered to caregivers so one of them can claim it. Every field
 * is always present; a field with no value is `null`.
 */
export interface OpenShift {
  /**
   * String representing the object's type. Always `open_shift`.
   *
   * @example "open_shift"
   */
  object: "open_shift";
  /**
   * Unique identifier of the open shift.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The unassigned visit being offered.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string | null;
  /**
   * When the shift was offered.
   *
   * @example "2026-10-05T13:00:00.000Z"
   */
  broadcastDate: string | null;
  /**
   * Whether the offer is still open.
   *
   * @example "Active"
   */
  status: OpenShiftStatus | null;
  /**
   * The caregiver who claimed the shift.
   *
   * @example null
   */
  acceptedBy: string | null;
  /**
   * When the open shift was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the open shift was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new open shift. Any other field is refused with `unknown_field`. */
export interface OpenShiftCreate {
  /**
   * The unassigned visit being offered.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string;
  /**
   * When the shift was offered.
   *
   * @example "2026-10-05T13:00:00.000Z"
   */
  broadcastDate?: string | null;
  /**
   * Whether the offer is still open.
   *
   * @example "Active"
   */
  status?: OpenShiftStatus | null;
}

/**
 * Fields to change on an open shift. Send only the fields to change; any other field is refused
 * with `unknown_field`. `visitId` is set when the open shift is created and cannot be changed
 * afterwards.
 */
export interface OpenShiftUpdate {
  /**
   * When the shift was offered.
   *
   * @example "2026-10-05T13:00:00.000Z"
   */
  broadcastDate?: string | null;
  /**
   * Whether the offer is still open.
   *
   * @example "Active"
   */
  status?: OpenShiftStatus | null;
}

/** Confirmation that an open shift was deleted. */
export interface OpenShiftDeleted {
  /**
   * Always `open_shift`.
   *
   * @example "open_shift"
   */
  object: "open_shift";
  /**
   * ID of the deleted open shift.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Requests from one caregiver to hand a visit to another, which the other caregiver and then the
 * office approve. Every field is always present; a field with no value is `null`.
 */
export interface ShiftSwap {
  /**
   * String representing the object's type. Always `shift_swap`.
   *
   * @example "shift_swap"
   */
  object: "shift_swap";
  /**
   * Unique identifier of the shift swap.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The visit to hand over.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string | null;
  /**
   * The caregiver giving up the visit. With a caregiver's API key this is always that caregiver
   * (leave it out), and the visit must be assigned to them; office staff must send it.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  requestingCaregiverId: string | null;
  /**
   * Display name of the requesting caregiver, taken from the caregiver's record.
   *
   * @example "Rosa Jimenez"
   */
  requestingCaregiverName: string | null;
  /**
   * The caregiver asked to take the visit.
   *
   * @example "8a1f5c3e-2b7d-4e90-b6c4-3d9e1a7f2c58"
   */
  targetCaregiverId: string | null;
  /**
   * Display name of the target caregiver.
   *
   * @example "Kim Park"
   */
  targetCaregiverName: string | null;
  /**
   * Why the swap is requested.
   *
   * @example "Family appointment that afternoon."
   */
  reason: string | null;
  /**
   * Where the swap stands. With a caregiver's key: new swaps are `Pending`; the asked caregiver
   * changes a `Pending` swap to `Accepted` or `Declined`; the requesting caregiver can change it
   * to `Cancelled`. `AdminApproved` and `AdminDenied` are for office staff.
   *
   * @example "Pending"
   */
  status: ShiftSwapStatus | null;
  /**
   * When the swap was requested.
   *
   * @example "2026-10-05T12:00:00.000Z"
   */
  requestDate: string | null;
  /**
   * When the target caregiver answered.
   *
   * @example null
   */
  responseDate: string | null;
  /**
   * When the office answered.
   *
   * @example null
   */
  adminResponseDate: string | null;
  /**
   * When the shift swap was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the shift swap was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new shift swap. Any other field is refused with `unknown_field`. */
export interface ShiftSwapCreate {
  /**
   * The visit to hand over.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string;
  /**
   * The caregiver giving up the visit. With a caregiver's API key this is always that caregiver
   * (leave it out), and the visit must be assigned to them; office staff must send it.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  requestingCaregiverId?: string | null;
  /**
   * The caregiver asked to take the visit.
   *
   * @example "8a1f5c3e-2b7d-4e90-b6c4-3d9e1a7f2c58"
   */
  targetCaregiverId?: string | null;
  /**
   * Display name of the target caregiver.
   *
   * @example "Kim Park"
   */
  targetCaregiverName?: string | null;
  /**
   * Why the swap is requested.
   *
   * @example "Family appointment that afternoon."
   */
  reason?: string | null;
  /**
   * Where the swap stands. With a caregiver's key: new swaps are `Pending`; the asked caregiver
   * changes a `Pending` swap to `Accepted` or `Declined`; the requesting caregiver can change it
   * to `Cancelled`. `AdminApproved` and `AdminDenied` are for office staff.
   *
   * @example "Pending"
   */
  status?: ShiftSwapStatus | null;
  /**
   * When the swap was requested.
   *
   * @example "2026-10-05T12:00:00.000Z"
   */
  requestDate?: string | null;
}

/**
 * Fields to change on a shift swap. Send only the fields to change; any other field is refused
 * with `unknown_field`. `visitId`, `requestingCaregiverId` are set when the shift swap is created
 * and cannot be changed afterwards.
 */
export interface ShiftSwapUpdate {
  /**
   * The caregiver asked to take the visit.
   *
   * @example "8a1f5c3e-2b7d-4e90-b6c4-3d9e1a7f2c58"
   */
  targetCaregiverId?: string | null;
  /**
   * Display name of the target caregiver.
   *
   * @example "Kim Park"
   */
  targetCaregiverName?: string | null;
  /**
   * Why the swap is requested.
   *
   * @example "Family appointment that afternoon."
   */
  reason?: string | null;
  /**
   * Where the swap stands. With a caregiver's key: new swaps are `Pending`; the asked caregiver
   * changes a `Pending` swap to `Accepted` or `Declined`; the requesting caregiver can change it
   * to `Cancelled`. `AdminApproved` and `AdminDenied` are for office staff.
   *
   * @example "Pending"
   */
  status?: ShiftSwapStatus | null;
  /**
   * When the swap was requested.
   *
   * @example "2026-10-05T12:00:00.000Z"
   */
  requestDate?: string | null;
}

/** Confirmation that a shift swap was deleted. */
export interface ShiftSwapDeleted {
  /**
   * Always `shift_swap`.
   *
   * @example "shift_swap"
   */
  object: "shift_swap";
  /**
   * ID of the deleted shift swap.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Care plans describe the services a patient receives, how often, and when the plan is next
 * reviewed. The plan's goals and task lists are managed in AveeCare and are not included here.
 * Every field is always present; a field with no value is `null`.
 */
export interface CarePlan {
  /**
   * String representing the object's type. Always `care_plan`.
   *
   * @example "care_plan"
   */
  object: "care_plan";
  /**
   * Unique identifier of the care plan.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient the plan is for.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * Plan title.
   *
   * @example "Personal care plan 2026"
   */
  title: string | null;
  /**
   * Where the plan is in its lifecycle.
   *
   * @example "Active"
   */
  status: CarePlanStatus | null;
  /**
   * Type of service the plan covers.
   *
   * @example "Personal care"
   */
  serviceType: string | null;
  /**
   * How often visits happen under the plan.
   *
   * @example "3 times a week, 4 hours"
   */
  frequency: string | null;
  /**
   * Date the plan takes effect.
   *
   * @example "2026-10-01"
   */
  startDate: string | null;
  /**
   * Date the plan ends; `null` if open-ended.
   *
   * @example null
   */
  endDate: string | null;
  /**
   * Date the plan is next due for review.
   *
   * @example "2027-01-01"
   */
  reviewDate: string | null;
  /**
   * Days between reviews.
   *
   * @example 90
   */
  reviewIntervalDays: number | null;
  /**
   * When the plan was last reviewed.
   *
   * @example "2026-10-01T18:00:00.000Z"
   */
  lastReviewedAt: string | null;
  /**
   * Who last reviewed the plan.
   *
   * @example "Jordan Lee, RN"
   */
  lastReviewedByName: string | null;
  /**
   * Who created the plan.
   *
   * @example "Jordan Lee, RN"
   */
  createdByName: string | null;
  /**
   * When the care plan was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the care plan was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new care plan. Any other field is refused with `unknown_field`. */
export interface CarePlanCreate {
  /**
   * The patient the plan is for.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string;
  /**
   * Plan title.
   *
   * @example "Personal care plan 2026"
   */
  title: string;
  /**
   * Where the plan is in its lifecycle.
   *
   * @example "Active"
   */
  status?: CarePlanStatus | null;
  /**
   * Type of service the plan covers.
   *
   * @example "Personal care"
   */
  serviceType?: string | null;
  /**
   * How often visits happen under the plan.
   *
   * @example "3 times a week, 4 hours"
   */
  frequency?: string | null;
  /**
   * Date the plan takes effect.
   *
   * @example "2026-10-01"
   */
  startDate?: string | null;
  /**
   * Date the plan ends; `null` if open-ended.
   *
   * @example null
   */
  endDate?: string | null;
  /**
   * Date the plan is next due for review.
   *
   * @example "2027-01-01"
   */
  reviewDate?: string | null;
  /**
   * Days between reviews.
   *
   * @example 90
   */
  reviewIntervalDays?: number | null;
}

/**
 * Fields to change on a care plan. Send only the fields to change; any other field is refused with
 * `unknown_field`. `patientId` is set when the care plan is created and cannot be changed
 * afterwards.
 */
export interface CarePlanUpdate {
  /**
   * Plan title.
   *
   * @example "Personal care plan 2026"
   */
  title?: string;
  /**
   * Where the plan is in its lifecycle.
   *
   * @example "Active"
   */
  status?: CarePlanStatus | null;
  /**
   * Type of service the plan covers.
   *
   * @example "Personal care"
   */
  serviceType?: string | null;
  /**
   * How often visits happen under the plan.
   *
   * @example "3 times a week, 4 hours"
   */
  frequency?: string | null;
  /**
   * Date the plan takes effect.
   *
   * @example "2026-10-01"
   */
  startDate?: string | null;
  /**
   * Date the plan ends; `null` if open-ended.
   *
   * @example null
   */
  endDate?: string | null;
  /**
   * Date the plan is next due for review.
   *
   * @example "2027-01-01"
   */
  reviewDate?: string | null;
  /**
   * Days between reviews.
   *
   * @example 90
   */
  reviewIntervalDays?: number | null;
}

/** Confirmation that a care plan was deleted. */
export interface CarePlanDeleted {
  /**
   * Always `care_plan`.
   *
   * @example "care_plan"
   */
  object: "care_plan";
  /**
   * ID of the deleted care plan.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Progress notes are the clinical summaries caregivers write after a visit. Every field is always
 * present; a field with no value is `null`.
 */
export interface ProgressNote {
  /**
   * String representing the object's type. Always `progress_note`.
   *
   * @example "progress_note"
   */
  object: "progress_note";
  /**
   * Unique identifier of the progress note.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The visit the note documents.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string | null;
  /**
   * The patient.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * The caregiver who wrote the note. With a caregiver's API key this is always that caregiver
   * (leave it out), and the visit must be assigned to them.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * Display name of the caregiver, taken from the caregiver's record.
   *
   * @example "Rosa Jimenez"
   */
  caregiverName: string | null;
  /**
   * The written summary of the visit.
   *
   * @example "Assisted with shower and dressing. Patient walked 15 minutes with walker; no falls."
   */
  summary: string | null;
  /**
   * Whether the summary was drafted with AI assistance.
   *
   * @example false
   */
  aiGenerated: boolean | null;
  /**
   * When the progress note was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the progress note was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new progress note. Any other field is refused with `unknown_field`. */
export interface ProgressNoteCreate {
  /**
   * The visit the note documents.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string;
  /**
   * The patient.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string;
  /**
   * The caregiver who wrote the note. With a caregiver's API key this is always that caregiver
   * (leave it out), and the visit must be assigned to them.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId?: string | null;
  /**
   * The written summary of the visit.
   *
   * @example "Assisted with shower and dressing. Patient walked 15 minutes with walker; no falls."
   */
  summary: string;
}

/**
 * Fields to change on a progress note. Send only the fields to change; any other field is refused
 * with `unknown_field`. `visitId`, `patientId`, `caregiverId` are set when the progress note is
 * created and cannot be changed afterwards.
 */
export interface ProgressNoteUpdate {
  /**
   * The written summary of the visit.
   *
   * @example "Assisted with shower and dressing. Patient walked 15 minutes with walker; no falls."
   */
  summary?: string;
}

/** Confirmation that a progress note was deleted. */
export interface ProgressNoteDeleted {
  /**
   * Always `progress_note`.
   *
   * @example "progress_note"
   */
  object: "progress_note";
  /**
   * ID of the deleted progress note.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Payer authorizations: how many units of a service a payer has approved for a patient, and over
 * what dates. Every field is always present; a field with no value is `null`.
 */
export interface Authorization {
  /**
   * String representing the object's type. Always `authorization`.
   *
   * @example "authorization"
   */
  object: "authorization";
  /**
   * Unique identifier of the authorization.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient the authorization covers.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * The payer that issued it.
   *
   * @example "Mercy Care"
   */
  payerName: string | null;
  /**
   * The payer's authorization number.
   *
   * @example "PA-2026-118842"
   */
  authorizationNumber: string | null;
  /**
   * Service authorized.
   *
   * @example "Attendant care"
   */
  serviceType: string | null;
  /**
   * Procedure (HCPCS) code billed against it.
   *
   * @example "S5125"
   */
  procedureCode: string | null;
  /**
   * Procedure code modifiers, comma separated.
   *
   * @example "U1"
   */
  modifiers: string | null;
  /**
   * First date the authorization covers.
   *
   * @example "2026-10-01"
   */
  startDate: string | null;
  /**
   * Last date the authorization covers.
   *
   * @example "2026-12-31"
   */
  endDate: string | null;
  /**
   * Units approved.
   *
   * @example 480
   */
  authorizedUnits: number | null;
  /**
   * What a unit is, in the payer's words.
   *
   * @example "15 minutes"
   */
  unitType: string | null;
  /**
   * Whether units count time, visits or days.
   *
   * @example "Time"
   */
  unitBasis: AuthorizationUnitBasis | null;
  /**
   * For time-based units, minutes in one unit.
   *
   * @example 15
   */
  minutesPerUnit: number | null;
  /**
   * Units used so far.
   *
   * @example 96
   */
  usedUnits: number | null;
  /**
   * Units left.
   *
   * @example 384
   */
  remainingUnits: number | null;
  /**
   * Frequency the payer approved.
   *
   * @example "20 hours per week"
   */
  frequency: string | null;
  /**
   * Place-of-service code.
   *
   * @example "12"
   */
  placeOfService: string | null;
  /**
   * Whether the authorization is in effect.
   *
   * @example "Active"
   */
  status: AuthorizationStatus | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes: string | null;
  /**
   * When the authorization was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the authorization was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new authorization. Any other field is refused with `unknown_field`. */
export interface AuthorizationCreate {
  /**
   * The patient the authorization covers.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string;
  /**
   * The payer that issued it.
   *
   * @example "Mercy Care"
   */
  payerName?: string | null;
  /**
   * The payer's authorization number.
   *
   * @example "PA-2026-118842"
   */
  authorizationNumber?: string | null;
  /**
   * Service authorized.
   *
   * @example "Attendant care"
   */
  serviceType?: string | null;
  /**
   * Procedure (HCPCS) code billed against it.
   *
   * @example "S5125"
   */
  procedureCode?: string | null;
  /**
   * Procedure code modifiers, comma separated.
   *
   * @example "U1"
   */
  modifiers?: string | null;
  /**
   * First date the authorization covers.
   *
   * @example "2026-10-01"
   */
  startDate?: string | null;
  /**
   * Last date the authorization covers.
   *
   * @example "2026-12-31"
   */
  endDate?: string | null;
  /**
   * Units approved.
   *
   * @example 480
   */
  authorizedUnits?: number | null;
  /**
   * What a unit is, in the payer's words.
   *
   * @example "15 minutes"
   */
  unitType?: string | null;
  /**
   * Whether units count time, visits or days.
   *
   * @example "Time"
   */
  unitBasis?: AuthorizationUnitBasis | null;
  /**
   * For time-based units, minutes in one unit.
   *
   * @example 15
   */
  minutesPerUnit?: number | null;
  /**
   * Frequency the payer approved.
   *
   * @example "20 hours per week"
   */
  frequency?: string | null;
  /**
   * Place-of-service code.
   *
   * @example "12"
   */
  placeOfService?: string | null;
  /**
   * Whether the authorization is in effect.
   *
   * @example "Active"
   */
  status?: AuthorizationStatus | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes?: string | null;
}

/**
 * Fields to change on an authorization. Send only the fields to change; any other field is refused
 * with `unknown_field`. `patientId` is set when the authorization is created and cannot be changed
 * afterwards.
 */
export interface AuthorizationUpdate {
  /**
   * The payer that issued it.
   *
   * @example "Mercy Care"
   */
  payerName?: string | null;
  /**
   * The payer's authorization number.
   *
   * @example "PA-2026-118842"
   */
  authorizationNumber?: string | null;
  /**
   * Service authorized.
   *
   * @example "Attendant care"
   */
  serviceType?: string | null;
  /**
   * Procedure (HCPCS) code billed against it.
   *
   * @example "S5125"
   */
  procedureCode?: string | null;
  /**
   * Procedure code modifiers, comma separated.
   *
   * @example "U1"
   */
  modifiers?: string | null;
  /**
   * First date the authorization covers.
   *
   * @example "2026-10-01"
   */
  startDate?: string | null;
  /**
   * Last date the authorization covers.
   *
   * @example "2026-12-31"
   */
  endDate?: string | null;
  /**
   * Units approved.
   *
   * @example 480
   */
  authorizedUnits?: number | null;
  /**
   * What a unit is, in the payer's words.
   *
   * @example "15 minutes"
   */
  unitType?: string | null;
  /**
   * Whether units count time, visits or days.
   *
   * @example "Time"
   */
  unitBasis?: AuthorizationUnitBasis | null;
  /**
   * For time-based units, minutes in one unit.
   *
   * @example 15
   */
  minutesPerUnit?: number | null;
  /**
   * Frequency the payer approved.
   *
   * @example "20 hours per week"
   */
  frequency?: string | null;
  /**
   * Place-of-service code.
   *
   * @example "12"
   */
  placeOfService?: string | null;
  /**
   * Whether the authorization is in effect.
   *
   * @example "Active"
   */
  status?: AuthorizationStatus | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes?: string | null;
}

/** Confirmation that an authorization was deleted. */
export interface AuthorizationDeleted {
  /**
   * Always `authorization`.
   *
   * @example "authorization"
   */
  object: "authorization";
  /**
   * ID of the deleted authorization.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Incident reports: falls, injuries, medication errors and other events that need follow-up, often
 * for regulatory reporting. Every field is always present; a field with no value is `null`.
 */
export interface Incident {
  /**
   * String representing the object's type. Always `incident`.
   *
   * @example "incident"
   */
  object: "incident";
  /**
   * Unique identifier of the incident.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Short summary.
   *
   * @example "Fall in bathroom"
   */
  title: string | null;
  /**
   * What happened.
   *
   * @example "Patient slipped stepping out of the shower; caregiver assisted to a chair."
   */
  description: string | null;
  /**
   * When the incident happened.
   *
   * @example "2026-10-04T16:20:00.000Z"
   */
  incidentDateTime: string | null;
  /**
   * Kind of incident.
   *
   * @example "Fall"
   */
  category: IncidentCategory | null;
  /**
   * How serious it was.
   *
   * @example "Medium"
   */
  severity: IncidentSeverity | null;
  /**
   * Where follow-up stands. New incidents start `Open`.
   *
   * @example "Open"
   */
  status: IncidentStatus | null;
  /**
   * The patient involved.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * The caregiver involved.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * The visit during which it happened.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string | null;
  /**
   * What was done at the time.
   *
   * @example "Checked for injury, called the office, notified daughter."
   */
  actionsTaken: string | null;
  /**
   * Body part injured, if any.
   *
   * @example "Left wrist"
   */
  injuryBodyPart: string | null;
  /**
   * Witness, if any.
   *
   * @example null
   */
  witnessName: string | null;
  /**
   * Whether 911 or other emergency services were called.
   *
   * @example false
   */
  emergencyServicesContacted: boolean | null;
  /**
   * Whether the patient went to hospital.
   *
   * @example false
   */
  hospitalTransport: boolean | null;
  /**
   * Hospital, if transported.
   *
   * @example null
   */
  hospitalName: string | null;
  /**
   * Whether the patient's physician was told.
   *
   * @example true
   */
  physicianNotified: boolean | null;
  /**
   * Whether family was told.
   *
   * @example true
   */
  familyNotified: boolean | null;
  /**
   * Whether the incident must be reported to a regulator.
   *
   * @example false
   */
  regulatoryReportRequired: boolean | null;
  /**
   * Whether follow-up is needed.
   *
   * @example true
   */
  followUpRequired: boolean | null;
  /**
   * When follow-up is due.
   *
   * @example "2026-10-06T16:00:00.000Z"
   */
  followUpDueAt: string | null;
  /**
   * Follow-up notes.
   *
   * @example null
   */
  followUpNotes: string | null;
  /**
   * Whether the incident is resolved.
   *
   * @example false
   */
  resolved: boolean | null;
  /**
   * How it was resolved.
   *
   * @example null
   */
  resolutionNotes: string | null;
  /**
   * Whether only administrators can see it.
   *
   * @example false
   */
  isConfidential: boolean | null;
  /**
   * Who reported it.
   *
   * @example "Rosa Jimenez"
   */
  reportedByName: string | null;
  /**
   * When it was reported.
   *
   * @example "2026-10-04T16:45:00.000Z"
   */
  reportedAt: string | null;
  /**
   * When it was resolved.
   *
   * @example null
   */
  resolvedAt: string | null;
  /**
   * When the incident was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the incident was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new incident. Any other field is refused with `unknown_field`. */
export interface IncidentCreate {
  /**
   * Short summary.
   *
   * @example "Fall in bathroom"
   */
  title: string;
  /**
   * What happened.
   *
   * @example "Patient slipped stepping out of the shower; caregiver assisted to a chair."
   */
  description?: string | null;
  /**
   * When the incident happened.
   *
   * @example "2026-10-04T16:20:00.000Z"
   */
  incidentDateTime?: string | null;
  /**
   * Kind of incident.
   *
   * @example "Fall"
   */
  category?: IncidentCategory | null;
  /**
   * How serious it was.
   *
   * @example "Medium"
   */
  severity?: IncidentSeverity | null;
  /**
   * Where follow-up stands. New incidents start `Open`. Only keys belonging to office staff can
   * set this.
   *
   * @example "Open"
   */
  status?: IncidentStatus | null;
  /**
   * The patient involved.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId?: string | null;
  /**
   * The caregiver involved.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId?: string | null;
  /**
   * The visit during which it happened.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId?: string | null;
  /**
   * What was done at the time.
   *
   * @example "Checked for injury, called the office, notified daughter."
   */
  actionsTaken?: string | null;
  /**
   * Body part injured, if any.
   *
   * @example "Left wrist"
   */
  injuryBodyPart?: string | null;
  /**
   * Witness, if any.
   *
   * @example null
   */
  witnessName?: string | null;
  /**
   * Whether 911 or other emergency services were called.
   *
   * @example false
   */
  emergencyServicesContacted?: boolean | null;
  /**
   * Whether the patient went to hospital.
   *
   * @example false
   */
  hospitalTransport?: boolean | null;
  /**
   * Hospital, if transported.
   *
   * @example null
   */
  hospitalName?: string | null;
  /**
   * Whether the patient's physician was told.
   *
   * @example true
   */
  physicianNotified?: boolean | null;
  /**
   * Whether family was told.
   *
   * @example true
   */
  familyNotified?: boolean | null;
  /**
   * Whether the incident must be reported to a regulator.
   *
   * @example false
   */
  regulatoryReportRequired?: boolean | null;
  /**
   * Whether follow-up is needed.
   *
   * @example true
   */
  followUpRequired?: boolean | null;
  /**
   * When follow-up is due. Only keys belonging to office staff can set this.
   *
   * @example "2026-10-06T16:00:00.000Z"
   */
  followUpDueAt?: string | null;
  /**
   * Follow-up notes.
   *
   * @example null
   */
  followUpNotes?: string | null;
  /**
   * Whether the incident is resolved. Only keys belonging to office staff can set this.
   *
   * @example false
   */
  resolved?: boolean | null;
  /**
   * How it was resolved. Only keys belonging to office staff can set this.
   *
   * @example null
   */
  resolutionNotes?: string | null;
  /**
   * Whether only administrators can see it. Only keys belonging to office staff can set this.
   *
   * @example false
   */
  isConfidential?: boolean | null;
}

/**
 * Fields to change on an incident. Send only the fields to change; any other field is refused with
 * `unknown_field`.
 */
export interface IncidentUpdate {
  /**
   * Short summary.
   *
   * @example "Fall in bathroom"
   */
  title?: string;
  /**
   * What happened.
   *
   * @example "Patient slipped stepping out of the shower; caregiver assisted to a chair."
   */
  description?: string | null;
  /**
   * When the incident happened.
   *
   * @example "2026-10-04T16:20:00.000Z"
   */
  incidentDateTime?: string | null;
  /**
   * Kind of incident.
   *
   * @example "Fall"
   */
  category?: IncidentCategory | null;
  /**
   * How serious it was.
   *
   * @example "Medium"
   */
  severity?: IncidentSeverity | null;
  /**
   * Where follow-up stands. New incidents start `Open`. Only keys belonging to office staff can
   * set this.
   *
   * @example "Open"
   */
  status?: IncidentStatus | null;
  /**
   * The patient involved.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId?: string | null;
  /**
   * The caregiver involved.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId?: string | null;
  /**
   * The visit during which it happened.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId?: string | null;
  /**
   * What was done at the time.
   *
   * @example "Checked for injury, called the office, notified daughter."
   */
  actionsTaken?: string | null;
  /**
   * Body part injured, if any.
   *
   * @example "Left wrist"
   */
  injuryBodyPart?: string | null;
  /**
   * Witness, if any.
   *
   * @example null
   */
  witnessName?: string | null;
  /**
   * Whether 911 or other emergency services were called.
   *
   * @example false
   */
  emergencyServicesContacted?: boolean | null;
  /**
   * Whether the patient went to hospital.
   *
   * @example false
   */
  hospitalTransport?: boolean | null;
  /**
   * Hospital, if transported.
   *
   * @example null
   */
  hospitalName?: string | null;
  /**
   * Whether the patient's physician was told.
   *
   * @example true
   */
  physicianNotified?: boolean | null;
  /**
   * Whether family was told.
   *
   * @example true
   */
  familyNotified?: boolean | null;
  /**
   * Whether the incident must be reported to a regulator.
   *
   * @example false
   */
  regulatoryReportRequired?: boolean | null;
  /**
   * Whether follow-up is needed.
   *
   * @example true
   */
  followUpRequired?: boolean | null;
  /**
   * When follow-up is due. Only keys belonging to office staff can set this.
   *
   * @example "2026-10-06T16:00:00.000Z"
   */
  followUpDueAt?: string | null;
  /**
   * Follow-up notes.
   *
   * @example null
   */
  followUpNotes?: string | null;
  /**
   * Whether the incident is resolved. Only keys belonging to office staff can set this.
   *
   * @example false
   */
  resolved?: boolean | null;
  /**
   * How it was resolved. Only keys belonging to office staff can set this.
   *
   * @example null
   */
  resolutionNotes?: string | null;
  /**
   * Whether only administrators can see it. Only keys belonging to office staff can set this.
   *
   * @example false
   */
  isConfidential?: boolean | null;
}

/** Confirmation that an incident was deleted. */
export interface IncidentDeleted {
  /**
   * Always `incident`.
   *
   * @example "incident"
   */
  object: "incident";
  /**
   * ID of the deleted incident.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Events your agency documents about a patient, caregiver or visit, such as a complaint, a
 * compliment or an attendance issue. Every field is always present; a field with no value is
 * `null`.
 */
export interface Event {
  /**
   * String representing the object's type. Always `event`.
   *
   * @example "event"
   */
  object: "event";
  /**
   * Unique identifier of the event.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Short summary.
   *
   * @example "Late arrival"
   */
  title: string | null;
  /**
   * What happened.
   *
   * @example "Caregiver arrived 40 minutes late without calling ahead."
   */
  description: string | null;
  /**
   * Category, as named in your agency's event types.
   *
   * @example "Attendance"
   */
  category: string | null;
  /**
   * How serious it was.
   *
   * @example "Low"
   */
  severity: IncidentSeverity | null;
  /**
   * Where follow-up stands.
   *
   * @example "Open"
   */
  status: IncidentStatus | null;
  /**
   * When it happened.
   *
   * @example "2026-10-03T14:40:00.000Z"
   */
  occurredAt: string | null;
  /**
   * The patient involved.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * The caregiver involved.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * The visit involved.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string | null;
  /**
   * Attendance points this event counts for, if your agency uses a points policy.
   *
   * @example 1
   */
  pointValue: number | null;
  /**
   * What was done.
   *
   * @example "Discussed with caregiver."
   */
  actionsTaken: string | null;
  /**
   * Outcome.
   *
   * @example null
   */
  outcome: string | null;
  /**
   * Whether follow-up is needed.
   *
   * @example false
   */
  followUpRequired: boolean | null;
  /**
   * When follow-up is due.
   *
   * @example null
   */
  followUpDueAt: string | null;
  /**
   * Follow-up notes.
   *
   * @example null
   */
  followUpNotes: string | null;
  /**
   * How it was resolved.
   *
   * @example null
   */
  resolutionNotes: string | null;
  /**
   * Whether only administrators can see it.
   *
   * @example false
   */
  isConfidential: boolean | null;
  /**
   * Who documented it.
   *
   * @example "Avery Chen"
   */
  reportedByName: string | null;
  /**
   * When it was documented.
   *
   * @example "2026-10-03T15:00:00.000Z"
   */
  reportedAt: string | null;
  /**
   * When it was resolved.
   *
   * @example null
   */
  resolvedAt: string | null;
  /**
   * When the event was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the event was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new event. Any other field is refused with `unknown_field`. */
export interface EventCreate {
  /**
   * Short summary.
   *
   * @example "Late arrival"
   */
  title: string;
  /**
   * What happened.
   *
   * @example "Caregiver arrived 40 minutes late without calling ahead."
   */
  description?: string | null;
  /**
   * Category, as named in your agency's event types.
   *
   * @example "Attendance"
   */
  category?: string | null;
  /**
   * How serious it was.
   *
   * @example "Low"
   */
  severity?: IncidentSeverity | null;
  /**
   * Where follow-up stands.
   *
   * @example "Open"
   */
  status?: IncidentStatus | null;
  /**
   * When it happened.
   *
   * @example "2026-10-03T14:40:00.000Z"
   */
  occurredAt?: string | null;
  /**
   * The patient involved.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId?: string | null;
  /**
   * The caregiver involved.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId?: string | null;
  /**
   * The visit involved.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId?: string | null;
  /**
   * Attendance points this event counts for, if your agency uses a points policy.
   *
   * @example 1
   */
  pointValue?: number | null;
  /**
   * What was done.
   *
   * @example "Discussed with caregiver."
   */
  actionsTaken?: string | null;
  /**
   * Outcome.
   *
   * @example null
   */
  outcome?: string | null;
  /**
   * Whether follow-up is needed.
   *
   * @example false
   */
  followUpRequired?: boolean | null;
  /**
   * When follow-up is due.
   *
   * @example null
   */
  followUpDueAt?: string | null;
  /**
   * Follow-up notes.
   *
   * @example null
   */
  followUpNotes?: string | null;
  /**
   * How it was resolved.
   *
   * @example null
   */
  resolutionNotes?: string | null;
  /**
   * Whether only administrators can see it.
   *
   * @example false
   */
  isConfidential?: boolean | null;
}

/**
 * Fields to change on an event. Send only the fields to change; any other field is refused with
 * `unknown_field`.
 */
export interface EventUpdate {
  /**
   * Short summary.
   *
   * @example "Late arrival"
   */
  title?: string;
  /**
   * What happened.
   *
   * @example "Caregiver arrived 40 minutes late without calling ahead."
   */
  description?: string | null;
  /**
   * Category, as named in your agency's event types.
   *
   * @example "Attendance"
   */
  category?: string | null;
  /**
   * How serious it was.
   *
   * @example "Low"
   */
  severity?: IncidentSeverity | null;
  /**
   * Where follow-up stands.
   *
   * @example "Open"
   */
  status?: IncidentStatus | null;
  /**
   * When it happened.
   *
   * @example "2026-10-03T14:40:00.000Z"
   */
  occurredAt?: string | null;
  /**
   * The patient involved.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId?: string | null;
  /**
   * The caregiver involved.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId?: string | null;
  /**
   * The visit involved.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId?: string | null;
  /**
   * Attendance points this event counts for, if your agency uses a points policy.
   *
   * @example 1
   */
  pointValue?: number | null;
  /**
   * What was done.
   *
   * @example "Discussed with caregiver."
   */
  actionsTaken?: string | null;
  /**
   * Outcome.
   *
   * @example null
   */
  outcome?: string | null;
  /**
   * Whether follow-up is needed.
   *
   * @example false
   */
  followUpRequired?: boolean | null;
  /**
   * When follow-up is due.
   *
   * @example null
   */
  followUpDueAt?: string | null;
  /**
   * Follow-up notes.
   *
   * @example null
   */
  followUpNotes?: string | null;
  /**
   * How it was resolved.
   *
   * @example null
   */
  resolutionNotes?: string | null;
  /**
   * Whether only administrators can see it.
   *
   * @example false
   */
  isConfidential?: boolean | null;
}

/** Confirmation that an event was deleted. */
export interface EventDeleted {
  /**
   * Always `event`.
   *
   * @example "event"
   */
  object: "event";
  /**
   * ID of the deleted event.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Hospitals, physicians, case managers and other organizations that refer clients to your agency.
 * Every field is always present; a field with no value is `null`.
 */
export interface ReferralSource {
  /**
   * String representing the object's type. Always `referral_source`.
   *
   * @example "referral_source"
   */
  object: "referral_source";
  /**
   * Unique identifier of the referral source.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Name of the source.
   *
   * @example "Banner Good Samaritan discharge planning"
   */
  name: string | null;
  /**
   * Kind of source, such as Hospital or Physician.
   *
   * @example "Hospital"
   */
  type: string | null;
  /**
   * Organization the contact works for.
   *
   * @example "Banner Health"
   */
  organization: string | null;
  /**
   * Main contact.
   *
   * @example "Priya Natarajan"
   */
  contactName: string | null;
  /**
   * Contact's job title.
   *
   * @example "Discharge planner"
   */
  contactTitle: string | null;
  /**
   * Contact's phone number.
   *
   * @example "+16025550188"
   */
  contactPhone: string | null;
  /**
   * Contact's email address.
   *
   * @example "priya.natarajan@example.com"
   */
  contactEmail: string | null;
  /**
   * Street address.
   *
   * @example "1111 E McDowell Rd"
   */
  address: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state: string | null;
  /**
   * ZIP code.
   *
   * @example "85006"
   */
  zipCode: string | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes: string | null;
  /**
   * Whether you still receive referrals from this source.
   *
   * @example true
   */
  isActive: boolean | null;
  /**
   * Referrals received from this source.
   *
   * @example 14
   */
  totalReferrals: number | null;
  /**
   * Referrals from this source that became clients.
   *
   * @example 9
   */
  totalConversions: number | null;
  /**
   * When the most recent referral arrived.
   *
   * @example "2026-09-29T19:30:00.000Z"
   */
  lastReferralDate: string | null;
  /**
   * When the referral source was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the referral source was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new referral source. Any other field is refused with `unknown_field`. */
export interface ReferralSourceCreate {
  /**
   * Name of the source.
   *
   * @example "Banner Good Samaritan discharge planning"
   */
  name: string;
  /**
   * Kind of source, such as Hospital or Physician.
   *
   * @example "Hospital"
   */
  type?: string | null;
  /**
   * Organization the contact works for.
   *
   * @example "Banner Health"
   */
  organization?: string | null;
  /**
   * Main contact.
   *
   * @example "Priya Natarajan"
   */
  contactName?: string | null;
  /**
   * Contact's job title.
   *
   * @example "Discharge planner"
   */
  contactTitle?: string | null;
  /**
   * Contact's phone number.
   *
   * @example "+16025550188"
   */
  contactPhone?: string | null;
  /**
   * Contact's email address.
   *
   * @example "priya.natarajan@example.com"
   */
  contactEmail?: string | null;
  /**
   * Street address.
   *
   * @example "1111 E McDowell Rd"
   */
  address?: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city?: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code.
   *
   * @example "85006"
   */
  zipCode?: string | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes?: string | null;
  /**
   * Whether you still receive referrals from this source.
   *
   * @example true
   */
  isActive?: boolean | null;
}

/**
 * Fields to change on a referral source. Send only the fields to change; any other field is
 * refused with `unknown_field`.
 */
export interface ReferralSourceUpdate {
  /**
   * Name of the source.
   *
   * @example "Banner Good Samaritan discharge planning"
   */
  name?: string;
  /**
   * Kind of source, such as Hospital or Physician.
   *
   * @example "Hospital"
   */
  type?: string | null;
  /**
   * Organization the contact works for.
   *
   * @example "Banner Health"
   */
  organization?: string | null;
  /**
   * Main contact.
   *
   * @example "Priya Natarajan"
   */
  contactName?: string | null;
  /**
   * Contact's job title.
   *
   * @example "Discharge planner"
   */
  contactTitle?: string | null;
  /**
   * Contact's phone number.
   *
   * @example "+16025550188"
   */
  contactPhone?: string | null;
  /**
   * Contact's email address.
   *
   * @example "priya.natarajan@example.com"
   */
  contactEmail?: string | null;
  /**
   * Street address.
   *
   * @example "1111 E McDowell Rd"
   */
  address?: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city?: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code.
   *
   * @example "85006"
   */
  zipCode?: string | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes?: string | null;
  /**
   * Whether you still receive referrals from this source.
   *
   * @example true
   */
  isActive?: boolean | null;
}

/** Confirmation that a referral source was deleted. */
export interface ReferralSourceDeleted {
  /**
   * Always `referral_source`.
   *
   * @example "referral_source"
   */
  object: "referral_source";
  /**
   * ID of the deleted referral source.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Individual referrals of a prospective client, tracked from first contact to admission. Every
 * field is always present; a field with no value is `null`.
 */
export interface Referral {
  /**
   * String representing the object's type. Always `referral`.
   *
   * @example "referral"
   */
  object: "referral";
  /**
   * Unique identifier of the referral.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Who made the referral.
   *
   * @example "9c3a1e7d-4b2f-4d86-a0c5-1e8f6b3d2a97"
   */
  referralSourceId: string | null;
  /**
   * The patient record, once one exists.
   *
   * @example null
   */
  patientId: string | null;
  /**
   * Name of the person referred.
   *
   * @example "Harold Becker"
   */
  patientName: string | null;
  /**
   * Phone number to reach the person or their family.
   *
   * @example "+16025550164"
   */
  contactPhone: string | null;
  /**
   * Email address to reach the person or their family.
   *
   * @example null
   */
  contactEmail: string | null;
  /**
   * When the referral arrived.
   *
   * @example "2026-10-02T17:10:00.000Z"
   */
  referralDate: string | null;
  /**
   * Where the referral stands.
   *
   * @example "Contacted"
   */
  status: ReferralStatus | null;
  /**
   * Care the person is expected to need.
   *
   * @example "Help with bathing and meals after hip surgery."
   */
  estimatedCareNeeds: string | null;
  /**
   * Expected hours of care per week.
   *
   * @example 20
   */
  estimatedWeeklyHours: number | null;
  /**
   * How soon care is needed.
   *
   * @example "High"
   */
  urgencyLevel: string | null;
  /**
   * Why the referral was declined or lost.
   *
   * @example null
   */
  declineReason: string | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes: string | null;
  /**
   * When the person was admitted as a client.
   *
   * @example null
   */
  convertedDate: string | null;
  /**
   * When the referral was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the referral was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new referral. Any other field is refused with `unknown_field`. */
export interface ReferralCreate {
  /**
   * Who made the referral.
   *
   * @example "9c3a1e7d-4b2f-4d86-a0c5-1e8f6b3d2a97"
   */
  referralSourceId?: string | null;
  /**
   * The patient record, once one exists.
   *
   * @example null
   */
  patientId?: string | null;
  /**
   * Name of the person referred.
   *
   * @example "Harold Becker"
   */
  patientName: string;
  /**
   * Phone number to reach the person or their family.
   *
   * @example "+16025550164"
   */
  contactPhone?: string | null;
  /**
   * Email address to reach the person or their family.
   *
   * @example null
   */
  contactEmail?: string | null;
  /**
   * When the referral arrived.
   *
   * @example "2026-10-02T17:10:00.000Z"
   */
  referralDate?: string | null;
  /**
   * Where the referral stands.
   *
   * @example "Contacted"
   */
  status?: ReferralStatus | null;
  /**
   * Care the person is expected to need.
   *
   * @example "Help with bathing and meals after hip surgery."
   */
  estimatedCareNeeds?: string | null;
  /**
   * Expected hours of care per week.
   *
   * @example 20
   */
  estimatedWeeklyHours?: number | null;
  /**
   * How soon care is needed.
   *
   * @example "High"
   */
  urgencyLevel?: string | null;
  /**
   * Why the referral was declined or lost.
   *
   * @example null
   */
  declineReason?: string | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes?: string | null;
}

/**
 * Fields to change on a referral. Send only the fields to change; any other field is refused with
 * `unknown_field`.
 */
export interface ReferralUpdate {
  /**
   * Who made the referral.
   *
   * @example "9c3a1e7d-4b2f-4d86-a0c5-1e8f6b3d2a97"
   */
  referralSourceId?: string | null;
  /**
   * The patient record, once one exists.
   *
   * @example null
   */
  patientId?: string | null;
  /**
   * Name of the person referred.
   *
   * @example "Harold Becker"
   */
  patientName?: string;
  /**
   * Phone number to reach the person or their family.
   *
   * @example "+16025550164"
   */
  contactPhone?: string | null;
  /**
   * Email address to reach the person or their family.
   *
   * @example null
   */
  contactEmail?: string | null;
  /**
   * When the referral arrived.
   *
   * @example "2026-10-02T17:10:00.000Z"
   */
  referralDate?: string | null;
  /**
   * Where the referral stands.
   *
   * @example "Contacted"
   */
  status?: ReferralStatus | null;
  /**
   * Care the person is expected to need.
   *
   * @example "Help with bathing and meals after hip surgery."
   */
  estimatedCareNeeds?: string | null;
  /**
   * Expected hours of care per week.
   *
   * @example 20
   */
  estimatedWeeklyHours?: number | null;
  /**
   * How soon care is needed.
   *
   * @example "High"
   */
  urgencyLevel?: string | null;
  /**
   * Why the referral was declined or lost.
   *
   * @example null
   */
  declineReason?: string | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes?: string | null;
}

/** Confirmation that a referral was deleted. */
export interface ReferralDeleted {
  /**
   * Always `referral`.
   *
   * @example "referral"
   */
  object: "referral";
  /**
   * ID of the deleted referral.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Invoices billed to patients and their families for private-pay care. Read-only. Every field is
 * always present; a field with no value is `null`.
 */
export interface Invoice {
  /**
   * String representing the object's type. Always `invoice`.
   *
   * @example "invoice"
   */
  object: "invoice";
  /**
   * Unique identifier of the invoice.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Invoice number shown to the patient.
   *
   * @example "INV-01042"
   */
  invoiceNumber: string | null;
  /**
   * The patient billed.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * Payment status.
   *
   * @example "Pending"
   */
  status: InvoiceStatus | null;
  /**
   * Date of the invoice.
   *
   * @example "2026-10-01"
   */
  invoiceDate: string | null;
  /**
   * Date payment is due.
   *
   * @example "2026-10-15"
   */
  dueDate: string | null;
  /**
   * First day of service billed.
   *
   * @example "2026-09-16"
   */
  periodStart: string | null;
  /**
   * Last day of service billed.
   *
   * @example "2026-09-30"
   */
  periodEnd: string | null;
  /**
   * Description shown on the invoice.
   *
   * @example "Home care services, Sept 16-30"
   */
  description: string | null;
  /**
   * Three-letter currency code.
   *
   * @example "USD"
   */
  currency: string | null;
  /**
   * Total before tax, discounts and credits. In cents.
   *
   * @example 96000
   */
  subtotalCents: number | null;
  /**
   * Tax. In cents.
   *
   * @example 0
   */
  taxCents: number | null;
  /**
   * Discounts applied. In cents.
   *
   * @example 0
   */
  discountCents: number | null;
  /**
   * Account credit applied. In cents.
   *
   * @example 0
   */
  creditAppliedCents: number | null;
  /**
   * Invoice total. In cents.
   *
   * @example 96000
   */
  totalCents: number | null;
  /**
   * Amount paid so far. In cents.
   *
   * @example 0
   */
  amountPaidCents: number | null;
  /**
   * Amount still owed. In cents.
   *
   * @example 96000
   */
  amountDueCents: number | null;
  /**
   * Visits billed on this invoice.
   *
   * @example ["5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"]
   */
  visitIds: string[] | null;
  /**
   * Whether AveeCare created the invoice automatically when a visit was completed.
   *
   * @example false
   */
  isAutoBilled: boolean | null;
  /**
   * When the invoice was sent.
   *
   * @example "2026-10-01T15:00:00.000Z"
   */
  sentAt: string | null;
  /**
   * When the invoice was paid in full.
   *
   * @example null
   */
  paidDate: string | null;
  /**
   * When the invoice was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the invoice was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/**
 * The individual charges on an invoice. Read-only. Every field is always present; a field with no
 * value is `null`.
 */
export interface InvoiceLineItem {
  /**
   * String representing the object's type. Always `invoice_line_item`.
   *
   * @example "invoice_line_item"
   */
  object: "invoice_line_item";
  /**
   * Unique identifier of the invoice line item.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The invoice this line belongs to.
   *
   * @example "7d2f9b4c-1e6a-4c83-9f05-b8a3e2d1c6f7"
   */
  invoiceId: string | null;
  /**
   * Line description.
   *
   * @example "Personal care, 4 hours"
   */
  description: string | null;
  /**
   * Quantity, such as hours.
   *
   * @example 4
   */
  quantity: number | null;
  /**
   * Price per unit. In cents.
   *
   * @example 3200
   */
  unitPriceCents: number | null;
  /**
   * Line total. In cents.
   *
   * @example 12800
   */
  totalCents: number | null;
  /**
   * Service code.
   *
   * @example "S5125"
   */
  serviceCode: string | null;
  /**
   * Service category.
   *
   * @example "Personal care"
   */
  serviceCategory: string | null;
  /**
   * The visit this line bills.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string | null;
  /**
   * Date of the visit.
   *
   * @example "2026-09-18"
   */
  visitDate: string | null;
  /**
   * Position of the line on the invoice.
   *
   * @example 1
   */
  sortOrder: number | null;
  /**
   * When the invoice line item was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the invoice line item was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/**
 * Insurance claims billed to Medicaid, Medicare and other payers, with their adjudication status.
 * Read-only. Every field is always present; a field with no value is `null`.
 */
export interface Claim {
  /**
   * String representing the object's type. Always `claim`.
   *
   * @example "claim"
   */
  object: "claim";
  /**
   * Unique identifier of the claim.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The patient the claim is for.
   *
   * @example "3f6c2a9e-8b1d-4e7a-9c55-2d0e7b41a6f3"
   */
  patientId: string | null;
  /**
   * The caregiver who provided the service.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * The visit billed, for single-visit claims.
   *
   * @example "5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"
   */
  visitId: string | null;
  /**
   * The related invoice, if any.
   *
   * @example null
   */
  invoiceId: string | null;
  /**
   * Your claim number.
   *
   * @example "CLM-2026-00381"
   */
  claimNumber: string | null;
  /**
   * Claim format: professional (837P) or institutional (837I).
   *
   * @example "Professional837P"
   */
  claimType: ClaimClaimType | null;
  /**
   * The payer billed.
   *
   * @example "Mercy Care"
   */
  payerName: string | null;
  /**
   * The payer's electronic payer ID.
   *
   * @example "86052"
   */
  payerId: string | null;
  /**
   * First date of service, as `YYYY-MM-DD`.
   *
   * @example "2026-09-01"
   */
  serviceDateStart: string | null;
  /**
   * Last date of service, as `YYYY-MM-DD`.
   *
   * @example "2026-09-30"
   */
  serviceDateEnd: string | null;
  /**
   * Total billed. In cents.
   *
   * @example 153600
   */
  totalChargeAmountCents: number | null;
  /**
   * Where the claim is in adjudication.
   *
   * @example "Accepted"
   */
  status: ClaimStatus | null;
  /**
   * Latest status detail from the payer or clearinghouse.
   *
   * @example null
   */
  statusMessage: string | null;
  /**
   * When the status last changed, ISO 8601.
   *
   * @example "2026-10-03T12:00:00.000Z"
   */
  statusUpdatedAt: string | null;
  /**
   * Amount the payer paid. In cents.
   *
   * @example null
   */
  paidAmountCents: number | null;
  /**
   * Amount the patient owes after the payer. In cents.
   *
   * @example null
   */
  patientResponsibilityCents: number | null;
  /**
   * Authorization number sent on the claim.
   *
   * @example "PA-2026-118842"
   */
  priorAuthNumber: string | null;
  /**
   * Payment check or EFT trace number.
   *
   * @example null
   */
  checkNumber: string | null;
  /**
   * When the claim was submitted, ISO 8601.
   *
   * @example "2026-10-01T16:30:00.000Z"
   */
  submittedAt: string | null;
  /**
   * When the claim was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the claim was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/**
 * One caregiver's hours and pay for one pay period. Read-only. Every field is always present; a
 * field with no value is `null`.
 */
export interface PayrollEntry {
  /**
   * String representing the object's type. Always `payroll_entry`.
   *
   * @example "payroll_entry"
   */
  object: "payroll_entry";
  /**
   * Unique identifier of the payroll entry.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The caregiver paid.
   *
   * @example "c4e1a8b2-7d3f-4c69-9b0e-5a2f8d6c1e43"
   */
  caregiverId: string | null;
  /**
   * First day of the pay period.
   *
   * @example "2026-09-16"
   */
  payPeriodStart: string | null;
  /**
   * Last day of the pay period.
   *
   * @example "2026-09-30"
   */
  payPeriodEnd: string | null;
  /**
   * Where the entry is in your payroll process.
   *
   * @example "Approved"
   */
  status: PayrollEntryStatus | null;
  /**
   * Regular hours.
   *
   * @example 72
   */
  regularHours: number | null;
  /**
   * Overtime hours.
   *
   * @example 4.5
   */
  overtimeHours: number | null;
  /**
   * Holiday hours.
   *
   * @example 0
   */
  holidayHours: number | null;
  /**
   * Paid time off hours.
   *
   * @example 0
   */
  ptoHours: number | null;
  /**
   * Sick leave hours.
   *
   * @example 0
   */
  sickLeaveHours: number | null;
  /**
   * Gross pay. In cents.
   *
   * @example 158400
   */
  grossPayCents: number | null;
  /**
   * Total deductions. In cents.
   *
   * @example 0
   */
  deductionsCents: number | null;
  /**
   * Net pay. In cents.
   *
   * @example 158400
   */
  netPayCents: number | null;
  /**
   * Mileage reimbursement. In cents.
   *
   * @example 4200
   */
  mileageCents: number | null;
  /**
   * Visits in the pay period.
   *
   * @example 18
   */
  visitCount: number | null;
  /**
   * Visits paid on this entry.
   *
   * @example ["5e8a2c7b-9d1f-4b36-a4e2-6c0d8f3b1a75"]
   */
  visitIds: string[] | null;
  /**
   * How the caregiver is paid.
   *
   * @example "DirectDeposit"
   */
  paymentMethod: PayrollEntryPaymentMethod | null;
  /**
   * Who approved the entry.
   *
   * @example "Avery Chen"
   */
  approvedByName: string | null;
  /**
   * When it was approved.
   *
   * @example "2026-10-01T18:00:00.000Z"
   */
  approvedAt: string | null;
  /**
   * When it was paid.
   *
   * @example null
   */
  paidAt: string | null;
  /**
   * Notes.
   *
   * @example null
   */
  notes: string | null;
  /**
   * When the payroll entry was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the payroll entry was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/**
 * In-app message threads between people at your agency: one-to-one chats and named group chats.
 * Read-only; start conversations in AveeCare. Every field is always present; a field with no value
 * is `null`.
 */
export interface Conversation {
  /**
   * String representing the object's type. Always `conversation`.
   *
   * @example "conversation"
   */
  object: "conversation";
  /**
   * Unique identifier of the conversation.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * User IDs of everyone in the conversation.
   *
   * @example ["d2b7e9a4-1c3f-4e58-b6a0-8f4c2e1d7b39","f8a3c5e1-9b7d-4c20-a6e8-2d4f1b9c7e05"]
   */
  participantIds: string[] | null;
  /**
   * Whether this is a group chat.
   *
   * @example false
   */
  isGroup: boolean | null;
  /**
   * Group chat name; `null` for one-to-one chats.
   *
   * @example null
   */
  title: string | null;
  /**
   * When the most recent message was sent.
   *
   * @example "2026-10-05T14:02:00.000Z"
   */
  lastMessageTime: string | null;
  /**
   * Preview of the most recent message.
   *
   * @example "See you at 9 tomorrow."
   */
  lastMessageContent: string | null;
  /**
   * User ID of whoever sent the most recent message.
   *
   * @example "d2b7e9a4-1c3f-4e58-b6a0-8f4c2e1d7b39"
   */
  lastMessageSenderId: string | null;
  /**
   * When the conversation was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the conversation was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/**
 * Messages in a conversation. Messages you send through the API are sent as the API key's user.
 * Every field is always present; a field with no value is `null`.
 */
export interface Message {
  /**
   * String representing the object's type. Always `message`.
   *
   * @example "message"
   */
  object: "message";
  /**
   * Unique identifier of the message.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * The conversation the message belongs to.
   *
   * @example "e3c7a1f9-6d2b-4a58-8e14-0b9f5c2d7a36"
   */
  conversationId: string | null;
  /**
   * Message text.
   *
   * @example "See you at 9 tomorrow."
   */
  content: string | null;
  /**
   * User ID of the sender. Set to the API key's user.
   *
   * @example "d2b7e9a4-1c3f-4e58-b6a0-8f4c2e1d7b39"
   */
  senderId: string | null;
  /**
   * When the message was sent.
   *
   * @example "2026-10-05T14:02:00.000Z"
   */
  sentAt: string | null;
  /**
   * When the message was last edited.
   *
   * @example null
   */
  editedAt: string | null;
  /**
   * Whether the sender deleted the message. Deleted messages keep their place in the thread.
   *
   * @example false
   */
  isDeleted: boolean | null;
  /**
   * When the message was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the message was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new message. Any other field is refused with `unknown_field`. */
export interface MessageCreate {
  /**
   * The conversation the message belongs to.
   *
   * @example "e3c7a1f9-6d2b-4a58-8e14-0b9f5c2d7a36"
   */
  conversationId: string;
  /**
   * Message text.
   *
   * @example "See you at 9 tomorrow."
   */
  content: string;
}

/**
 * Alerts on your agency's alert board, such as a credential about to expire or a missed clock-in,
 * and announcements staff post for caregivers. Every field is always present; a field with no
 * value is `null`.
 */
export interface Alert {
  /**
   * String representing the object's type. Always `alert`.
   *
   * @example "alert"
   */
  object: "alert";
  /**
   * Unique identifier of the alert.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Headline.
   *
   * @example "Office closed Monday"
   */
  name: string | null;
  /**
   * Details.
   *
   * @example "The office is closed for the holiday. Visits go ahead as scheduled."
   */
  description: string | null;
  /**
   * How prominently the alert is shown.
   *
   * @example "Notice"
   */
  type: AlertType | null;
  /**
   * Who sees the alert. `Caregiver`, `Patient`, `Visit` and `PatientCareTeam` need
   * `audienceTargetId`.
   *
   * @example "CompanyWide"
   */
  audience: AlertAudience | null;
  /**
   * The caregiver, patient or visit the alert is for, when the audience names one.
   *
   * @example null
   */
  audienceTargetId: string | null;
  /**
   * When the alert takes effect.
   *
   * @example "2026-10-05T13:00:00.000Z"
   */
  time: string | null;
  /**
   * When the alert should be reviewed or cleared.
   *
   * @example null
   */
  reviewDate: string | null;
  /**
   * When the alert was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the alert was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new alert. Any other field is refused with `unknown_field`. */
export interface AlertCreate {
  /**
   * Headline.
   *
   * @example "Office closed Monday"
   */
  name: string;
  /**
   * Details.
   *
   * @example "The office is closed for the holiday. Visits go ahead as scheduled."
   */
  description?: string | null;
  /**
   * How prominently the alert is shown.
   *
   * @example "Notice"
   */
  type?: AlertType | null;
  /**
   * Who sees the alert. `Caregiver`, `Patient`, `Visit` and `PatientCareTeam` need
   * `audienceTargetId`.
   *
   * @example "CompanyWide"
   */
  audience?: AlertAudience | null;
  /**
   * The caregiver, patient or visit the alert is for, when the audience names one.
   *
   * @example null
   */
  audienceTargetId?: string | null;
  /**
   * When the alert takes effect.
   *
   * @example "2026-10-05T13:00:00.000Z"
   */
  time?: string | null;
  /**
   * When the alert should be reviewed or cleared.
   *
   * @example null
   */
  reviewDate?: string | null;
}

/**
 * Fields to change on an alert. Send only the fields to change; any other field is refused with
 * `unknown_field`. `time` is set when the alert is created and cannot be changed afterwards.
 */
export interface AlertUpdate {
  /**
   * Headline.
   *
   * @example "Office closed Monday"
   */
  name?: string;
  /**
   * Details.
   *
   * @example "The office is closed for the holiday. Visits go ahead as scheduled."
   */
  description?: string | null;
  /**
   * How prominently the alert is shown.
   *
   * @example "Notice"
   */
  type?: AlertType | null;
  /**
   * Who sees the alert. `Caregiver`, `Patient`, `Visit` and `PatientCareTeam` need
   * `audienceTargetId`.
   *
   * @example "CompanyWide"
   */
  audience?: AlertAudience | null;
  /**
   * The caregiver, patient or visit the alert is for, when the audience names one.
   *
   * @example null
   */
  audienceTargetId?: string | null;
  /**
   * When the alert should be reviewed or cleared.
   *
   * @example null
   */
  reviewDate?: string | null;
}

/** Confirmation that an alert was deleted. */
export interface AlertDeleted {
  /**
   * Always `alert`.
   *
   * @example "alert"
   */
  object: "alert";
  /**
   * ID of the deleted alert.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/**
 * Your agency's offices (branches). Patients, caregivers and applicants can each belong to one
 * office. There is always exactly one default office. Every field is always present; a field with
 * no value is `null`.
 */
export interface Office {
  /**
   * String representing the object's type. Always `office`.
   *
   * @example "office"
   */
  object: "office";
  /**
   * Unique identifier of the office.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Office name.
   *
   * @example "Phoenix Central"
   */
  name: string | null;
  /**
   * Street address.
   *
   * @example "3300 N Central Ave, Suite 400"
   */
  address: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state: string | null;
  /**
   * ZIP code.
   *
   * @example "85012"
   */
  zipCode: string | null;
  /**
   * Main phone number.
   *
   * @example "+16025550100"
   */
  phone: string | null;
  /**
   * Whether this is the default office. Making another office the default clears this one.
   *
   * @example true
   */
  isDefault: boolean | null;
  /**
   * When the office was created.
   *
   * @example "2026-10-01T16:04:12.000Z"
   */
  createdAt: string | null;
  /**
   * When the office was last changed.
   *
   * @example "2026-10-03T09:30:00.000Z"
   */
  updatedAt: string | null;
}

/** Fields for a new office. Any other field is refused with `unknown_field`. */
export interface OfficeCreate {
  /**
   * Office name.
   *
   * @example "Phoenix Central"
   */
  name: string;
  /**
   * Street address.
   *
   * @example "3300 N Central Ave, Suite 400"
   */
  address?: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city?: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code.
   *
   * @example "85012"
   */
  zipCode?: string | null;
  /**
   * Main phone number.
   *
   * @example "+16025550100"
   */
  phone?: string | null;
  /**
   * Whether this is the default office. Making another office the default clears this one.
   *
   * @example true
   */
  isDefault?: boolean | null;
}

/**
 * Fields to change on an office. Send only the fields to change; any other field is refused with
 * `unknown_field`.
 */
export interface OfficeUpdate {
  /**
   * Office name.
   *
   * @example "Phoenix Central"
   */
  name?: string;
  /**
   * Street address.
   *
   * @example "3300 N Central Ave, Suite 400"
   */
  address?: string | null;
  /**
   * City.
   *
   * @example "Phoenix"
   */
  city?: string | null;
  /**
   * State, as a two-letter code.
   *
   * @example "AZ"
   */
  state?: string | null;
  /**
   * ZIP code.
   *
   * @example "85012"
   */
  zipCode?: string | null;
  /**
   * Main phone number.
   *
   * @example "+16025550100"
   */
  phone?: string | null;
  /**
   * Whether this is the default office. Making another office the default clears this one.
   *
   * @example true
   */
  isDefault?: boolean | null;
}

/** Confirmation that an office was deleted. */
export interface OfficeDeleted {
  /**
   * Always `office`.
   *
   * @example "office"
   */
  object: "office";
  /**
   * ID of the deleted office.
   *
   * @example "9b2e4c71-5d3a-4f08-8e6b-1a7c3d9f2e40"
   */
  id: string;
  /**
   * Always `true`.
   *
   * @example true
   */
  deleted: true;
}

/** The API key making the request. */
export interface Me {
  /**
   * Always `me`.
   *
   * @example "me"
   */
  object: "me";
  /**
   * The key's public identifier: the part of the key between `ak_` and the second underscore.
   *
   * @example "Xk3mP9qR2tLw"
   */
  id: string;
  /**
   * The name given to the key when it was created.
   *
   * @example "Payroll export"
   */
  name: string | null;
  /**
   * What the key may do. A key without `write` can only read.
   *
   * @example ["read","write"]
   */
  scopes: MeScope[];
  /**
   * Role of the person the key belongs to: `RootUser` (agency administrator), `User` (office
   * staff), `Caregiver` or `Patient`. It decides which resources the key can reach.
   *
   * @example "RootUser"
   */
  role: MeRole;
  /**
   * Email address of the person the key belongs to.
   *
   * @example "avery@sunrisehomecare.example"
   */
  email: string;
  /**
   * When the key stops working.
   *
   * @example "2027-10-05T00:00:00.000Z"
   */
  expiresAt: string;
  /** The agency the key belongs to. */
  organization: MeOrganization;
}

/** The agency the key belongs to. */
export interface MeOrganization {
  /**
   * ID of the agency.
   *
   * @example "0d6c1f2a-3b4e-4c5d-9e8f-7a6b5c4d3e2f"
   */
  id: string;
  /**
   * Agency name.
   *
   * @example "AveeCare Demo Agency"
   */
  name: string | null;
}

/** Query parameters for `patients.list`. */
export interface PatientListParams {
  /** Only return patients with this status. */
  status?: string;
  /** Only return active (`true`) or inactive (`false`) patients. */
  active?: boolean;
  /** Only return prospects or clients. */
  lifecycleStage?: PatientLifecycleStage;
  /** Only return patients served by this office. */
  officeId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `contacts.list`. */
export interface ContactListParams {
  /** Only return contacts of this patient. */
  patientId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `allergies.list`. */
export interface AllergyListParams {
  /** Only return allergies of this patient. */
  patientId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `medications.list`. */
export interface MedicationListParams {
  /** Only return medications of this patient. */
  patientId?: string;
  /** Only return medications with this status. */
  status?: MedicationStatus;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `careGoals.list`. */
export interface CareGoalListParams {
  /** Only return goals of this patient. */
  patientId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `patientNotes.list`. */
export interface PatientNoteListParams {
  /** Only return notes about this patient. */
  patientId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `medicationAdministrations.list`. */
export interface MedicationAdministrationListParams {
  /** Only return doses for this patient. */
  patientId?: string;
  /** Only return doses of this medication. */
  medicationId?: string;
  /** Only return doses due on this date. */
  scheduledDate?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `oasisAssessments.list`. */
export interface OasisAssessmentListParams {
  /** Only return assessments of this patient. */
  patientId?: string;
  /** Only return assessments with this status. */
  status?: OasisAssessmentStatus;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `caregivers.list`. */
export interface CaregiverListParams {
  /** Only return caregivers with this employment status. */
  status?: CaregiverStatus;
  /** Only return caregivers who can (`true`) or cannot (`false`) be scheduled. */
  active?: boolean;
  /** Only return caregivers from this office. */
  officeId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `caregiverNotes.list`. */
export interface CaregiverNoteListParams {
  /** Only return notes about this caregiver. */
  caregiverId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `certifications.list`. */
export interface CertificationListParams {
  /** Only return certifications of this caregiver. */
  caregiverId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `availability.list`. */
export interface AvailabilityListParams {
  /** Only return windows of this caregiver. */
  caregiverId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `specializations.list`. */
export interface SpecializationListParams {
  /** Only return specializations of this caregiver. */
  caregiverId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `applicants.list`. */
export interface ApplicantListParams {
  /** Only return applicants in this hiring stage. */
  stage?: string;
  /** Only return applicants to this office. */
  officeId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `visits.list`. */
export interface VisitListParams {
  /**
   * Start of the window (inclusive), ISO 8601 with a time zone. Visits are listed by scheduled
   * start. Both `start_from` and `start_to` are required, and the window can be at most 93 days.
   */
  startFrom: string;
  /** End of the window (exclusive), ISO 8601 with a time zone. At most 93 days after `start_from`. */
  startTo: string;
  /** Only return visits for this patient. */
  patientId?: string;
  /** Only return visits assigned to this caregiver. */
  caregiverId?: string;
  /** Only return visits with this status. */
  status?: VisitStatus;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `visitNotes.list`. */
export interface VisitNoteListParams {
  /** Only return notes about this visit. */
  visitId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `visitRequests.list`. */
export interface VisitRequestListParams {
  /** Only return requests from this caregiver. */
  caregiverId?: string;
  /** Only return requests with this status. */
  status?: VisitRequestStatus;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `openShifts.list`. */
export interface OpenShiftListParams {
  /** Only return offers with this status. */
  status?: OpenShiftStatus;
  /** Only return offers for this visit. */
  visitId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `shiftSwaps.list`. */
export interface ShiftSwapListParams {
  /** Only return swaps with this status. */
  status?: ShiftSwapStatus;
  /** Only return swaps for this visit. */
  visitId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `carePlans.list`. */
export interface CarePlanListParams {
  /** Only return plans for this patient. */
  patientId?: string;
  /** Only return plans with this status. */
  status?: CarePlanStatus;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `progressNotes.list`. */
export interface ProgressNoteListParams {
  /** Only return notes for this patient. */
  patientId?: string;
  /** Only return notes for this visit. */
  visitId?: string;
  /** Only return notes by this caregiver. */
  caregiverId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `authorizations.list`. */
export interface AuthorizationListParams {
  /** Only return authorizations for this patient. */
  patientId?: string;
  /** Only return authorizations with this status. */
  status?: AuthorizationStatus;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `incidents.list`. */
export interface IncidentListParams {
  /** Only return incidents with this follow-up status. */
  status?: IncidentStatus;
  /** Only return incidents involving this patient. */
  patientId?: string;
  /** Only return incidents involving this caregiver. */
  caregiverId?: string;
  /** Only return resolved (`true`) or unresolved (`false`) incidents. */
  resolved?: boolean;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `events.list`. */
export interface EventListParams {
  /** Only return events with this follow-up status. */
  status?: IncidentStatus;
  /** Only return events involving this patient. */
  patientId?: string;
  /** Only return events involving this caregiver. */
  caregiverId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `referralSources.list`. */
export interface ReferralSourceListParams {
  /** Only return active (`true`) or inactive (`false`) sources. */
  isActive?: boolean;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `referrals.list`. */
export interface ReferralListParams {
  /** Only return referrals with this status. */
  status?: ReferralStatus;
  /** Only return referrals from this source. */
  referralSourceId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `invoices.list`. */
export interface InvoiceListParams {
  /** Only return invoices for this patient. */
  patientId?: string;
  /** Only return invoices with this status. */
  status?: InvoiceStatus;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `invoiceLineItems.list`. */
export interface InvoiceLineItemListParams {
  /** Only return lines of this invoice. */
  invoiceId?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `claims.list`. */
export interface ClaimListParams {
  /** Only return claims for this patient. */
  patientId?: string;
  /** Only return claims with this status. */
  status?: ClaimStatus;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `payrollEntries.list`. */
export interface PayrollEntryListParams {
  /** Only return entries for this caregiver. */
  caregiverId?: string;
  /** Only return entries with this status. */
  status?: PayrollEntryStatus;
  /** Only return entries for the pay period starting on this date. */
  payPeriodStart?: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `conversations.list`. */
export interface ConversationListParams {
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `messages.list`. */
export interface MessageListParams {
  /** The conversation to list messages from. */
  conversationId: string;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `alerts.list`. */
export interface AlertListParams {
  /** Only return alerts of this type. */
  type?: AlertType;
  /** Only return alerts for this audience. */
  audience?: AlertAudience;
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}

/** Query parameters for `offices.list`. */
export interface OfficeListParams {
  /** Only return objects created after this time (exclusive). ISO 8601 with a time zone. */
  createdAfter?: string;
  /** Only return objects created before this time (exclusive). ISO 8601 with a time zone. */
  createdBefore?: string;
  /**
   * Only return objects last changed after this time (exclusive). ISO 8601 with a time zone. Use
   * it for incremental sync: pass the newest `updatedAt` you already have.
   */
  updatedAfter?: string;
  /** Only return objects last changed before this time (exclusive). ISO 8601 with a time zone. */
  updatedBefore?: string;
  /**
   * Number of objects to return, from 1 to 100.
   *
   * @default 25
   */
  limit?: number;
  /** The `next_cursor` from the previous page. Send the same filters with it. */
  cursor?: string;
}
