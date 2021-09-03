var library = [
  {
    isbn: '978 - 1419735042',
    title: 'The Rise of Kyoshi',
    author: 'F. C. Yee, Michael Dante DiMartino'
  },
  {
    isbn: '978 - 0547928227',
    title: 'The Hobbit',
    author: 'J. R. R. Tolkien'
  },
  {
    isbn: '978 - 0441013593',
    title: 'Dune',
    author: 'Frank Herbert'
  }
];

console.log('Library: ', library);
console.log('Library Type: ', typeof library);

var JSONLibrary = JSON.stringify(library);

console.log('JSON Library: ', JSONLibrary);
console.log('JSON Library type: ', typeof JSONLibrary);

var student = '[{"id":"40","name":"Cole Allen"}]';

console.log('Student: ', student);
console.log('Student Type: ', typeof student);

var JSONStudent = JSON.parse(student);

console.log('JSON Student: ', JSONStudent);
console.log('JSON Student type: ', typeof JSONStudent);
