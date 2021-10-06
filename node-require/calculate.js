const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const a = parseFloat(process.argv[2]);
const op = process.argv[3];
const b = parseFloat(process.argv[4]);

let result = 'error';

if (op === 'plus' || op === '+') {
  result = add(a, b);
} else if (op === 'minus' || op === '-') {
  result = subtract(a, b);
} else if (op === 'times' || op === '*') {
  result = multiply(a, b);
} else if (op === 'over' || op === '/') {
  result = divide(a, b);
}

console.log(result);
