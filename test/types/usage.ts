// Compile-only checks of the public types (npm run typecheck).
import AveeCare, { NotFoundError, type Patient, type PatientCreate, type Page } from 'aveecare';

async function usage(): Promise<void> {
  const avee = new AveeCare({ apiKey: 'ak_x_y', maxRetries: 3, timeout: 10_000 });
  const page: Page<Patient> = await avee.patients.list({ status: 'Active', lifecycleStage: 'Client', limit: 25 });
  const first: Patient | undefined = page.data[0];
  const name: string | null | undefined = first?.firstName;
  void name;
  for await (const p of avee.patients.list()) {
    const status: string | null = p.status;
    void status;
  }
  const params: PatientCreate = { firstName: 'A', lastName: 'B', address: null };
  const created = await avee.patients.create(params, { idempotencyKey: 'k' });
  await avee.patients.update(created.id, { address: null });
  const deleted = await avee.patients.delete(created.id);
  const flag: true = deleted.deleted;
  void flag;
  await avee.visits.list({ startFrom: '2026-10-01T00:00:00Z', startTo: '2026-10-08T00:00:00Z' });
  const me = await avee.me.retrieve();
  void me.organization.name;
  try {
    await avee.invoices.retrieve('inv_1');
  } catch (err) {
    if (err instanceof NotFoundError) void err.requestId;
  }
  // @ts-expect-error visits.list requires the start window
  await avee.visits.list({});
  // @ts-expect-error unknown lifecycle stage
  await avee.patients.list({ lifecycleStage: 'Unknown' });
}
void usage;
