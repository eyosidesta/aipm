import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import {
  BACKGROUND_COLOR,
  DEEP_BLUE_COLOR,
  WHITE_COLOR,
} from "../../utils/constants/colors";
import backgroundImage from "../../assets/home_new_img.png";
import homeImageOne from "../../assets/home_image_one.png";
import homeImageTwo from "../../assets/home_image_two.jpg";
import HomeTickets from "../../components/Users/Home/HomeTickets";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";
import TextImage from "../../components/Shared/TextImage";

const useStyles = makeStyles((theme) => ({
  root: {
    background: BACKGROUND_COLOR,
    color: DEEP_BLUE_COLOR,
  },
  image: {
    maxHeight: "75vh",
    width: "100%",
    marginBottom: 30,
  },
  prayerMovement: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  prayerTitle: {
    marginBottom: 10,
  },
  imageContainer: {
    position: "relative",
    // textAlign: "center",
    color: WHITE_COLOR,
  },
  aipmText: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    height: "0%",
    margin: "auto",
    top: 0,
    left: 0,
    bottom: 190,
    right: 0,
    zIndex: 51,
  },
  aipmTitle: {
    fontSize: "8vw",
    paddingBottom: 20,
  },
  aipmDetail: {
    fontSize: "4vw",
  },
  movementDescription: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  textImageContainer: {
    marginTop: 30
  }
}));
function Home() {
  const classes = useStyles();
  const items = [
    {
      title: "wining souls for chirst",
      detail: `He who wins souls is wise. Remember God draws the hearts of
      men and it’s our job to point people back to Him. Soul
      winning is a process and takes time. Sometimes, our most
      effective witnessing tool is our lifestyle. According to
      Proverbs 11:30, our life is a message of hope and light that
      both reflects and is a representation of Christ.`,
      imageUrl: `${homeImageOne}`,
    },
    {
      title: "wining souls for chirst",
      detail: `He who wins souls is wise. Remember God draws the hearts of
      men and it’s our job to point people back to Him. Soul
      winning is a process and takes time. Sometimes, our most
      effective witnessing tool is our lifestyle. According to
      Proverbs 11:30, our life is a message of hope and light that
      both reflects and is a representation of Christ.`,
      imageUrl: `${homeImageTwo}`,
    },
  ];

  const styles = {
    width: 100,
    height: 75,
    backgroundImage: backgroundImage,
    title: "AIPM",
    description: "Ambaricho International And Prayer Movement",
    borderRadius: 0,
  };
  const titleStyle = {
    textAlign: "center",
    marginBottom: 10,
  };
  return (
    <div className={classes.root}>
      <ImageWithTextCenter styles={styles} />
      <div className={classes.textImageContainer}>
      {items.map((item, index) => {
        return (
          <TextImage
            key={index}
            nextVal={index}
            data={item}
            styles={titleStyle}
          />
        );
      })}
      </div>
      <div className={classes.prayerMovement}>
        <Typography variant="h6" className={classes.prayerTitle}>
          Prayer and Mission Movement
        </Typography>
        <Typography variant="body2" className={classes.movementDescription}>
          Missionaries supported by AIPM serve in unreached areas of Ethiopia.
          In addition, we give support to a few missionaries serving in India,
          Pakistan and South Sudan.
          {/* </Typography>
        <Typography variant="body2"> */}
          This movement got its name, Ambaricho International Prayer and
          Missions Movement (AIPM) because of its focus on prayer for revival
          and renewal of existing churches
        </Typography>
      </div>
      <HomeTickets />
    </div>
  );
}
export default Home;
