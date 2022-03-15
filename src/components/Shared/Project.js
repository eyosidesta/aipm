import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ProjectImage from "../../assets/prayer_background.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  image: {
    textAlign: "center",
    height: 280,
    width: 400,
    marginBottom: 40,
    alignContent: "center"
  },
  firstParagraph: {
      width: "80%",
      paddingLeft: "10%",
      paddingRight: "10%",
      marginBottom: 30,
  },
}));

const Project = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        {data.title}
      </Typography>
      <div className={classes.image}>
        <img src={data.projectImage} className={classes.image} />
      </div>
      <Typography variant="body2" className={classes.firstParagraph}>
        {data.firstParagraph}
      </Typography>
      {data.projectImageLists.map((item, index) => {
          return (
              <Grid container key={index}>
                  <Grid item>good</Grid>
              </Grid>
          )
      })}
    </div>
  );
};

export default Project;
