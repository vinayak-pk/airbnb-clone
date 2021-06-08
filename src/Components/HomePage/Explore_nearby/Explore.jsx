import React from "react";
import "./Explore.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Explore = () => {
  const classes = useStyles();
  return (
    <div className="containing">
      <div className="dispData">
      <div className="textDisp">
        <h1 style={{ textAlign: "left" }}>Explore Nearby</h1>
      </div>
        <div className="disp1Data">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="scene"
                height="80"
                image="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
                title="scene"
              />
              <CardContent>
                <Typography gutterBottom component="h2">
                  Haldwani
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  4.5-hour drive
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="scene"
                height="80"
                image="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=240"
                title="scene"
              />
              <CardContent>
                <Typography gutterBottom component="h2">
                  Almora
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  7-hour drive
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="scene"
                height="80"
                image="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240"
                title="scene"
              />
              <CardContent>
                <Typography gutterBottom component="h2">
                  Dehradun
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  8-hour drive
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="scene"
                height="80"
                image="https://a0.muscache.com/im/pictures/087a8dff-a609-4084-86db-f45051c6f23a.jpg?im_q=medq&im_w=240"
                title="scene"
              />
              <CardContent>
                <Typography gutterBottom component="h2">
                  Lucknow
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  15-minute drive
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="disp1Data">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="scene"
                height="80"
                image="https://a0.muscache.com/im/pictures/3d541658-fb05-4316-af26-b8c1337fbe8c.jpg?im_q=medq&im_w=240"
                title="scene"
              />
              <CardContent>
                <Typography gutterBottom component="h2">
                  Haridwar
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  6.5-hour drive
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="scene"
                height="80"
                image="https://a0.muscache.com/im/pictures/f7ac6e57-65cb-446b-8631-331072463af4.jpg?im_q=medq&im_w=240"
                title="scene"
              />
              <CardContent>
                <Typography gutterBottom component="h2">
                  Noida
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  6-hour drive
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="scene"
                height="80"
                image="https://a0.muscache.com/im/pictures/331e6c6a-ba64-4b51-81bf-4d6c610d45a3.jpg?im_q=medq&im_w=240"
                title="scene"
              />
              <CardContent>
                <Typography gutterBottom component="h2">
                  Kanpur
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  1-hour drive
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="scene"
                height="80"
                image="https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240"
                title="scene"
              />
              <CardContent>
                <Typography gutterBottom component="h2">
                  Varanasi
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  5-hour drive
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Explore;
