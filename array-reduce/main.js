const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((pv, cv) => pv + cv);
console.log('Sum: ', sum);

const product = numbers.reduce((pv, cv) => pv * cv);
console.log('product: ', product);

const balance = account.reduce((pv, cv) => {
  if (cv.type === 'deposit') {
    return pv + cv.amount;
  } else {
    return pv - cv.amount;
  }
}, 0);
console.log('Balance: ', balance);

const composite = traits.reduce((pv, cv) => {
  return Object.assign(cv, pv);
});
console.log('Composite: ', composite);
