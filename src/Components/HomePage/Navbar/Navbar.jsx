import React, { useEffect, useState } from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import UserClick from "./UserClick";
import Logo from "./Logo.svg";
import NavData from "./NavData";
import Banner from "../Banner/Banner";
// import ScrollToTop from "react-scroll-to-top";

export const Navbar = () => {
  const [showChild, setShowChild] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const disp = () => {
    setShowChild(true);
  };

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 70) {
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
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
     
      <div className={navbar ? "heading active" : "heading"}>
        <div>
          <img className="header__icon" src={Logo} alt="logo" />
        </div>
        {!showChild ? (
          <div onClick={disp} className="header__center ">
            Start your search
            <SearchIcon />
          </div>
        ) : (
          <NavData />
        )}

        <div className="header__right">
          <p>Become a host</p>
          <LanguageIcon />
          <UserClick />
        </div>
      </div>
      <Banner />
    </>
  );
};
