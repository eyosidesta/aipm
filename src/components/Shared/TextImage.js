import React, { useState } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import ImageFirst from "./TextImageComponents/ImageFirst";
import TextFirst from "./TextImageComponents/TextFirst";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    height: 200,
    width: 400,
  },
}));

const TextImage = ({ data, nextVal }) => {
  const [fixed, setFixed] = useState(false);
  const classes = useStyles();
  return (
    <Container>
      <Grid className={classes.root}>
        {!fixed ? (
          <>
            {nextVal % 2 == 0 ? (
                <ImageFirst data={data} />
            ) : (
                <TextFirst data={data} />
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
