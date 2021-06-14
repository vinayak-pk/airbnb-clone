import React, { useEffect } from "react";
import HostBanner from "../HostBanner/HostBanner";
import FixedNavbar from "../HostNavbar/FixedNavbar";
import HostCarousel from "../HostCarousel/HostCarousel";
import HostingWorks from "../HostingWorks/HostingWorks";
import { Footer } from "../Footer/Footer";
const BecomeHost = () => {
  const [showChild, setShowChild] = React.useState(false);
  // const [navbar, setNavbar] = React.useState(false);

  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        // console.log(window.pageYOffset);
        setShowChild(true);
      } else {
        setShowChild(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  // const changeBackground = () => {
  //   if (window.scrollY >= 480) {
  //     // console.log(window.scrollY);
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // window.addEventListener("scroll", changeBackground);
  return (
    <div className="mainBody">
      <HostBanner />
      {showChild && <FixedNavbar />}
      <HostCarousel />
      <HostingWorks />

      <Footer />
    </div>
  );
};

export default BecomeHost;
