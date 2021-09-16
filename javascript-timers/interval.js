var $text = document.querySelector('h1');
var count = 3;
function countDown() {
  if (count > 0) {
    $text.textContent = count;
    count--;
  } else {
    $text.textContent = '~Earth Beeeelooowww Us~';
  }

}

setInterval(countDown, 1000);
