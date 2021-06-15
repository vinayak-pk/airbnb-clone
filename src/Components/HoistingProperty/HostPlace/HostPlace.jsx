import React from "react";
import Button from "@material-ui/core/Button";
import Logo2 from "../Pictures/Logo2.svg";
import "./Hostplace.css";

const HostPlace = () => {
  return (
    <div className="containerHostPlace">
      <div className="dataContainer">
        <div className="subDataContainer1">
          <div>
            <img className="containerHostPlace__icon" src={Logo2} alt="logo" />
          </div>
          <div className="subDatatext">
            <h1>
              Where's your place <br />
              located?
            </h1>
          </div>
        </div>
        <div className="subDataContainer2">
          <div className="containerHostPlace__right ">
            <Button variant="outlined">Help</Button>
            <Button variant="outlined">Save and exit</Button>
          </div>
          <div>
            
          </div>
          <div className="footerCont">
            <Button variant="outlined">Back</Button>
            <Button variant="outlined">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostPlace;
