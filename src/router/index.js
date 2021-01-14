import React from 'react';
import {
  Switch,
  Route,
  Router as BrowserRouter
} from 'react-router-dom';

import {
  Dashboard, Detail, MyPokemon
} from 'screens';
import { History as history } from 'helpers';

const Router = () => {
  return (
    <BrowserRouter history={ history }>
      <Switch>
        <Route key={ 'Detail' } path={ '/detail/:name' } component={ Detail }/>
        <Route key={ 'MyPokemon' } path={ '/my-pokemon' } component={ MyPokemon }/>
        <Route key={ 'Dashboard' } path={ '' } component={ Dashboard } initial/>
      </Switch>
    </BrowserRouter>

  );
};

export default Router;
