var $overlay = document.querySelector('.overlay');
var $leftArrow = document.querySelector('.fa-chevron-circle-left');
var $rightArrow = document.querySelector('.fa-chevron-circle-right');
var $images = document.querySelectorAll('img');

giveImagesIDs($images);
createCircles($images);
fillInCircle(0);

var intervalID = setInterval(changeInterval, 3000);

$overlay.addEventListener('click', function (event) {
  var $activeImg = findActiveImg($images);

  switch (event.target) {

    case $leftArrow:
      changeImage($activeImg.active, $activeImg.prevImg);
      $activeImg = findActiveImg($images);

      clearInterval(intervalID);
      intervalID = setInterval(changeInterval, 3000);
      break;
    case $rightArrow:
      changeImage($activeImg.active, $activeImg.nextImg);
      $activeImg = findActiveImg($images);

      clearInterval(intervalID);
      intervalID = setInterval(changeInterval, 3000);
      break;
  }

  if (event.target.matches('.fa-circle')) {
    clearInterval(intervalID);
    intervalID = setInterval(changeInterval, 3000);
    for (var i = 0; i < $images.length; i++) {
      if ($images[i].getAttribute('img-id') === event.target.getAttribute('data-id')) {
        fillInCircle(i);
        changeImage($activeImg.active, $images[i]);
      }
    }
  }

});

function findActiveImg(images) {
  var obj = {};
  for (var i = 0; i < images.length; i++) {

    if (images[i].getAttribute('class').includes('active')) {
      fillInCircle(i);
      obj.active = images[i];
      obj.activeID = i;
      if (images[i + 1]) {
        obj.nextImg = images[i + 1];

      } else {
        obj.nextImg = images[0];

      }
      if (images[i - 1]) {
        obj.prevImg = images[i - 1];

      } else {
        obj.prevImg = images[images.length - 1];

      }
    }
  }
  return obj;
}

function changeInterval() {
  var $activeImg = findActiveImg($images);
  changeImage($activeImg.active, $activeImg.nextImg);

  $activeImg = findActiveImg($images);

}

function changeImage(current, next) {
  current.classList.remove('active');
  current.classList.add('zero-opacity');

  next.classList.add('active');
  next.classList.remove('zero-opacity');
}

function createCircles(images) {
  for (var i = 0; i < images.length; i++) {
    var circle = document.createElement('i');
    circle.setAttribute('class', 'far fa-circle');
    circle.setAttribute('data-id', i);
    document.querySelector('.circles').appendChild(circle);
  }
}

function giveImagesIDs(images) {
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute('img-id', i);
  }
}

function fillInCircle(index) {
  var $circles = document.querySelectorAll('.fa-circle');
  for (var i = 0; i < $circles.length; i++) {
    $circles[i].classList.remove('fas');
    $circles[i].classList.add('far');
  }
  $circles[index].classList.remove('far');
  $circles[index].classList.add('fas');
}
