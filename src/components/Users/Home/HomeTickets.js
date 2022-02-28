import React from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
  },
  paper: {
    "& > *": {
      width: theme.spacing(4),
      height: theme.spacing(4),
      color: "white",
    },
  },
  container: {
    //   paddingLeft: 270,
    marginTop: 20,
  },
  package: {
      justifyContent: "center",

  },
  packageText: {
      paddingLeft: 60
  }
}));
const HomeTickets = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item container xs={12} sm={6} md={4} className={classes.package}>
          <Grid item container className={classes.package}>
            <Grid item className={classes.paper}>
              <Paper elevation={3} />
            </Grid>
            <Grid item>
              <Typography variant="h6">Prayer</Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.packageText}>
            <Typography variant="body2">If we Pray God Works,</Typography>
            <Typography variant="body2">If we don't pray we work</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={6} md={4} className={classes.package}>
          <Grid item container className={classes.package}>
            <Grid item className={classes.paper}>
              <Paper elevation={3} />
            </Grid>
            <Grid item>
              <Typography variant="h6">Prayer</Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.packageText}>
            <Typography variant="body2">If we Pray God Works,</Typography>
            <Typography variant="body2">If we don't pray we work</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={6} md={4} className={classes.package}>
          <Grid item container className={classes.package}>
            <Grid item className={classes.paper}>
              <Paper elevation={3} />
            </Grid>
            <Grid item>
              <Typography variant="h6">Prayer</Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.packageText}>
            <Typography variant="body2">If we Pray God Works,</Typography>
            <Typography variant="body2">If we don't pray we work</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeTickets;
