import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import NavChild from "../Navbar/NavChild";
import { Link, animateScroll as scroll } from "react-scroll";

export const HomePage = () => {
  const [active, setActive] = useState(false);
  const handlSetActive = () => {
    setActive(true);
  };
  return (
    <div>
      <Navbar />
      {/* <Link>
        Your name
        <NavChild />
      </Link> */}
      <Banner />
    </div>
  );
};
