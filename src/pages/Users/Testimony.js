import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { getTestimonies } from "../../utils/ApiService/testimony.api";
import { getTestimoniesAction } from "../../store/actions";
import backgroundImage from "../../assets/testimony_image.png";
import CardContainer from "../../components/Users/Testimony/CardContainer";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";
import tamiruImage from "../../assets/ambaricho_mount.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  cards: {
    paddingLeft: 30,
  },
  cardContainer: {
    width: "85%",
  },
  circularProgress: {
    textAlign: "center",
  },
  circularColor: {
    color: DEEP_BLUE_COLOR,
  },
}));
const Testimony = () => {
  const classes = useStyles();
  const toggleModal = (id) => {
    console.log("modal is toogled id is ", id)
  }
  const items = [
    {
      name: "Aba Gole",
      servicePlace: "Missionary in Gambela",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl: tamiruImage,
      handleCardClick: () => toggleModal(1),
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
    },
    {
      name: "Ababa Wandaro",
      servicePlace: "Missionary In Bale",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl: tamiruImage,
      handleCardClick: () => toggleModal(2),
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
    },
    {
      name: "Desta Langena",
      servicePlace: "Missionary In Gojam",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl: tamiruImage,
      handleCardClick: () => toggleModal(3),
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
    },
    {
      name: "Tamiru Langena",
      servicePlace: "Missionary in Afar",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl: tamiruImage,
      handleCardClick: () => toggleModal(4),
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
    },
  ];
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

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(items ? items.slice(0, 3) : []);
  const dispatch = useDispatch();
  const testimoniesState = useSelector((state) => state.testimonies);

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    setIsLoading(true);
    const res = await getTestimonies();
    setIsLoading(false);
    dispatch(getTestimoniesAction(res.data));
    // setData(items.slice(0, 3));
  };

  const handleChange = (event, value) => {
    setData(items.slice((value - 1) * 3, value * 3));
  };
  const count =
    items.length / 3 - parseInt(items.length / 3) !== 0
      ? parseInt(items.length / 3) + 1
      : parseInt(items.length / 3);

  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));

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
      <div className={classes.cards}>
        <div
          className={classes.cardContainer}
          style={{
            paddingLeft: extraSmall
              ? "18%"
              : small
              ? "11%"
              : medium
              ? "9%"
              : "8%",
          }}
        >
          {isLoading ? (
            <div className={classes.circularProgress}>
              <CircularProgress className={classes.circularColor} />
            </div>
          ) : (
            <div>
              <CardContainer testimonies={items} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Testimony;
