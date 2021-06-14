import React from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
const FixedNavbar = () => {
  return (
    <div className="header__center ">
      Start your search
      <SearchIcon className="SearchIcon" />
    </div>
  );
};

export default FixedNavbar;
