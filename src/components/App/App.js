import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';

import './App.css';

export const App = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Home />} />
    </Switch>
  );
};
