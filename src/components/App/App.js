import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Header } from '../Header/Header';
import { ErrorComponent } from '../ErrorComponent/ErrorComponent';

import './App.css';

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <Main />} />
        <Route
          render={() => (
            <ErrorComponent message={"Sorry, that page doesn't exist"} />
          )}
        />
      </Switch>
    </>
  );
};
