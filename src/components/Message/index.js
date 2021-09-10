import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import PropTypes from "prop-types";

const Message = ({ open, type, message, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      autoHideDuration={5000}
    >
      <Alert onClose={handleClose} severity={type} variant={"filled"}>
        {message}
      </Alert>
    </Snackbar>
  );
};

Message.propType = {
  open: PropTypes.bool,
  type: PropTypes.string,
  message: PropTypes.string,
  handleClose: PropTypes.func,
};

Message.defaultProps = {
  open: false,
  type: "success",
  message: "",
  handleClose: () => {},
};

export default Message;
