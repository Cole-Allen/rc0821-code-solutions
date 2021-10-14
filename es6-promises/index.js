const takeAChance = require('./take-a-chance');

const chance = takeAChance('Cole');

chance.then(value => {
  console.log(value);
});
chance.catch(error => {
  console.log(error.message);
});
