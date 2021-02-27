import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import Admin from '../layouts/Admin';
import Auth from '../layouts/Auth';

import Landing from '../views/Landing';
import Profile from '../views/Profile';
import Index from '../views/Index';

import AuthRoute from '../utils/route/AuthRoute';
import Signin from './authentification/signin';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <AuthRoute path="/signin" exact component={Signin} />
      <Route path="/admin" component={Admin} />
      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
