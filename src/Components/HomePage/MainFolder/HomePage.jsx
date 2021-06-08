import React from "react";
import { Navbar } from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Explore from "../Explore_nearby/Explore"
import { Footer } from "../Footer/Footer";
// import { Link, animateScroll as scroll } from "react-scroll";

export const HomePage = () => {
  // const [active, setActive] = useState(false);
  // const handlSetActive = () => {
  //   setActive(true);
  // };
  return (
    <div>
      <Navbar />
      <Banner />
      <Explore/>
      <Footer />
    </div>
  );
};
