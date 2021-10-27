require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }

  /* your code starts here */
  const sql = `
    INSERT INTO "users" ("username", "hashedPassword")
    VALUES ($1, $2)
    RETURNING *;
  `;
  argon2
    .hash(password)
    .then(pass => {
      const params = [username, pass];
      db.query(sql, params)
        .then(result => {
          res.status(201).json({
            createdAt: result.rows[0].createdAt,
            username: result.rows[0].username,
            userId: result.rows[0].userId
          });
        }).catch(err => {
          console.error('db err', err);
          res.status(400).json({
            error: 'Username already exists'
          });
        });
    })
    .catch(err => {
      console.error('argon2 err', err);
      res.status(400).json({
        error: 'An unexpected error occured'
      });
    });
  /**
   * Hash the user's password with `argon2.hash()`
   * Then, 😉
   *   Insert the user's "username" and "hashedPassword" into the "users" table.
   *   Then, 😉
   *     Respond to the client with a 201 status code and the new user's "userId", "username", and "createdAt" timestamp.
   *   Catch any errors.
   * Catch any errors.
   *
   * Hint: Insert statements can include a `returning` clause to retrieve the insterted row(s).
   */

});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
