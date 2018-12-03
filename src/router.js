import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Index from './pages/index';
const history = createBrowserHistory({})

export default () => (
    <Router basename="/" history={history}>
      <Route exact path="/" component={Index}/> 
    </Router>
);