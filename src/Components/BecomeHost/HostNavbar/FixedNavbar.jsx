import React from "react";
import styles from "./Nav.module.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Logo2 from "../Pictures/Logo2.svg";
const FixedNavbar = () => {
  const history = useHistory();
  return (
    
    <div className={styles.header}>
      <div>
        <img className={styles.header__icon} src={Logo2} alt="logo" />
      </div>
      <div className={styles.header__right}>
        <Button onClick={() => history.push()} variant="outlined">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default FixedNavbar;
