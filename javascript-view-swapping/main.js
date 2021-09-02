var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {

  if (event.target.matches('.tab')) {
    var targetAttr = event.target.getAttribute('data-view');
    for (var i = 0; i < $tabList.length; i++) {

      $tabList[i].classList.remove('active');
      if (event.target === $tabList[i]) {
        $tabList[i].classList.add('active');
      }
    }
    for (var j = 0; j < $viewList.length; j++) {
      $viewList[j].classList.add('hidden');
      if ($viewList[j].getAttribute('data-view') === targetAttr) {
        $viewList[j].classList.remove('hidden');
      }
    }
  }
});
