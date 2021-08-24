function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hello, ' + name;
}

console.log('greet:', greet('Aiai'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('getFirstName:', getFirstName({ firstName: 'Sonic', middleName: 'The', lastName: 'Hedgehog' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('getLastElement:', getLastElement(['Aiai', 'Meme', 'GonGon', 'Baby', 'Kazuma']));
