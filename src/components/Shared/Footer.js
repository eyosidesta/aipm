import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { FOOTER_COLOR } from "../../constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: FOOTER_COLOR,
    minHeight: "30vh",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div styles={{}} className={classes.root}>
      <Grid container style={{ textAlign: "center", justifyContent: "start" }}>
        <Grid item container xs spacing={3}>
          <Grid item>Good</Grid>
        </Grid>
        <Grid item container xs spacing={3}>
          <Grid item>second Good</Grid>
        </Grid>
        <Grid item container xs spacing={3}>
          <Grid item>third Good</Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
