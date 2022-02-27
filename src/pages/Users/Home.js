import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Header from "../../components/Shared/Header";
import { BACKGROUND_COLOR } from "../../constants/colors";

const useStyles = makeStyles(theme => ({
    backgroundColor: {
        background: BACKGROUND_COLOR,
    }
}))
function Home() {
    const classes = useStyles();
  return (
    <div className={classes.backgroundColor}>
    </div>
  );
}
export default Home;
