import React from "react";
import "./Live.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const Live = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <div className="mainCont">
        <div className="textDisp">
          <h1 style={{ textAlign: "left" }}>Live anywhere</h1>
        </div>
        <div className="disp2Data">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="280"
                image="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Link>Outdoor getaways</Link>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="280"
                image="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=240"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Link>Unique Stays</Link>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="280"
                image="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=240"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Link>Entire Homes</Link>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="280"
                image="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=240"
                title="Contemplative Reptile"
                />
            </CardActionArea>
                <CardActions>
                  <Link>Pets allowed</Link>
                </CardActions>
          </Card>
        </div>
        <div className="cont" >
          <div className="banner">
          <div className="banner__info">
            <span>The Greatest Outdoors</span>
            <p>Wishlist curated by Airbnb</p>
            <Button onClick={() => history.push()} variant="outlined">
              Get Inspired
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
