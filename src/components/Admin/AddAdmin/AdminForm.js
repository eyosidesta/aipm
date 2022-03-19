import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
  FormControl,
  InputLabel,
  Select
} from "@material-ui/core";
import {
  DEEP_BLUE_COLOR,
  WHITE_COLOR,
  BACKGROUND_COLOR,
} from "../../../utils/constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: WHITE_COLOR,
    border: "solid",
    borderRadius: 5,
    color: DEEP_BLUE_COLOR,
  },
  gridContainer: {
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 20,
  },
  imageInput: {
    display: "none",
  },
  imageUploadButton: {
    backgroundColor: BACKGROUND_COLOR,
  },
}));

const AdminForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const greaterThanExtremeSmall = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={3}>
          <input
            className={classes.imageInput}
            accept="image/*"
            type="file"
            id="contained-button-file"
            multiple
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              className={classes.imageUploadButton}
              style={{ marginTop: greaterThanExtremeSmall && 50 }}
              component="span"
            >
              Upload
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} sm>
          <Grid container direction="column">
            <Grid item>
              <form noValidate autoComplete="off">
                <Typography variant="h6">Full Name</Typography>
                <TextField id="standard-basic" />
                <Typography variant="h6">Email</Typography>
                <TextField id="standard-basic" />
                <Typography variant="h6">Role</Typography>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminForm;
