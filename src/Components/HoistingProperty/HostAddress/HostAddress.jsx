import React from "react";
import Logo2 from "../Pictures/Logo2.svg";
import "./HostAddress.css";
import Button from "@material-ui/core/Button";




const HostAddress = () => {
 
  const [address, setAddress] = React.useState("");

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
          <div className="inputfielCont">
              <div>
                  <h2>Confirm address</h2>
              </div>
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

export default HostAddress;
