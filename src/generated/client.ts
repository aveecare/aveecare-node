// Code generated from the AveeCare OpenAPI specification. DO NOT EDIT.

import { APIClient, type ClientOptions } from '../core.js';
import {
  Patients,
  Contacts,
  Allergies,
  Medications,
  CareGoals,
  PatientNotes,
  MedicationAdministrations,
  OasisAssessments,
  Caregivers,
  CaregiverNotes,
  Certifications,
  AvailabilityResource,
  Specializations,
  Applicants,
  Visits,
  VisitNotes,
  VisitRequests,
  OpenShifts,
  ShiftSwaps,
  CarePlans,
  ProgressNotes,
  Authorizations,
  Incidents,
  Events,
  ReferralSources,
  Referrals,
  Invoices,
  InvoiceLineItems,
  Claims,
  PayrollEntries,
  Conversations,
  Messages,
  Alerts,
  Offices,
  MeResource,
} from './resources.js';

/**
 * The AveeCare API client.
 *
 * const avee = new AveeCare({ apiKey: process.env.AVEECARE_API_KEY });
 */
export class AveeCare extends APIClient {
  /**
   * Patients are the clients your agency provides care to, including prospective clients you have
   * not yet admitted.
   */
  readonly patients: Patients;
  /**
   * Contacts are family members and other people connected to a patient, such as an emergency
   * contact.
   */
  readonly contacts: Contacts;
  /** Allergies recorded on a patient's profile. */
  readonly allergies: Allergies;
  /**
   * Medications on a patient's medication list, with the schedule caregivers follow when they give
   * or assist with them.
   */
  readonly medications: Medications;
  /** Goals of care set for a patient, such as walking to the mailbox unaided. */
  readonly careGoals: CareGoals;
  /** Notes your staff and caregivers keep on a patient's profile. */
  readonly patientNotes: PatientNotes;
  /**
   * The medication administration record (MAR): each dose a caregiver gave, or the reason it was
   * not given. Read-only.
   */
  readonly medicationAdministrations: MedicationAdministrations;
  /**
   * OASIS assessments recorded for Medicare home health patients. This lists each assessment and
   * its status; the item-level answers are not included. Read-only.
   */
  readonly oasisAssessments: OasisAssessments;
  /** Caregivers are the aides, nurses and therapists your agency schedules to visit patients. */
  readonly caregivers: Caregivers;
  /** Notes your staff keep on a caregiver's profile. */
  readonly caregiverNotes: CaregiverNotes;
  /**
   * Certifications, licenses and background checks on a caregiver's profile, with their expiry
   * dates.
   */
  readonly certifications: Certifications;
  /**
   * When a caregiver can or cannot work. A window is either a weekly recurring time on one
   * weekday, or a one-off date range such as time off.
   */
  readonly availability: AvailabilityResource;
  /**
   * Skills and specialties on a caregiver's profile, such as dementia care or Hoyer lift
   * transfers.
   */
  readonly specializations: Specializations;
  /**
   * People who applied to work for your agency, tracked through your hiring stages until they are
   * hired as caregivers.
   */
  readonly applicants: Applicants;
  /**
   * Visits are scheduled or completed caregiver shifts at a patient's home. A visit's patient,
   * caregiver, times and status are set when it is created; reschedule or reassign a visit in
   * AveeCare.
   */
  readonly visits: Visits;
  /** Notes written about a visit by the caregiver or office staff. */
  readonly visitNotes: VisitNotes;
  /** Requests from caregivers to pick up visits with a patient, which office staff approve or deny. */
  readonly visitRequests: VisitRequests;
  /** Open shifts are unassigned visits offered to caregivers so one of them can claim it. */
  readonly openShifts: OpenShifts;
  /**
   * Requests from one caregiver to hand a visit to another, which the other caregiver and then the
   * office approve.
   */
  readonly shiftSwaps: ShiftSwaps;
  /**
   * Care plans describe the services a patient receives, how often, and when the plan is next
   * reviewed. The plan's goals and task lists are managed in AveeCare and are not included here.
   */
  readonly carePlans: CarePlans;
  /** Progress notes are the clinical summaries caregivers write after a visit. */
  readonly progressNotes: ProgressNotes;
  /**
   * Payer authorizations: how many units of a service a payer has approved for a patient, and over
   * what dates.
   */
  readonly authorizations: Authorizations;
  /**
   * Incident reports: falls, injuries, medication errors and other events that need follow-up,
   * often for regulatory reporting.
   */
  readonly incidents: Incidents;
  /**
   * Events your agency documents about a patient, caregiver or visit, such as a complaint, a
   * compliment or an attendance issue.
   */
  readonly events: Events;
  /**
   * Hospitals, physicians, case managers and other organizations that refer clients to your
   * agency.
   */
  readonly referralSources: ReferralSources;
  /** Individual referrals of a prospective client, tracked from first contact to admission. */
  readonly referrals: Referrals;
  /** Invoices billed to patients and their families for private-pay care. Read-only. */
  readonly invoices: Invoices;
  /** The individual charges on an invoice. Read-only. */
  readonly invoiceLineItems: InvoiceLineItems;
  /**
   * Insurance claims billed to Medicaid, Medicare and other payers, with their adjudication
   * status. Read-only.
   */
  readonly claims: Claims;
  /** One caregiver's hours and pay for one pay period. Read-only. */
  readonly payrollEntries: PayrollEntries;
  /**
   * In-app message threads between people at your agency: one-to-one chats and named group chats.
   * Read-only; start conversations in AveeCare.
   */
  readonly conversations: Conversations;
  /** Messages in a conversation. Messages you send through the API are sent as the API key's user. */
  readonly messages: Messages;
  /**
   * Alerts on your agency's alert board, such as a credential about to expire or a missed
   * clock-in, and announcements staff post for caregivers.
   */
  readonly alerts: Alerts;
  /**
   * Your agency's offices (branches). Patients, caregivers and applicants can each belong to one
   * office. There is always exactly one default office.
   */
  readonly offices: Offices;
  /** The API key making the request: its scopes, its user's role and its agency. */
  readonly me: MeResource;

