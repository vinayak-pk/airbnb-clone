import React, { useState } from "react";
import Logo2 from "../Pictures/Logo2.svg";
import "./NumGuest.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const NumGuest = () => {
  const [guests, setGuests] = React.useState(0);
  const [beds, setBeds] = React.useState(0);
  const [bedrooms, setBedrooms] = React.useState(0);
  const [bathroom, setBathrooms] = React.useState(0);
  const [showquant, setShowQuant] = useState(0);
  const handleGuests = (e) => {
    setGuests((prev) => prev + e);
    setShowQuant((prev) => prev + e);
  };
  const handleBeds = (e) => {
    setBeds((prev) => prev + e);
    setShowQuant((prev) => prev + e);
  };
  const handleBedroom = (e) => {
    setBedrooms((prev) => prev + e);
    setShowQuant((prev) => prev + e);
  };
  const handleBathroom = (e) => {
    setBathrooms((prev) => prev + e);
    setShowQuant((prev) => prev + e);
  };
  return (
    <div className="containerGuestNum">
      <div className="dataContainer2">
        <div className="subData2Container1">
          <div>
            <img className="containerGuestNum__icon" src={Logo2} alt="logo" />
          </div>
          <div className="subDatatext">
            <h1>
              How many guests would you like to <br />
              welcome?
            </h1>
          </div>
        </div>
        <div className="subData2Container2">
          <div className="containerHostPlace__right2 ">
            <Button variant="outlined">Help</Button>
            <Button variant="outlined">Save and exit</Button>
          </div>
          <div className="inputfielCont">
            <nav className="drops2 ">
              <ul>
                <li>
                  <Link href="#">Guests</Link>

                  <div>
                    <button
                      onClick={() => handleGuests(-1)}
                      disabled={guests === 0}
                    >
                      -
                    </button>
                    <p>{guests}</p>
                    <button onClick={() => handleGuests(1)}>+</button>
                  </div>
                </li>
                <li>
                  <Link href="#">Beds</Link>

                  <div>
                    <button
                      onClick={() => handleBeds(-1)}
                      disabled={beds === 0}
                    >
                      -
                    </button>
                    <p>{beds}</p>
                    <button onClick={() => handleBeds(1)}>+</button>
                  </div>
                </li>
                <li>
                  <Link href="#">Bedrooms</Link>

                  <div>
                    <button
                      onClick={() => handleBedroom(-1)}
                      disabled={bedrooms === 0}
                    >
                      -
                    </button>
                    <p>{bedrooms}</p>
                    <button onClick={() => handleBedroom(1)}>+</button>
                  </div>
                </li>
                <li>
                  <Link href="#">Bathroom</Link>

                  <div>
                    <button
                      onClick={() => handleBathroom(-1)}
                      disabled={bathroom === 0}
                    >
                      -
                    </button>
                    <p>{bathroom}</p>
                    <button onClick={() => handleBathroom(1)}>+</button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footerCont">
            <Link to="/hosting/address"><Button variant="outlined">Back</Button></Link>
            <Link to="/"><Button variant="outlined">Next</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumGuest;
