import React, { useEffect } from "react";
import { loadCSS } from 'fg-loadcss';
import { Grid, Typography, makeStyles, Icon, Link } from "@material-ui/core";
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

  }
}));
function GridAPI({ text, variant, icon, iconSize }) {
  const classes = useStyles();
  useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, [])
  return (
    // <Grid
    //   container
    //   className={classes.root}
    //   justifyContent="flex-start"
    //   alignItems="center"
    //   spacing={space}
    // >
    <>
    <Grid className={classes.root}>
        <Typography variant={variant} className={classes.textColor}>
          <Link component>{text}</Link>
          </Typography>
        
    </Grid>
    {icon ? <Grid>
      <Icon fontSize={iconSize} style={{paddingLeft: "2%", paddingTop: "10%", color: `${DEEP_BLUE_COLOR}`}} className="fa  fa-caret-down textColor" />
      {/* <Icon fontSize="small" className={classes.iconPos}>{icon}</Icon> */}
      </Grid> : <></>}
    
     {/* </Grid> */}
    </>
  );
}

export default GridAPI;
