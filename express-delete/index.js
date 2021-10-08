const express = require('express');
const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

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

app.delete('/api/grades/:id', function (req, res, next) {
  delete grades[req.params.id];
  res.sendStatus(204);
});
