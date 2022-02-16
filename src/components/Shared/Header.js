import React from "react";
import { makeStyles, Grid, Avatar, Typography, Box } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../constants/colors";
import aipm_logo from "../../assets/AIPM_LOGO.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "2%",
    paddingTop: "2%",
  },
  paper: {
    color: DEEP_BLUE_COLOR,
  },
}));
function Header() {
  const classes = useStyles();
  //   const colorVal = theme();
  return (
    <Grid className={classes.root} container>
      <Grid
        container
        justifyContent="flex-start"
        spacing={2}
        style={{ margin: 0, width: "100%" }}
      >
        <Grid item>
          <Avatar alt="AIPM" src={aipm_logo} />
        </Grid>
        <Grid item>
          {/* <Typography className={classes.paper}>
            <Box fontSize={12} fontStyle="bold">
              Ambaricho International
            </Box>
          </Typography>
          <Typography className={classes.paper}>
            <Box fontSize={12}>and Prayer Movement</Box>
          </Typography> */}
        </Grid>
        {/* <Grid container spacing={4}>
          <Grid item>
            <Typography className={classes.paper}>
              <Box fontSize={12}>Ministries</Box>
            </Typography>
          </Grid>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
export default Header;
