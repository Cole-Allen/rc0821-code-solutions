const express = require('express');
const app = express();
let nextID = 1;
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

app.use(express.json());

app.post('/api/grades', function (req, res, next) {
  grades.nextID = req.body;
  grades.nextID.id = nextID;
  res.status(201);
  res.send(grades.nextID);
  nextID++;
});
