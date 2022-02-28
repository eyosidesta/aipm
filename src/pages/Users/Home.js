import React from "react";
import { makeStyles } from "@material-ui/core";
import { BACKGROUND_COLOR } from "../../constants/colors";
import backgroundImage from "../../assets/home_new_img.png";
import logo from "../../assets/AIPM_LOGO.png";
import Pagination from '@material-ui/lab/Pagination';
import TextImage from "../../components/Shared/TextImage";




const useStyles = makeStyles((theme) => ({
  backgroundColor: {
    background: BACKGROUND_COLOR,
  },
  image: {
    maxHeight: "75vh",
    width: "100%",
    marginBottom: 30
  },
  pagination: {
    justifyContent: "center",
    paddingLeft: "33%",
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
      imageUrl: `${logo}`,
    },
    {
      title: "wining souls for chirst",
      detail: `He who wins souls is wise. Remember God draws the hearts of
      men and it’s our job to point people back to Him. Soul
      winning is a process and takes time. Sometimes, our most
      effective witnessing tool is our lifestyle. According to
      Proverbs 11:30, our life is a message of hope and light that
      both reflects and is a representation of Christ.`,
      imageUrl: `${logo}`,
    },
    {
      title: "wining souls for chirst",
      detail: `He who wins souls is wise. Remember God draws the hearts of
      men and it’s our job to point people back to Him. Soul
      winning is a process and takes time. Sometimes, our most
      effective witnessing tool is our lifestyle. According to
      Proverbs 11:30, our life is a message of hope and light that
      both reflects and is a representation of Christ.`,
      imageUrl: `${logo}`,
    }
    ,{
      title: "wining souls for chirst",
      detail: `He who wins souls is wise. Remember God draws the hearts of
      men and it’s our job to point people back to Him. Soul
      winning is a process and takes time. Sometimes, our most
      effective witnessing tool is our lifestyle. According to
      Proverbs 11:30, our life is a message of hope and light that
      both reflects and is a representation of Christ.`,
      imageUrl: `${logo}`,
    }
  ]
  return (
    <div className={classes.backgroundColor}>
      <div>
        <img className={classes.image} src={backgroundImage} alt="aipm image" />
      </div>
      {items.map((item, index) => {
        return (<TextImage key={index} nextVal={index} data={item} />)
      })}
      <Pagination className={classes.pagination} count={10} variant="outlined" shape="rounded" />
    </div>
  );
}
export default Home;
