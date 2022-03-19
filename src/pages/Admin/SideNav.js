import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  Paper,
  Grid,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import AddAdmin from "./AddAdmin";
import AdminNews from "./AdminNews";
import AdminStaff from "./AdminStaff";
import AdminTestimony from "./AdminTestimony";
import AdminUniversityStudents from "./AdminUniversityStudents";
import DashBoard from "./DashBoard";
import MyProfile from "./MyProfile";
import SideNavTableContent from "../../components/Admin/SideNav/SideNavTableContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 40,
    paddintBottom: 40,
    marginLeft: 40,
    marginRight: 40,
  },
}));
const SideNav = () => {
  const classes = useStyles();
  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  const large = useMediaQuery(theme.breakpoints.down("lg"));
  const items = [
    {
      id: 1,
      title: "Dashboard",
      url: "/",
      onClick: () => console.log("wow kasu onclick ", 1),
    },
    {
      id: 2,
      title: "Add Admin",
      url: "/add-admin",
      onClick: () => console.log("wow kasu onclick ", 2),
    },
    {
      id: 3,
      title: "Testimony",
      url: "/testimony",
      onClick: () => console.log("wow kasu onclick ", 3),
    },
    {
      id: 4,
      title: "News",
      url: "/news",
      onClick: () => console.log("wow kasu onclick ", 4),
    },
    {
      id: 5,
      title: "University Students",
      url: "/university-students",
      onClick: () => console.log("wow kasu onclick ", 5),
    },
    {
      id: 6,
      title: "AIPM Projects",
      url: "/aipm-projects",
      onClick: () => console.log("wow kasu onclick ", 6),
    },
    {
      id: 7,
      title: "AIPM Staffs",
      url: "/aipm-staffs",
      onClick: () => console.log("wow kasu onclick ", 7),
    },
    {
      id: 8,
      title: "AIPM Missionaries",
      url: "/aipm-missionaries",
      onClick: () => console.log("wow kasu onclick ", 8),
    },
    {
      id: 9,
      title: "AIPM Supporters",
      url: "/aipm-supporters",
      onClick: () => console.log("wow kasu onclick ", 9),
    },
    {
      id: 10,
      title: "My Profile",
      url: "/my-profile",
      onClick: () => console.log("wow kasu onclick ", 10),
    },
  ];
  const data = {
      icon: "fa fa-envelope"
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
        >
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {items.map((item, index) => {
                  return <SideNavTableContent key={index} data={item} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={12} md>
          <Routes>
            <Route path="/" exact element={<DashBoard data={data} />} />
            <Route path="/add-admin" exact element={<AddAdmin />} />
            <Route path="/news" exact element={<AdminNews />} />
            <Route path="/testimony" exact element={<AdminTestimony />} />
            <Route path="/university-students" exact element={<AdminUniversityStudents />}/>
            <Route path="/aipm-staffs" exact element={<AdminStaff />} />
            <Route path="/my-profile" exact element={<MyProfile />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideNav;
