// Code generated from the AveeCare OpenAPI specification. DO NOT EDIT.

import { APIClient, type ClientOptions } from '../core.js';
import {
  Patients,
  Visits,
  Invoices,
  MeResource,
} from './resources.js';

/**
 * The AveeCare API client.
 *
 * const avee = new AveeCare({ apiKey: process.env.AVEECARE_API_KEY });
 */
export class AveeCare extends APIClient {
  /** Patients are the clients your agency provides care to. */
  readonly patients: Patients;
  /** Visits are scheduled or completed caregiver shifts at a patient home. */
  readonly visits: Visits;
  /** Invoices billed to patients and payers. Read-only. */
  readonly invoices: Invoices;
  /** Information about the API key making the request. */
  readonly me: MeResource;

  constructor(options?: ClientOptions) {
    super(options);
    this.patients = new Patients(this);
    this.visits = new Visits(this);
    this.invoices = new Invoices(this);
    this.me = new MeResource(this);
  }
}
