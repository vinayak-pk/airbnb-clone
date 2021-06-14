import React from "react";
import  "./Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Logo from "../Pictures/Logo.svg";

const HostBanner = () => {
  const history = useHistory();
  return (
    <div className="banner">
      <div>
        <img className="header__icon" src={Logo} alt="logo" />
      </div>
      <div className="banner__info">
        <Button onClick={() => history.push()} variant="outlined">
        Get Started
        </Button>
      </div>
    </div>

  );
};

export default HostBanner;
