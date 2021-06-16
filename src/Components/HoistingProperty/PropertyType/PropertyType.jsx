import React, { useState } from "react";
import Logo2 from "../Pictures/Logo2.svg";
import "./PropertyType.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const PropertyType = () => {
  return (
    <div className="containerGuestNum">
      <div className="dataContainer3">
        <div className="subData3Container1">
          <div>
            <img className="containerGuestNum__icon" src={Logo2} alt="logo" />
          </div>
          <div className="subDatatext">
            <h1>
              What kind of place will <br />
              you host?
            </h1>
          </div>
        </div>
        <div className="subData3Container2">
          <div className="containerHostPlace__right3 ">
            <Button variant="outlined">Help</Button>
            <Button variant="outlined">Save and exit</Button>
          </div>
          <div className="inputfielCon3">
            <nav className="drops3 ">
              <ul>
                <li>
                  <Link href="#">Resort</Link>

                  <div>
                    <img
                      width="60px"
                      height="60px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHopwxTtcQcEibnQwHvwUaUhL00Ox3UJb58w&usqp=CAU"
                      alt="img1"
                    />
                  </div>
                </li>
                <li>
                  <Link href="#">Cottage</Link>

                  <div>
                    <img
                      width="60px"
                      height="60px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZ0_7oIlbHLWEza93BU4rVogJgjjNkYUA2w&usqp=CAU"
                      alt="img1"
                    />
                  </div>
                </li>
                <li>
                  <Link href="#">Villa</Link>

                  <div>
                    <img
                      width="60px"
                      height="60px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpC6N4fsMlT85a8QBOc1aqztKs0CL3ugRKg&usqp=CAU"
                      alt="img1"
                    />
                  </div>
                </li>
                <li>
                  <Link href="#">Home</Link>

                  <div>
                    <img
                      width="60px"
                      height="60px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnH8G3BEBrBzj3LwaXYXhpDzZ5C1MYwea5mw&usqp=CAU"
                      alt="img1"
                    />
                  </div>
                </li>
                <li>
                  <Link href="#">Hotel</Link>

                  <div>
                    <img
                      width="60px"
                      height="60px"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnvU38BBqH1mFz3IS1M57vux2YTi31XA_O1Q&usqp=CAU"
                      alt="img1"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footerCont">
            <Button variant="outlined">Back</Button>
            <Link to="/hosting/place"><Button variant="outlined">Next</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
