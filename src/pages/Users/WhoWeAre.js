import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import Cards from "../../components/Shared/Card";
import TextFirst from "../../components/Shared/TextImageComponents/TextFirst";
import TitleContainer from "../../components/Users/WhoWeAre/TitleContainer";
import whoWeAreImage from "../../assets/home_image_two.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "90%",
    paddingLeft: "5%",
    paddingRight: "5%",
    color: DEEP_BLUE_COLOR,
  },
  missionText: {
    textAlign: "center",
    marginBlock: 10
  },
  descriptionOne: {
    marginBottom: 10
  }
}));

const WhoWeAre = () => {
  const classes = useStyles();

  const item = {
    id: 1,
    name: "Prayer",
    servicePlace: `This movement got its name, Ambaricho
    International Prayer and Missions 
   Movement (AIPM) because of its focus on
   prayer for revival and renewal of existing 
   churches`,
    specialThing: "The First AIPM Ministry Missionary",
    imageUrl: whoWeAreImage,
    // action: "Read More",
    descriptionOne: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year 
  we also hosted 100 university students and a few high school students that are very interested in serving 
  the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and
  Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta 
  and Justin. During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. 
  This year we also hosted 100 university students and a few high school students that are very interested
  in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by 
  Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from 
  both Dr. Desta and Justin.`,
    descriptionTwo: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year  we also hosted 100 university students and a few high 
  school students that are very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and 
  Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, 
  AIPM held its annual Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are very interested
  in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from 
  AIPM USA. The following is the report from both Dr. Desta and Justin.`,
  }
  return (
    <div className={classes.root}>
      <TitleContainer />
      <Typography variant="h6" className={classes.missionText}>
        Our Mission
      </Typography>
      <Typography variant="body2" className={classes.descriptionOne}>
        The Ambaricho Prayer and Mission Movement (AIPM)s a Prayer and Mission
        sending organization that is registered as a Non-Profit Charitable
        Organization in Ethiopia. AIPM is also registered in the United States
        as a 501 c3 Charitable Organization as the Ambaricho Prayer and Mission
        Movement USA (AIPM USA).
      </Typography>
      <Typography variant="body2">
        Our mission in Ethiopia is to support indigenous Ethiopian Missionaries
        by prayer, support and training. AIPM is first a prayer ministry and 2nd
        a mission sending ministry. The primary mission of our missionaries is
        to share the gospel with the 90+ million Ethiopians that do not worship
        Jesus Christ as Lord and Savior. In addition, we disciple new believers,
        plant churches and provide physical help such as food to the needy. The
        mission of AIPM USA is to support AIPM through prayer, training and
        financial help the Ethiopian Missionaries supported by AIPM.
      </Typography>
      <Cards data={item}/>
    </div>
  );
};

export default WhoWeAre;
