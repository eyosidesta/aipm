import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Header from "../../components/Shared/Header";
import { BACKGROUND_COLOR } from "../../constants/colors";
import backgroundImage from "../../assets/home_img.JPG";

const useStyles = makeStyles(theme => ({
    backgroundColor: {
        background: BACKGROUND_COLOR,
    },
    image: {
      minHeight: "10%",
      maxWidth: "100%"
    }
}))
function Home() {
    const classes = useStyles();
  return (
    <div className={classes.backgroundColor}>
      <img className={classes.image} src={backgroundImage} alt="aipm image"/>
      <div>Good Evening</div>
    </div>
  );
}
export default Home;
