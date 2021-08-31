var $mainButton = document.querySelector('.main-button');
var $modal = document.querySelector('.modal');
var $modalButton = document.querySelector('.survey > button');

$mainButton.addEventListener('click', function () {
  $modal.classList.remove('hidden');
});

$modalButton.addEventListener('click', function () {
  $modal.classList.add('hidden');
});
