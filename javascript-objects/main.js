var student = {
  firstName: 'Cole',
  lastName: 'Allen',
  age: 23
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('Student\'s full name: ', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Student';

console.log('Lives in Irvine?:', student.livesInIrvine);
console.log('Previous Occupation:', student.previousOccupation);

var vehicle = {
  make: 'Oscar Meyer',
  model: 'Weiner Mobile',
  year: 2007
};

vehicle['color'] = 'Red and Yellow';
vehicle['isConvertible'] = false;

console.log('Vehicle Color:', vehicle['color']);
console.log('is Convertible:', vehicle['isConvertible']);
console.log('Vehicle:', vehicle);

var pet = {
  name: 'sushi',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('pet:', pet);
