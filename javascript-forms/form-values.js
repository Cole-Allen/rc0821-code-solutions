var $forms = document.querySelector('#contact-form');

$forms.addEventListener('submit', function (event) {
  event.preventDefault();
  var obj = {};
  obj.name = document.forms[0].name.value;
  obj.email = document.forms[0].email.value;
  obj.message = document.forms[0].message.value;
  console.log(obj);
  $forms.reset();
});
