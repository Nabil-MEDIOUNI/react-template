import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import Admin from '../layouts/Admin';

import Profile from '../views/Profile';
import Index from '../views/Index';

import AuthRoute from '../utils/route/AuthRoute';
import Signin from './authentification/signin';
import LoginRoute from '../utils/route/LoginRoute';
import PrivateRoute from '../utils/route/PrivateRoute';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <AuthRoute path="/signin" exact component={Signin} />
      <PrivateRoute path="/" component={Admin} />
      {/* add routes without layouts */}
      <LoginRoute path="/landing" exact component={Index} />
      <PrivateRoute path="/profile" exact component={Profile} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
