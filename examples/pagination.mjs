// node examples/pagination.mjs  (with AVEECARE_API_KEY set)
import AveeCare from 'aveecare';

const avee = new AveeCare();

// Auto-paging: iterate list() directly and the library fetches each page.
let count = 0;
for await (const patient of avee.patients.list({ limit: 100 })) {
  count += 1;
  if (count <= 3) console.log(patient.id);
}
console.log(`${count} patients in total`);

// Manual paging: one page at a time.
let page = await avee.patients.list({ limit: 25 });
console.log(`first page: ${page.data.length}`);
while (page.hasNextPage()) {
  page = await page.getNextPage();
  console.log(`next page: ${page.data.length}`);
}
