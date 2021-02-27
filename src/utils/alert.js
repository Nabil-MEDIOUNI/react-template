import React from 'react';

const { default: SnackAlert } = require('../components/_common/SnackAlert');

const Alert = (error, openAlert, setAlert, message) => {
  if (error) {
    return (
      <SnackAlert
        message={error?.message}
        type="error"
        open={openAlert}
        handleClose={setAlert}
      />
    );
  }
  return (
    <SnackAlert
      message={message}
      type="success"
      open={openAlert}
      handleClose={setAlert}
    />
  );
};

export default Alert;
