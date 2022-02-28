import React, { useState } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import ImageFirst from "./TextImageComponents/ImageFirst";
import TextFirst from "./TextImageComponents/TextFirst";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    // padding: 10,
  },
}));

const TextImage = ({ data, nextVal }) => {
  const [fixed, setFixed] = useState(false);
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid className={classes.root}>
        {!fixed ? (
          <>
            {nextVal % 2 == 0 ? (
              <TextFirst data={data} />
            ) : (
              <ImageFirst data={data} />
            )}
          </>
        ) : (
          <ImageFirst data={data} />
        )}
      </Grid>
    </Container>
  );
};

export default TextImage;
