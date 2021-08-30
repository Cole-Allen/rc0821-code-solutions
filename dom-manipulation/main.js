var counter = 0;

var $button = document.querySelector('.hot-button');

var $clickCounter = document.querySelector('.click-count');

$button.addEventListener('click', function (event) {
  counter++;
  $clickCounter.textContent = 'Clicks: ' + counter;
  if (counter < 4) {
    $button.className = 'hot-button cold';
  } else if (counter < 7) {
    $button.className = 'hot-button cool';
  } else if (counter < 10) {
    $button.className = 'hot-button tepid';
  } else if (counter < 13) {
    $button.className = 'hot-button warm';
  } else if (counter < 16) {
    $button.className = 'hot-button hot';
  } else if (counter > 16) {
    $button.className = 'hot-button nuclear';
  }

});
