var num1 = 1;
var num2 = 2;
var num3 = 3;
var maximumValue = Math.max(num1, num2, num3);

console.log('Maximum Value:', maximumValue);

var heroes = ['Sonic', 'Aang', 'Goku', 'Astro'];
var randomNum = Math.random();
randomNum *= heroes.length;
var randomIndex = Math.floor(randomNum);
console.log('Random Index:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Random Hero:', randomHero);

var library = [{
  title: 'The Rise of Kyoshi',
  author: 'F.C. Yee, Michael Dante Dimartino'
},
{
  title: 'Discworld',
  author: 'Terry Pratchett'
},
{
  title: '365 Days of Starshipping',
  author: 'Raisalis'
}];
var lastBook = library.pop();
console.log('Last Book:', lastBook);
var firstBook = library.shift();
console.log('First Book:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);

var fullName = 'Cole Allen';
var firstAndLastname = fullName.split(' ');
console.log('First and Last name:', firstAndLastname);
var firstName = firstAndLastname[0];
var sayMyName = firstName.toUpperCase();
console.log('Say My Name:', sayMyName);
