import express from 'express';
import { insertPeople, getAllPeople } from './queries.js';

const app = express();

const port = 3000;

app.get('/', async (req, res) => {
  await insertPeople();

  const results = await getAllPeople();
  const formattedResults = results
    .map((result) => `<li>${result.name}</li>`)
    .join('');

  const listNames = `</ul>${formattedResults}</ul>`;

  res.send(`<h1>Full Cycle Rocks!</h1> ${listNames}`);
});

app.listen(port, () => {
  console.log('listening on port ' + port);
});
