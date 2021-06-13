import React, { useEffect, useState } from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Logo from "./Pictures/Logo.svg";
// import NavData from "./NavData";
// import link from "react-router-dom";
import { useHistory } from "react-router-dom";

export const HostNavbar = () => {
  const [showChild, setShowChild] = useState(true);
  const [navbar, setNavbar] = useState(false);
  let history = useHistory();

  const disp = () => {
    setShowChild(true);
  };

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 170) {
        setShowChild(false);
      } else {
        setShowChild(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div>
      <div className={navbar ? "heading active" : "heading"}>
        <div>
          <img className="header__icon" src={Logo} alt="logo" />
        </div>
        {showChild ? (
          <div className="BannerButtonDiv">
            <button className="BannerButton">Get hStarted</button>
          </div>
        ) : (
          <button onClick={disp} className="header__right ">
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};
