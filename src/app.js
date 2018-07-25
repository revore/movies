import superagent from 'superagent';
import Movies from './movies.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(React.createElement(Movies, {}, null), document.getElementById('app'));

ReactDOM.render(
  React.createElement(Movies, {toWhat: 'World'}, null),
  document.getElementById('app')
);


document.querySelectorAll('title')[0].textContent = "IMDB Top 250";
