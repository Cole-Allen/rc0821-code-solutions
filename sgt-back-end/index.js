const express = require('express');
const pg = require('pg');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    SELECT
      *
    FROM
      grades;
  `;

  db.query(sql)
    .then(data => {
      const grades = data.rows;
      res.json(grades);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Get error', err.message);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });

});

app.post('/api/grades', (req, res) => {
  const { course, name, score } = req.body;
  const numScore = Number(score);
  if (!Number.isInteger(numScore) || numScore > 100 || numScore < 0) {
    res.status(400).json({ error: 'Score must be an integer' });
    return;
  }
  if (!course) {
    res.status(400).json({ error: 'No course' });
    return;
  }
  if (!name) {
    res.status(400).json({ error: 'No name' });
    return;
  }

  const sql = `
    INSERT INTO "grades"
      ("name", "course", "score")
      VALUES
      ($1, $2, $3)
      RETURNING *
  `;
  const params = [name, course, score];

  db.query(sql, params)
    .then(data => {
      const [grade] = data.rows;
      res.status(201).json(grade);
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Insert grade error:', err);

      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const paramID = parseInt(req.params.gradeId);
  const { name, course, score } = req.body;
  const numScore = Number(score);
  if (Math.sign(paramID) === -1 || isNaN(paramID)) {
    res.status(400).send({ error: 'id is not a positive integer' });
  }
  if (!Number.isInteger(numScore) || numScore > 100 || numScore < 0) {
    res.status(400).json({ error: 'Score must be an integer' });
    return;
  }
  if (!course) {
    res.status(400).json({ error: 'No course' });
    return;
  }
  if (!name) {
    res.status(400).json({ error: 'No name' });

  }

  const sql = `
    UPDATE "grades"
    SET
      "name" = $1,
      "course" = $2,
      "score" = $3
    WHERE "gradeId" = $4
    RETURNING *
  `;
  const params = [name, course, score, req.params.gradeId];

  db.query(sql, params)
    .then(data => {
      if (!data.rows[0]) {
        res.status(404).json({ error: 'Could not find gradeId' });
      } else {
        const [grade] = data.rows;
        res.status(200).json(grade);
      }

    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Insert grade error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const paramID = parseInt(req.params.gradeId);
  if (Math.sign(paramID) === -1 || isNaN(paramID)) {
    res.status(400).send({ error: 'id is not a positive integer' });
  }

  const sql = `
    DELETE
    FROM
      "grades"
    WHERE "gradeId" = $1
    RETURNING *
  `;
  const params = [req.params.gradeId];

  db.query(sql, params)
    .then(data => {
      if (!data.rows[0]) {
        res.status(404).json({ error: 'Could not find gradeId' });
      } else {
        res.sendStatus(204);
      }

    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Insert grade error:', err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000');
});
