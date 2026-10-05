// Live tests against a real AveeCare API. They run only when both
// AVEECARE_API_KEY and AVEECARE_BASE_URL are set, and they create, update and
// delete one test patient. Use a sandbox or local API, never production data.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import AveeCare, { NotFoundError } from '../../dist/esm/index.js';

const enabled = Boolean(process.env.AVEECARE_API_KEY && process.env.AVEECARE_BASE_URL);
const live = (name, fn) => test(name, { skip: !enabled && 'set AVEECARE_API_KEY and AVEECARE_BASE_URL to run' }, fn);

live('me.retrieve identifies the key', async () => {
  const avee = new AveeCare();
  const me = await avee.me.retrieve();
  assert.equal(typeof me.id, 'string');
});

live('lists patients and pages twice', async () => {
  const avee = new AveeCare();
  const first = await avee.patients.list({ limit: 1 });
  assert.equal(first.object, 'list');
  assert.ok(Array.isArray(first.data));
  if (first.hasNextPage()) {
    const second = await first.getNextPage();
    assert.ok(Array.isArray(second.data));
    if (first.data[0] && second.data[0]) assert.notEqual(first.data[0].id, second.data[0].id);
  }
  if (first.data[0]) {
    const one = await avee.patients.retrieve(first.data[0].id);
    assert.equal(one.id, first.data[0].id);
  }
});

live('creates (idempotently), updates and deletes a patient', async () => {
  const avee = new AveeCare();
  const idempotencyKey = randomUUID();
  const params = { firstName: 'Sdk', lastName: `Livetest ${Date.now()}` };
  const created = await avee.patients.create(params, { idempotencyKey });
  try {
    assert.equal(created.firstName, 'Sdk');
    const replay = await avee.patients.create(params, { idempotencyKey });
    assert.equal(replay.id, created.id, 'same Idempotency-Key returns the same patient');
    const updated = await avee.patients.update(created.id, { firstName: 'Sdk2' });
    assert.equal(updated.firstName, 'Sdk2');
  } finally {
    await avee.patients.delete(created.id);
  }
  await assert.rejects(avee.patients.retrieve(created.id), NotFoundError);
});
