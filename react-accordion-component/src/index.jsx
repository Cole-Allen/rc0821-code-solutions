import React from 'react';
import ReactDom from 'react-dom';
import Accordion from './accordion';

const topics = [{
  head: 'HTML',
  body: 'HTML is cool'
},
{
  head: 'CSS',
  body: 'CSS is cool'
},
{
  head: 'JavaScript',
  body: 'JavaScript is cool'
},
{
  head: 'React',
  body: 'React is cool'
}
];

ReactDom.render(
  <div>
    <Accordion topics={topics}/>
  </div>
  ,
  document.getElementById('root')
);
