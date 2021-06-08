import React from "react";
import "./Discover.css";
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
const Discover = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <div className="mainCont2">
        <div className="textDisp2">
          <h1 style={{ textAlign: "left" }}>Discover Experiences</h1>
          <h3 style={{ textAlign: "left" }}>
            Unique activities with local experts – in person or online.
          </h3>
        </div>
        <div className="disp3Data">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="380"
                image="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Link>Featured collection: Wanderlust</Link>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="380"
                image="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=320"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Link>Online Experiences</Link>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="380"
                image="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=240"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardActions>
              <Link>Experiences</Link>
            </CardActions>
          </Card>
        </div>
        <div className="cont2">
          <div className="banner2">
            <div className="banner__info2">
              <span>Become a Host</span>
              <p>
                Earn extra income and unlock new opportunities by sharing your
                space.
              </p>
              <Button onClick={() => history.push()} variant="outlined">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
