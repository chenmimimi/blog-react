import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Index from './pages/index/index';
import About from './pages/about/index';

const history = createBrowserHistory({})

export default () => (
    <Router basename="/" history={history}>
      <Switch>
        <Route exact path="/" component={Index}/> 
        <Route exact path="/about" component={About} /> 
      </Switch>
    </Router>
);