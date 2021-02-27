import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getTokenWithExpiry } from '../../api/helpers/HandleToken';

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (!getTokenWithExpiry() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location },
        }}
      />
    ))}
  />
);

export default LoginRoute;
