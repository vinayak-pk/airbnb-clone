import React, { useState } from "react";
import styles from "./Banner.module.css";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.banner__search}>
          {/* {showSearch && <Search />} */}

          {/* <Button
            onClick={() => setShowSearch(!showSearch)}
            className={styles.banner__searchButton}
            variant="outlined"
          >
            {showSearch ? "Hide" : "Search Dates"}
          </Button> */}
        </div>
        <div className={styles.banner__info}>
          <img
            src="https://airbnb-photos.s3.amazonaws.com/pictures/Storefronts/may2021_HP_clearLogo_en_l/original/9850ff2c-bd0b-4f37-9d33-84f10a566045.svg"
            alt="icon2"
          />
          <span>Introducing 100+ upgrades across our entire service</span>
          <Button onClick={() => history.push()} variant="outlined">
            Learn What's new
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
