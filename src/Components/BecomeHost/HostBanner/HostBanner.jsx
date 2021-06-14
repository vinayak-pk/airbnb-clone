import React from "react";
import styles from "./Banner.module.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const HostBanner = () => {
  const history = useHistory();
  return (
    <div className={styles.banner}>
      <div className={styles.banner__info}>
        <Button onClick={() => history.push()} variant="outlined">
        Get Started
        </Button>
      </div>
    </div>
  );
};

export default HostBanner;
