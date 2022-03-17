import React from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import aipm_logo from "../../assets/AIPM_LOGO.png";
import siginImage from "../../assets/adminPageImages/signInImage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: DEEP_BLUE_COLOR,
  },
  container: {
    alignItems: "center",
  },
  image: {
    height: "100vh",
  },
}));

const SignIn = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm>
          <Grid container direction="column" className={classes.container}>
            <Grid item>
              <Avatar alt="AIPM" src={aipm_logo} />
            </Grid>
            <Grid item>
              <Typography variant="h4">AIPM</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">
                Ambaricho International Prayer and Mission Movement
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">Email</Typography>
            </Grid>
            <Grid item>
            <TextField id="standard-basic" label="email" />
            </Grid>
            <Grid item>
              <Typography variant="body2">Password</Typography>
            </Grid>
            <Grid item>
            <TextField id="password" type="password" label="password"/>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Remember Passowrd Forgot Password
              </Typography>
            </Grid>
            <Grid item>
              <Button>Sign In</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.image}>
          <img src={siginImage} className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
