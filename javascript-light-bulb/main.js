var $bulb = document.querySelector('.bulb');
var $bg = document.querySelector('.container');
var on = false;

$bulb.addEventListener('click', function (event) {
  if (on) {
    $bulb.classList.remove('on');
    $bulb.classList.add('off');
    $bg.classList.remove('bg-on');
    $bg.classList.add('bg-off');
    on = false;
  } else {
    $bulb.classList.remove('off');
    $bulb.classList.add('on');
    $bg.classList.remove('bg-off');
    $bg.classList.add('bg-on');
    on = true;
  }

});
