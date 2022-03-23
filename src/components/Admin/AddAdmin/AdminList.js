import React from "react";
import { makeStyles } from "@material-ui/core";
import {
    DEEP_BLUE_COLOR,
    WHITE_COLOR,
    BACKGROUND_COLOR,
  } from "../../../utils/constants/colors";
import AdminListItem from "./AdminListItem";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: WHITE_COLOR,
        border: "solid",
        borderRadius: 5,
        color: DEEP_BLUE_COLOR,
      },
      listItemContainer: {
          width: "96%",
          paddingLeft: "2%",
          paddingRight: "2%"
      }
}))

const AdminList = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.listItemContainer}>
            <AdminListItem />
            </div>
        </div>
    )
}

export default AdminList