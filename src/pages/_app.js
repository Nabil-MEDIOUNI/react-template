import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';

import Profile from '../views/Profile';
import Index from '../views/Index';

import Signin from './authentification/signin';
import Admin from '../layouts/Admin';
import Landing from '../views/Landing';
import Builder from '../components/FormBuilder/Builder';
import Building from '../components/Building';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/signin" exact component={Signin} />
      <Route path="/admin" component={Admin} />
      {/* add routes without layouts */}
      <Route path="/" exact component={Index} />
      <Route path="/landing" exact component={Landing} />
      <Route path="/builder" exact component={Builder} />
      <Route path="/building" exact component={Building} />
      <Route path="/profile" exact component={Profile} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
