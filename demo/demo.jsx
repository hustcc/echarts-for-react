require('./demo.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import MainPageComponent from './MainPageComponent.jsx';
import EchartsComponent from './EchartsComponent.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={MainPageComponent}>
      <Route path="/echarts/:type" component={EchartsComponent}/>
    </Route>
  </Router>),
  document.querySelector('#wrapper')
);
