import { Box } from '@material-ui/core';
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { signout } from '../../api/auth';
import { clearToken } from '../../api/helpers/HandleToken';

const Logout = () => {
  useEffect(() => {
    signout();
    clearToken();
    setTimeout(() => {
      window.location.href = '/signin';
    }, 1000);
  });

  return (
    <Box className="loader">
      <Box className="icon" />
    </Box>
  );
};

export default Logout;
