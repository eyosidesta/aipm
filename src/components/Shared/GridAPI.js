import React, { useEffect, useState } from "react";
import { loadCSS } from "fg-loadcss";
import {
  Grid,
  Typography,
  makeStyles,
  Icon,
  Link,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  textColor: {
    color: "DEEP_BLUE_COLOR",
  },
  iconPos: {
    paddingLeft: "12%",
  },
}));
function GridAPI({listItem, handleToggle }) {
  const classes = useStyles();
  const [iconPossion, setIconPossion] = useState(listItem.isIconDown);
  console.log("icon posision", iconPossion)
  const toggleHandler = () => {
    handleToggle(listItem)
  };
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <>
      <Grid className={classes.root}>
        <Typography onClick={toggleHandler} variant={listItem.variant} className={classes.textColor}>
          {listItem.text}
        </Typography>
      </Grid>
      {listItem.defaultIcon ? (
        <Grid>
          {iconPossion ? (
            <Icon
            fontSize={listItem.iconSize}
            onClick={toggleHandler}
            style={{
              paddingLeft: "2%",
              paddingTop: "10%",
              color: `${DEEP_BLUE_COLOR}`,
            }}
            className={listItem.defaultIcon}
          />
          ) : (
            <Icon
              fontSize={listItem.iconSize}
              onClick={toggleHandler}
              style={{
                paddingLeft: "2%",
                paddingTop: "10%",
                color: `${DEEP_BLUE_COLOR}`,
              }}
              className={listItem.newIcon}
            />
          )}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
}

export default GridAPI;
