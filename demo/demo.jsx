require('./demo.css');

const React = require('react');
const ReactDOM = require('react-dom');

import MainPageComponent from './MainPageComponent.jsx';

ReactDOM.render(
  <MainPageComponent />,
  document.querySelector('#wrapper')
);
