import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import "./Nav.css";
import "./NavChild.css";
import { DetectClick } from "./DetectClick";
import SearchDate from "../DateSearch/SearchDate";
import { add_input } from "../../../Redux/NavBar/action";

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
    borderRightStyle: "solid",
    borderRightColor: "grey",
  },
}));

const initState = {
  location: "",
  customerDate: "",
  guests: 0,
};
const NavData = () => {
  const [toggleState, setToggleState] = useState(1);
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = DetectClick(dropdownRef, false);
  const [adult, setAdult] = React.useState(0);
  const [child, setChild] = React.useState(0);
  const [infant, setInfant] = React.useState(0);
  const [showquant, setShowQuant] = useState(0);
  const [tempVal, setTempVal] = React.useState(initState);
  const dispatch = useDispatch();

  const handleAdult = (e) => {
    setAdult((prev) => prev + e);
    setShowQuant((prev) => prev + e);
  };
  const handleChild = (e) => {
    setChild((prev) => prev + e);
    setShowQuant((prev) => prev + e);
  };
  const handleInfant = (e) => {
    setInfant((prev) => prev + e);
    setShowQuant((prev) => prev + e);
  };
  const CustomerData = () => {
    setTempVal({ ...tempVal, guests: showquant });
    dispatch(add_input(tempVal));
  };

  const locations = (e) => {
    setTempVal({ ...tempVal, location: e.target.value });
  };
  // console.log(tempVal);
  // console.log(showquant);
  const { guests, location, customerDate } = useSelector(
    (state) => state.Navbar,
    shallowEqual
  );
  console.log(guests, location, customerDate);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const classes = useStyles();
  return (
    <div className="tabNavigation">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Places to stay
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Experiences
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Online Experiences
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div className="dataDiv">
            <TextField
              id="standard-basic"
              disableUnderline={false}
              margin="normal"
              required
              name="Locations"
              autoFocus
              placeholder="Locations"
              onChange={locations}
              className={classes.textField}
              InputProps={{
                classes: { notchedOutline: classes.noBorder },
              }}
            />

            <SearchDate setTempVal={setTempVal} tempVal={tempVal} />
            <button
              size="medium"
              variant="default"
              onClick={() => setIsActive(!isActive)}
            >
              {showquant ? showquant : "Guests"}
            </button>
            <SearchRoundedIcon
              onClick={CustomerData}
              style={{
                width: "50px",
                borderRadius: "50%",
                height: "50px",
                marginLeft: "50px",
                marginTop: "1px",
                backgroundColor: "rgb(255, 50, 84)",
                cursor: "pointer",
                color:"white",
              }}
            />
          </div>
          <nav
            ref={dropdownRef}
            className={`drops ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <a href="#">Adults</a>
                Ages 13 or above
                <div>
                  <button
                    onClick={() => handleAdult(-1)}
                    disabled={adult === 0}
                  >
                    -
                  </button>
                  <p>{adult}</p>
                  <button onClick={() => handleAdult(1)}>+</button>
                </div>
              </li>
              <li>
                <a href="#">Children</a>
                Ages 2-12
                <div>
                  <button
                    onClick={() => handleChild(-1)}
                    disabled={child === 0}
                  >
                    -
                  </button>
                  <p>{child}</p>
                  <button onClick={() => handleChild(1)}>+</button>
                </div>
              </li>
              <li>
                <a href="#">Infants</a>
                Under 2
                <div>
                  <button
                    onClick={() => handleInfant(-1)}
                    disabled={infant === 0}
                  >
                    -
                  </button>
                  <p>{infant}</p>
                  <button onClick={() => handleInfant(1)}>+</button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>hello2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          </p>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>hell3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavData;
