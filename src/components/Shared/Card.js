import React from "react";
import {makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import { CARD_COLOR, DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import contentImage from "../../assets/prayer_image.png";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        color: DEEP_BLUE_COLOR,
        backgroundColor: CARD_COLOR
        // textAlign: "end"
    },
    media: {
        height: 150,
        textAlign: "start"
    },
    title: {
        // paddingLeft: -10
    },
    button: {
        textAlign: "end",
        width: "100%",
    }
}));

const Cards = ({testimony}) => {
    const classes = useStyles();
    // const handleToggle = () => {
    //     {testimony.handleCardClick}
    // }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={contentImage}
                />
                <CardContent>
                    <Typography variant="h6" className={classes.title}>{testimony.name}</Typography>
                    <Typography variant="body2">{testimony.servicePlace}</Typography>
                    {testimony.place && <Typography variant="caption">{testimony.place}</Typography> }
                    <Typography className={classes.button}>ReaD Testimony</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Cards;