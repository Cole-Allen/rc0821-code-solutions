const fs = require('fs');

fs.readFile('./dijkstra.txt', 'utf-8', (err, text) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(text);
});
