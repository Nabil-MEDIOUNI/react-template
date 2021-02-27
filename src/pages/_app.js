import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import Profile from '../views/Profile';
import Index from '../views/Index';

import AuthRoute from '../utils/route/AuthRoute';
import Signin from './authentification/signin';
import PrivateRoute from '../utils/route/PrivateRoute';
import Admin from '../layouts/Admin';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <AuthRoute path="/signin" exact component={Signin} />
      <PrivateRoute path="/admin" component={Admin} />
      {/* add routes without layouts */}
      <Route path="/" exact component={Index} />
      <PrivateRoute path="/profile" exact component={Profile} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
