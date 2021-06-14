import React, { useEffect, useState } from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Logo from "../Pictures/Logo.svg";
// import NavData from "./NavData";
// import link from "react-router-dom";
import { useHistory } from "react-router-dom";

export const HostNavbar = () => {
  let history = useHistory();

  return (
    <div>
      <div>
        <img className="header__icon" src={Logo} alt="logo" />
      </div>
    </div>
  );
};
