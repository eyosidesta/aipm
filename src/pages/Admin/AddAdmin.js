import React, { useState } from "react";
import { Grid, Icon, makeStyles, Typography } from "@material-ui/core";
import { DEEP_BLUE_COLOR, WHITE_COLOR } from "../../utils/constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
      color: DEEP_BLUE_COLOR
  },
  dropDownIcon: {
      marginTop: 2,
      paddingLeft: 10
  },
  titleContainer: {
      border: "solid",
      width: 170,
      textAlign: "center",
      backgroundColor: WHITE_COLOR,
      paddingLeft: "2%",
      borderRadius: 5
  }
}));

const AddAdmin = () => {
  const classes = useStyles();
  const [iconName, setIconName] = useState("star");
  return (
    <div className={classes.root}>
      <Grid container className={classes.titleContainer}>
          <Grid item>
        <Typography variant="h6">Add Admin</Typography>
        </Grid>
        <Grid item className={classes.dropDownIcon}>
        <Icon fontSize="small" className="fa fa-caret-down" style={{color: "red", zIndex: 100}} />
        {/* <Icon>{iconName}</Icon> */}
        </Grid>
        </Grid>
    </div>
  );
};

export default AddAdmin;