  constructor(options?: ClientOptions) {
    super(options);
    this.patients = new Patients(this);
    this.contacts = new Contacts(this);
    this.allergies = new Allergies(this);
    this.medications = new Medications(this);
    this.careGoals = new CareGoals(this);
    this.patientNotes = new PatientNotes(this);
    this.medicationAdministrations = new MedicationAdministrations(this);
    this.oasisAssessments = new OasisAssessments(this);
    this.caregivers = new Caregivers(this);
    this.caregiverNotes = new CaregiverNotes(this);
    this.certifications = new Certifications(this);
    this.availability = new AvailabilityResource(this);
    this.specializations = new Specializations(this);
    this.applicants = new Applicants(this);
    this.visits = new Visits(this);
    this.visitNotes = new VisitNotes(this);
    this.visitRequests = new VisitRequests(this);
    this.openShifts = new OpenShifts(this);
    this.shiftSwaps = new ShiftSwaps(this);
    this.carePlans = new CarePlans(this);
    this.progressNotes = new ProgressNotes(this);
    this.authorizations = new Authorizations(this);
    this.incidents = new Incidents(this);
    this.events = new Events(this);
    this.referralSources = new ReferralSources(this);
    this.referrals = new Referrals(this);
    this.invoices = new Invoices(this);
    this.invoiceLineItems = new InvoiceLineItems(this);
    this.claims = new Claims(this);
    this.payrollEntries = new PayrollEntries(this);
    this.conversations = new Conversations(this);
    this.messages = new Messages(this);
    this.alerts = new Alerts(this);
    this.offices = new Offices(this);
    this.me = new MeResource(this);
  }
}
