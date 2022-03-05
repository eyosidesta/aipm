import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    color: DEEP_BLUE_COLOR,
  },
  valueTextContainer: {
    textAlign: "center",
  },
}));

const Values = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.valueTextContainer}>
        <Typography variant="h4">Values</Typography>
        <Typography vairant="h6">
          Ambaricho International Prayer and Mission Movement
        </Typography>
        <Typography variant="caption">
          as a mission movement mobilization movement team we believe that the
          following are our values
        </Typography>
      </div>
      <ValueDetail
        title="Prayer"
        detailOne="detail one"
        detailTwo="detail two"
      />
    </div>
  );
};

export default Values;

const ValueDetail = ({ title, detailOne, detailTwo }) => {
  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <Typography>{detailOne}</Typography>
      <Typography>{detailTwo}</Typography>
    </div>
  );
};
