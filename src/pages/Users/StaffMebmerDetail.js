import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import destaImage from "../../assets/staff_images/destaImage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    color: DEEP_BLUE_COLOR,
  },
  profileContainer: {
      justifyContent: "center"
  },
  profileText: {
      textAlign: "center"
  }
}));
const StaffMemberDetail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.profileContainer}>
        <Grid item xs={12} sm={6}>
          <img src={destaImage} />
        </Grid>
        <Grid item>
          <Grid container direction="column" className={classes.profileText} spacing={4}>
            <Grid item>
              <Typography variant="h6">AIPM Ethiopia Director</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h3">Dr. Desta Langena Letta</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Ethiopian AIPM Staff Member</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default StaffMemberDetail;
