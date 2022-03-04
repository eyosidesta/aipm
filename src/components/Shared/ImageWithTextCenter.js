import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { WHITE_COLOR } from "../../utils/constants/colors";

const useStyles = makeStyles((theme) => ({
    image: {
        maxHeight: `75vh`,
        width: "100%",
        marginBottom: 30,
      },
    imageContainer: {
        position: "relative",
        // textAlign: "center",
        color: WHITE_COLOR,
      },
      aipmText: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        height: "0%",
        margin: "auto",
        top: 0,
        left: 0,
        bottom: 190,
        right: 0,
        zIndex: 51,
      },
}));

const ImageWithTextCenter = ({styles}) => {
    // const three = "75"
    const classes = useStyles();
    return (
        <div className={classes.imageContainer}>
        <img style={{borderRadius: styles.borderRadius, maxHeight: `${styles.height}vh`, paddingLeft: `${(100 - styles.width) / 2 }%`, width: `${styles.width}%`, marginBottom: 30}} src={styles.backgroundImage} alt="aipm image" />
        <div className={classes.aipmText}>
          <Typography variant="h4">{styles.title}</Typography>
          <Typography variant="h6">
            {styles.description}
          </Typography>
        </div>
      </div>
    )
}

export default ImageWithTextCenter;