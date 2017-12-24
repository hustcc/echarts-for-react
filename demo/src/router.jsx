/**
 * Created by hustcc.
 * Contract: i@hust.cc
 */

import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './App.jsx';
import Chart from './Chart.jsx';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/echarts/:type" component={Chart}/>
    </Route>
  </Router>
);
