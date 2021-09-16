var $text = document.querySelector('h1');

function helloThere() {
  $text.textContent = 'Hello There';
}

setTimeout(helloThere, 2 * 1000);
