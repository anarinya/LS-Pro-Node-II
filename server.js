const express = require('express');

const app = express();
const port = 3000;

const books = [
  'Computational Fairy Tales',
  'The CS Detective',
  'Best Practices of Spell Design'
];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/multiply/:x/:y', (req, res) => {
  const x = Number(req.params.x) || 1;
  const y = Number(req.params.y) || 1;
  res.send((x * y).toString());
});

app.get('/books', (req, res) => {
  const index = Number(req.query.index);
  if (index >= 0 && books[index]) res.send(books[index]);
  else res.send(books);
});

app.listen(port, () => console.log(`Listening on port ${port}`));