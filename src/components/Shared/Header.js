import React from "react";
import aipm_logo from "../../assets/AIPM_LOGO.png";
import { DEEP_BLUE_COLOR } from "../../constants/colors";
import GridAPI from "./GridAPI";
import { makeStyles, Grid, Avatar, Typography, List } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

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
  const listItems = [
    {
      text: "Ministries",
      defaultIcon: "fa fa-caret-down textColorn",
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
      isIconDown: true,
    },
    {
      text: "Testimonies",
      defaultIcon: false,
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
      isIconDown: true,
    },
    {
      text: "News",
      defaultIcon: false,
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
      isIconDown: true,
    },
    {
      text: "Resources",
      defaultIcon: false,
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
      isIconDown: true,
    },
    {
      text: "Support",
      defaultIcon: "fa fa-caret-down textColor",
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
      isIconDown: true,
    },
    {
      text: "About Us",
      defaultIcon: "fa fa-caret-down textColor",
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
      isIconDown: true,
    },
  ];

  const handleToggle = (val) => {
    val.isIconDown = !val.isIconDown
    console.log(" list item is on", val);
  };
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
                  key={index}
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
