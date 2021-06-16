import React from "react";
import styles from "./Banner.module.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();

  return (
    <div className={styles.banner}>
      <div className={styles.banner__info}>
        <img
          src="https://airbnb-photos.s3.amazonaws.com/pictures/Storefronts/may2021_HP_clearLogo_en_l/original/9850ff2c-bd0b-4f37-9d33-84f10a566045.svg"
          alt="icon2"
        />
        <br />
        <span>
          Introducing 100+
          <br /> upgrades across
          <br /> our entire service
        </span>
        <br />
        <Button onClick={() => history.push()} variant="outlined">
          Learn What's new
        </Button>
      </div>
    </div>
  );
}

export default Banner;
