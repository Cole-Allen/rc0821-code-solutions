var $userList = document.querySelector('#user-list');

var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
httpRequest.responseType = 'json';
httpRequest.addEventListener('load', xhrLoad);
httpRequest.send();

function xhrLoad() {
  console.log('status: ', this.status);
  console.log('response: ', this.response);
  for (var i = 0; i < this.response.length; i++) {
    var userLi = document.createElement('li');
    userLi.textContent = this.response[i].name;
    $userList.appendChild(userLi);
  }
}
