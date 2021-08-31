var $type = document.querySelectorAll('.type span');
var $modal = document.querySelector('.modal-container');
var $modalButton = document.querySelector('.play-again-button');
var $missed = document.querySelector('.missed');
var $accuracy = document.querySelector('.accuracy');

var currentLetter = 0;
var wrong = 0;
$type[currentLetter].classList.add('currentLetter');

document.addEventListener('keydown', function (event) {
  if (currentLetter < $type.length) {
    if (event.key === $type[currentLetter].textContent) {

      $type[currentLetter].classList.remove('red');
      $type[currentLetter].classList.add('green');
      $type[currentLetter].classList.remove('currentLetter');
      currentLetter++;
      if (currentLetter < $type.length) {
        $type[currentLetter].classList.add('currentLetter');
      }

    } else {
      $type[currentLetter].classList.add('red');
      wrong++;
    }
  }
  if (currentLetter === $type.length) {
    $modal.classList.remove('hidden');
    $missed.textContent = 'Missed: ' + wrong;
    $accuracy.textContent = 'Accuracy: ' + Math.round(100 - ((wrong / $type.length) * 100)) + '%';
  }

});

$modalButton.addEventListener('click', function () {
  currentLetter = 0;
  wrong = 0;
  for (var i = 0; i < $type.length; i++) {
    $type[i].classList.remove('green');
  }
  $modal.classList.add('hidden');
  $type[currentLetter].classList.add('currentLetter');
});
