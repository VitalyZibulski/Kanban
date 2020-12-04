import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// const span = React.createElement('span', {}, 'Hello2')
//
// const h1 = React.createElement('h1', {
//   className: 'title',
//   id: 'title',
//   'data-hello': 'title',
// }, span);

const header = (
  <h1 className="title" id="title" data-hello="title">
    <span>
      Hello
    </span>
  </h1>
)

ReactDOM.render(header, document.getElementById('root'));