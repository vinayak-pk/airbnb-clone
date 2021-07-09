import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import styles from "./HostingWorks.module.css";
import snap2 from "../Pictures/snap2.png";
import auntBanner from"../Pictures/auntBanner.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});
const HostingWorks = () => {
  const classes = useStyles();
  return (
    <div className={styles.mainCont1}>
      <div className={styles.textDisp1}>
        <h1 style={{ textAlign: "left" }}>How hosting works</h1>
      </div>
      <div className={styles.disp2Data1}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="280"
              image="https://a0.muscache.com/im/pictures/96817f1c-7cf6-4546-8ef5-fcfbdccee208.jpg?im_q=highq&im_w=480"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Link>Why host on Airbnb?</Link>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="280"
              image="https://a0.muscache.com/im/pictures/79af75f0-0141-4d42-bc76-844f8f837672.jpg?im_q=highq&im_w=480"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Link>How to get started on Airbnb</Link>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="280"
              image="https://a0.muscache.com/im/pictures/9ea83c87-011f-4fc5-8e81-8d0ddaf517d7.jpg?im_q=highq&im_w=480"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Link>How to earn monry on Airbnb?</Link>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="280"
              image="https://a0.muscache.com/im/pictures/29ec6860-47ce-4e35-9fc8-599f54566e49.jpg?im_q=highq&im_w=480"
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Link>Is my space good fit for Airbnb?</Link>
          </CardActions>
        </Card>
      </div>
      <div>
        <img src={snap2} alt="log04" />
      </div>
      <div>
        <img src={auntBanner} alt="log05" />
      </div>
    </div>
  );
};

export default HostingWorks;
