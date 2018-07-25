import Movies from './movies.jsx'
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement(Movies, {}, null),
  document.getElementById('app')
);

document.querySelectorAll('title')[0].textContent = "IMDB Top 250";
