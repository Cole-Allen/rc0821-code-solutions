import React from 'react';
import ReactDOM from 'react-dom';

var root = document.getElementById('root');

var test = React.createElement('h1', null, 'Hello, React!');

ReactDOM.render(test, root);
