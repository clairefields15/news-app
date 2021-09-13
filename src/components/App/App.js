import React from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { Main } from '../Main/Main';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

import './App.css';

export const App = () => {
  return (
    <Switch>
      <Route exact path='/' render={() => <Main />} />
      <Route
        render={() => (
          <ErrorComponent message={"Sorry, that page doesn't exist"} />
        )}
      />
    </Switch>
  );
};
