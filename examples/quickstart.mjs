// node examples/quickstart.mjs  (with AVEECARE_API_KEY set)
import AveeCare from 'aveecare';

const avee = new AveeCare({ apiKey: process.env.AVEECARE_API_KEY });

const me = await avee.me.retrieve();
console.log(`Connected as key "${me.name}" for ${me.organization.name}`);

const page = await avee.patients.list({ status: 'Active', limit: 5 });
for (const patient of page.data) {
  console.log(patient.id, patient.firstName, patient.lastName);
}
