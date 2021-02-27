import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getTokenWithExpiry } from '../../api/helpers/HandleToken';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (!getTokenWithExpiry() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/cours',
          state: { from: props.location },
        }}
      />
    ))}
  />
);

export default AuthRoute;
