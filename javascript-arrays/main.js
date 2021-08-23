var colors = ['red', 'white', 'blue'];

console.log('colors[0] =', colors[0]);
console.log('colors[1] =', colors[1]);
console.log('colors[2] =', colors[2]);

var string = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];

console.log(string);

colors[2] = 'green';

var stringMex = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];

console.log(stringMex);

console.log('Colors array:', colors);

var students = ['Bob', 'Frank', 'Tom', 'Sarah'];

var numberOfStudents = students.length;

var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];

console.log('There are ' + numberOfStudents + ' students in class.');
console.log('The last student in the array is ' + lastStudent);
console.log('Value of students:', students);
