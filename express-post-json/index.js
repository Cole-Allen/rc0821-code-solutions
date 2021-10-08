const express = require('express');
const app = express();
const nextID = 1;
const grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

app.get('/api/grades', function (req, res, next) {
  const array = [];
  for (const i in grades) {
    array.push(grades[i]);
  }
  res.json(array);
});

app.use();
