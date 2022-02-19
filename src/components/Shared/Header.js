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
    paddingLeft: "10%"
  },
  alignCenter: {
    alignItems: "center"
  }
}));
function Header() {
  const classes = useStyles();
  //   const colorVal = theme();
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
          >
            <List component="button" variant="body2" onClick={() => {
              console.log("kasuna gete");
            }}>
            <GridAPI text="Ministries" icon="dropDown" variant="body2" iconSize="small"/>
            </List>
            <GridAPI text="Testimonies" icon={false}/>
            <GridAPI text="News" icon={false}/>
            <GridAPI text="Resources" icon={false}/>
            <GridAPI text="Support" icon="dropDown" variant="body2" iconSize="small"/>
            <GridAPI text="About Us" icon="dropDown" variant="body2" iconSize="small"/>
            {/* <Grid item>
              <Typography variant="caption" className={classes.paper}>
                Ministries <Icon className={classes.alignCenter}>star</Icon>
                
              </Typography>
              
            </Grid> */}
            {/* <Grid item>
              <Typography variant="body2" className={classes.paper}>
                Ministries
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className={classes.paper}>
                Ministries
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className={classes.paper}>
                Ministries
              </Typography>
            </Grid> */}
          </Grid>
        </Grid>
       </Grid>
     </Grid>
  );
}
export default Header;
