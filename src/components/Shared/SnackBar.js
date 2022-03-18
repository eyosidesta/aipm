import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const SnackBar = ({ openSnackbar, message, title }) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={title}>{message}</Alert>
    </Snackbar>
  );
};

export default SnackBar;
