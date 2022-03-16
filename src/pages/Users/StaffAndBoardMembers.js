import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@material-ui/core";
import {
  getStaffMembers,
  getStaffMember,
} from "../../utils/ApiService/staff.members";
import {
  getStaffMembersAction,
  getStaffMemberAction,
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import aberashImage from "../../assets/staff_images/avater.png";
import bekeleImage from "../../assets/staff_images/bekeleImage.png";
import bobImage from "../../assets/staff_images/bobImage.png";
import destaImage from "../../assets/staff_images/destaImage.png";
import endashawImage from "../../assets/staff_images/endeshawImage.png";
import eyosiasImage from "../../assets/staff_images/eyosiasImage.png";
import hollieImage from "../../assets/staff_images/hollieImage.png";
import jeffImage from "../../assets/staff_images/jeffImage.png";
import justinImage from "../../assets/staff_images/jusintImage.png";
import kalebImage from "../../assets/staff_images/kalebImage.jpg";
import larryImage from "../../assets/staff_images/larryImage.png";
import maiImage from "../../assets/staff_images/maiImage.png";
import nancyImage from "../../assets/staff_images/nancyImage.png";
import seteveImage from "../../assets/staff_images/steveImage.png";
import tamiruImage from "../../assets/staff_images/tamiruImageTwo.png";
import tekalignImage from "../../assets/staff_images/tekalignImage.png";
import tesemaImage from "../../assets/staff_images/avater.png";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";
import StaffCardContainer from "../../components/Users/StaffAndBoardMembers/StaffCardContainer";
import staffImage from "../../assets/staff_images/staffImage.png";
import zeniImage from "../../assets/staff_images/zeniImage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    color: DEEP_BLUE_COLOR,
  },
  staffImageContainer: {
    width: "90%",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  aipmStaffText: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  staffCardContainer: {
    width: "85%",
  },
  circularProgress: {
    textAlign: "center",
  },
}));

const StaffAndBoardMembers = () => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const staffsState = useSelector((state) => state.staffmembers);
  const staffState = useSelector((state) => state.staffMember);

  const theme = useTheme();

  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const items = [
    {
      id: 1,
      name: "Dr. Desta Langena",
      servicePlace: "AIPM Ethiopia Director",
      place: "Durame, Ethiopia",

      imageUrl: destaImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
          (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
          of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
          (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
          of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
          (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
          of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 2,
      name: "Zenebech Oushe",
      servicePlace: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: zeniImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 3,
      name: "Tekalign Daniel",
      servicePlace: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: tekalignImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 4,
      name: "Tamiru Langena",
      servicePlace: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: tamiruImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 5,
      name: "Tesema Tesfaye",
      servicePlace: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: tesemaImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 6,
      name: "Aberash Adore",
      servicePlace: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: aberashImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 7,
      name: "Kaleb Ayele",
      servicePlace: "AIPM Ethiopia Board Member",
      place: "Addis Ababa, Ethiopia",

      imageUrl: kalebImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 8,
      name: "Roberth Hogarth",
      servicePlace: "AIPM USA Board Chairman",
      place: "Las Vegas, USA",

      imageUrl: bobImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 9,
      name: "David Mai",
      servicePlace: "AIPM USA Vice Board Chairman",
      place: "Portland, Oregon, USA",

      imageUrl: maiImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 10,
      name: "Justin Slemp",
      servicePlace: "AIPM USA Board Member",
      place: "Portland, Oregon, USA",

      imageUrl: justinImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 11,
      name: "Jeff Stetten",
      servicePlace: "AIPM Board Member Secretary Treasure",
      place: "Las vegas, USA",

      imageUrl: jeffImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 12,
      name: "Endashaw Areko",
      servicePlace: "AIPM USA Board Member",
      place: "Portland, Oregon, USA",

      imageUrl: endashawImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 13,
      name: "Larry Dombrow",
      servicePlace: "AIPM USA Board Member",
      place: "Las Vegas, USA",

      imageUrl: larryImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 14,
      name: "Dr. Bekele Shanko",
      servicePlace: "AIPM USA Board Member",
      place: "Las Vegas, USA",

      imageUrl: bekeleImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 15,
      name: "Steve Gundy",
      servicePlace: "AIPM USA Staff - Administration Newsletter and Prayer",
      place: "Las Vegas, USA",

      imageUrl: seteveImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 16,
      name: "Nancy Mcmillan",
      servicePlace: "AIPM USA Staff - Administration Giving and Support",
      place: "Las Vegas, USA",

      imageUrl: nancyImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 17,
      name: "Hollie Mendenhall",
      servicePlace:
        "AIPM USA - Board Member Webmaster/ Social Media Coordinator",
      place: "Las Vegas, USA",

      imageUrl: hollieImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 18,
      name: "Eyosias Desta Langena",
      servicePlace: "AIPM Ethiopia Teach Team Leader",
      place: "Addis Ababa, Ethiopia",

      imageUrl: eyosiasImage,
      action: "Read More",

      ethiopianStaff: "true",

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
  ];
  const fetchStaffMembers = async () => {
    setIsLoading(true);
    const resp = await getStaffMembers();
    setIsLoading(false);
    // dispatch(getStaffMembers(resp.data));
    dispatch(getStaffMembersAction(items));
    console.log("staff members", staffsState);
  };
  useEffect(() => {
    fetchStaffMembers();
  }, []);

  const styles = {
    width: 80,
    height: 75,
    backgroundImage: staffImage,
    title: "Staff and Board Members",
    detail: {
      description: "",
      titleFont: "h5",
      descriptionFont: "h6",
    },
    borderRadius: 5,
  };
  return (
    <div className={classes.root}>
      <ImageWithTextCenter styles={styles} />
      <div className={classes.aipmStaffText}>
        <Typography variant="h5">
          {" "}
          Ambaricho International Prayer and Mission movement (AIPM)
        </Typography>
        <Typography variant="h6">
          Staff And Board Members In Ethiopia and USA
        </Typography>
      </div>
      {isLoading ? (
        <div className={classes.circularProgress}>
          <CircularProgress />
        </div>
      ) : (
        <div style={{ paddingLeft: 30 }}>
          <div
            className={classes.staffCardContainer}
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
            <StaffCardContainer staffMembers={staffsState} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffAndBoardMembers;
