import React from 'react';
import ReactDOM from 'react-dom';

const $root = document.getElementById('root');

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const button = <CustomButton text="Click Me!"/>;

ReactDOM.render(button, $root);
