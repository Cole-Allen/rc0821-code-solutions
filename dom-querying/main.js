console.log('Hello, World');

var h1Ele = document.querySelector('h1');
console.log('H1 Element:', h1Ele);
console.dir(h1Ele);

var idExplanation = document.querySelector('#explanation');
console.log('ID explanation:', idExplanation);
console.dir(idExplanation);

var classHint = document.querySelector('.hint');
console.log('Class hint:', classHint);
console.dir(classHint);

var $paragraphs = document.querySelectorAll('p');
console.log('P NodeList:', $paragraphs);

var $example = document.querySelectorAll('.example.link');
console.log('class example-link', $example);
