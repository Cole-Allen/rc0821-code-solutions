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
  var array = [];
  for (const i in data.notes) {
    array.push(data.notes[i]);
  }
  res.staus(200).send(array);
});

app.get('/api/notes/:id', function (req, res, next) {
  const paramID = parseInt(req.params.id);
  if (Math.sign(paramID) === -1 || isNaN(paramID)) {
    res.status(400).send({ error: 'id is not a positive integer' });
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
  if (req.body.content) {

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

app.delete('/api/notes/:id', function (req, res, next) {
  const paramID = parseInt(req.params.id);
  if (Math.sign(paramID) === -1 || isNaN(paramID)) {
    res.status(400);
    res.send({ error: 'id is not a positive integer' });
  } else {
    if (data.notes[paramID]) {
      delete data.notes[paramID];
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8', err => {
        if (err) {
          res.status(500);
          res.send({ error: 'An unexpected error occured' });

        } else {
          res.status(204);
          res.send();
        }
      });

    } else {
      res.status(404);
      res.send({ error: 'Entry not found' });
    }
  }
});

app.put('/api/notes/:id', function (req, res, next) {
  const paramID = parseInt(req.params.id);
  if (Math.sign(paramID) === -1 || isNaN(paramID)) {
    res.status(400);
    res.send({ error: 'id is not a positive integer' });
  } else {
    if (data.notes[paramID]) {
      data.notes[paramID] = req.body;
      data.notes[paramID].id = paramID;
      fs.writeFile('./data.json', JSON.stringify(data, null, 2), 'utf-8', err => {
        if (err) {
          res.status(500);
          res.send({ error: 'An unexpected error occured' });

        } else {
          res.status(200);
          res.send(data.notes[paramID]);
        }
      });

    } else {
      res.status(404);
      res.send({ error: 'Entry not found' });
    }
  }
});
