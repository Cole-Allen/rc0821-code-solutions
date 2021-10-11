const express = require('express');
const data = require('./data.json');
const fs = require('fs');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The express server is listening on port 3000!');
});

app.use(express.json());

app.get('/api/notes', function (req, res, next) {
  res.status(200);
  res.send(data);
});

app.get('/api/notes/:id', function (req, res, next) {
  if (typeof req.params.id !== 'number' && Math.sign(req.params.id) === -1) {
    res.status(400);
    res.send({ error: 'id is not a positive integer' });
  } else {
    if (data.notes[req.params.id]) {
      res.status(200);
      res.send(data.notes[req.params.id]);
    } else {
      res.status(404);
      res.send({ error: 'Entry not found' });
    }
  }
});

app.post('/api/notes', function (req, res, next) {
  if (JSON.stringify(req.body) !== '{}') {

    const cid = data.nextId++;

    data.notes[cid] = req.body;
    data.notes[cid].id = cid;
    fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8', err => {
      if (err) {
        res.status(500);
        res.send({ error: 'An unexpected error occured' });

      } else {
        res.status(201);
        res.send(data.notes[cid]);
      }
    });

  } else {
    res.status(400);
    res.send({ error: 'No content entered' });
  }
});
