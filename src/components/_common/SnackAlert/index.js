import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackAlert = ({
  type, message, open, handleClose,
}) => (
  <>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  </>
);

SnackAlert.propTypes = {
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default SnackAlert;
