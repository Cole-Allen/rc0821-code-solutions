const fs = require('fs');

const rand = Math.random().toString();

fs.writeFile('random.txt', rand, 'utf-8', err => {
  if (err) {
    throw err;
  }
});
