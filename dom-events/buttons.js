function handleClick(event) {
  console.log('Button Clicked!');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}

var $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('Button hovered');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');

$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('Button Double Clicked!');
  console.log('Event:', event);
  console.log('Event Target:', event.target);
}

var $dblclickButton = document.querySelector('.double-click-button');

$dblclickButton.addEventListener('dblclick', handleDoubleClick);
