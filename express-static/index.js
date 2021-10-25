const express = require('express');
const app = express();

const file = express.static('./public');

app.use(file);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
