const express = require('express');
const path = require('path');
const app = express();

const file = express.static(path.join(__dirname, 'public'));

app.use(file);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
