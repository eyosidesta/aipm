import React from "react";
import aipm_logo from "../../assets/AIPM_LOGO.png";
import { DEEP_BLUE_COLOR } from "../../constants/colors";
import GridAPI from "./GridAPI";
import { makeStyles, Grid, Avatar, Typography, List } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
// import { useNavigate, BrowserRouter as Router, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "2%",
    paddingTop: "2%",
  },
  paper: {
    color: DEEP_BLUE_COLOR,
  },
  lists: {
    paddingLeft: "10%",
  },
  alignCenter: {
    alignItems: "center",
  },
}));
function Header() {
  const classes = useStyles();

  const handleNavigation = (route) => {
  };
  const handleToggle = (listItem) => {
    !listItem.menu && console.log("working here wondata");
  };
  const menuItemsClicked = (route) => {
    handleNavigation(route);
  };

  const listItems = [
    {
      id: 1,
      text: "Ministries",
      defaultIcon: "fa fa-caret-down textColorn",
      newIcon: "fa fa-caret-up textColor",
      menu: [
        { name: "profile", onMenuClick: () => menuItemsClicked("profile") },
        { name: "two", onMenuClick: () => menuItemsClicked("two") },
        { name: "three", onMenuClick: () => menuItemsClicked("three") },
      ],
      variant: "body2",
      iconSize: "small",
    },
    {
      id: 2,
      text: "Testimonies",
      defaultIcon: false,
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
    },
    {
      id: 3,
      text: "News",
      defaultIcon: false,
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
    },
    {
      id: 4,
      text: "Resources",
      defaultIcon: false,
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
    },
    {
      id: 5,
      text: "Support",
      defaultIcon: "fa fa-caret-down textColor",
      newIcon: "fa fa-caret-up textColor",
      menu: [
        {
          name: "ethioSupport",
          onMenuClick: () => menuItemsClicked("ethioSupport"),
        },
        {
          name: "usaSupport",
          onMenuClick: () => menuItemsClicked("useSupport"),
        },
        {
          name: "canadaSupport",
          onMenuClick: () => menuItemsClicked("canadaSupport"),
        },
      ],
      variant: "body2",
      iconSize: "small",
    },
    {
      id: 6,
      text: "About Us",
      defaultIcon: "fa fa-caret-down textColor",
      newIcon: "fa fa-caret-up textColor",
      menu: [
        { name: "who we are", onMenuClick: () => menuItemsClicked("whoweare") },
        { name: "contactus", onMenuClick: () => menuItemsClicked("contactus") },
        { name: "About Us", onMenuClick: () => menuItemsClicked("aboutus") },
      ],
      variant: "body2",
      iconSize: "small",
    },
  ];

  return (
    <Grid className={classes.root} container>
      <Grid
        container
        justifyContent="flex-start"
        spacing={2}
        style={{ margin: 0, width: "100%" }}
      >
        <Grid item>
          <Avatar alt="AIPM" src={aipm_logo} />
        </Grid>
        <Grid item>
          <Typography variant="body2" className={classes.paper}>
            Ambaricho International
          </Typography>
          <Typography variant="body2" className={classes.paper}>
            and Prayer Movement
          </Typography>
        </Grid>
        <Grid container item sm xs={12}>
          <Grid
            container
            direction="row"
            spacing={4}
            alignItems="center"
            className={classes.lists}
            style={{ margin: 0, width: "100%" }}
          >
            {listItems.map((item, index) => {
              return (
                <GridAPI
                  key={item.id}
                  listItem={item}
                  handleToggle={() => handleToggle(item)}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Header;
