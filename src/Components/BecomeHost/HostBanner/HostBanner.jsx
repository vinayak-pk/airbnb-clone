import React from "react";
import styles from "./Banner.module.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Logo from "../Pictures/Logo.svg";

const HostBanner = () => {
  const history = useHistory();
  return (
    <div className={styles.banner}>
      <div>
        <img className={styles.header__icon} src={Logo} alt="logo" />
      </div>
      <div className={styles.banner__info}>
        <Button onClick={() => history.push('/hosting')} variant="outlined">
        Get Started
        </Button>
      </div>
    </div>

  );
};

export default HostBanner;
