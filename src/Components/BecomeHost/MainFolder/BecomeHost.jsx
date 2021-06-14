import React, { useEffect } from "react";
import HostBanner from "../HostBanner/HostBanner";
import { HostNavbar } from "../HostNavbar/HostNavbar";
import FixedNavbar from "../HostNavbar/FixedNavbar";
const BecomeHost = () => {
  const [showChild, setShowChild] = React.useState(false);
  const [navbar, setNavbar] = React.useState(false);

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

  const changeBackground = () => {
    if (window.scrollY >= 480) {
      // console.log(window.scrollY);
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      {/* <HostNavbar /> */}
      <HostBanner />
      {showChild && <FixedNavbar />}
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
      <div>ksnknksnkkkdn</div>
    </div>
  );
};

export default BecomeHost;
