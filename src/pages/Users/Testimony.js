import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import backgroundImage from "../../assets/testimony_image.png";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";

const useStyles = makeStyles((theme) => ({
  root: {
    color: DEEP_BLUE_COLOR,
  },
  title: {
    marginTop: 30,
    textAlign: "center",
  },
  detail: {
    marginTop: 30,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
}));
const Testimony = () => {
  const classes = useStyles();
  const styles = {
    width: 80,
    height: 60,
    backgroundImage: backgroundImage,
    title: "Testimonies",
    detail: {
      description: "",
      titleFont: "h6",
      descriptionFont: "body2",
      color: DEEP_BLUE_COLOR,
    },
    borderRadius: 15,
  };

  return (
    <div className={classes.root}>
      <ImageWithTextCenter styles={styles} />
      <Typography variant="h5" className={classes.title}>
        Testimonies
      </Typography>
      <Typography variant="body2" className={classes.detail}>
        During the 2nd week of October 2021, AIPM held its annual Missions
        Conference in Durame. This year we also hosted 100 university students
        and a few high school students that are very interested in serving the
        Lord as missionaries. In total 250 attended the conference. The
        conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin. During the 2nd week of October 2021, AIPM held its annual
        Missions Conference in Durame. This year we also hosted 100 university
        students and a few high school students that are very interested in
        serving the Lord as missionaries. In total 250 attended the conference.
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin.
      </Typography>
      <Typography variant="h6" className={classes.title}>
          Missionaries Testimony
      </Typography>
    </div>
  );
};
export default Testimony;
