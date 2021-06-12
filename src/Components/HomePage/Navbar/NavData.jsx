import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";
import "./Nav.css";
import "./NavChild.css";
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
  const [isActing, setisActing] = React.useState(false);
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
    setTempVal(initState);
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
            <Tooltip title="Where are you going?" arrow>
              <TextField
                id="standard-basic"
                disableUnderline={true}
                margin="normal"
                label="Locations"
                onChange={locations}
                InputProps={{
                  classes: { notchedOutline: classes.noBorder },
                }}
              />
            </Tooltip>

            <SearchDate setTempVal={setTempVal} tempVal={tempVal} />

            {/* <Tooltip title="Add Guests" arrow> */}
            <button
              size="medium"
              variant="default"
              onClick={() => setisActing(!isActing)}
            >
              {showquant ? showquant : "Guests"}
            </button>
            {/* </Tooltip> */}
            <Tooltip title="Click to view facinating places" arrow>
              <SearchRoundedIcon
                onClick={CustomerData}
                style={{
                  width: "50px",
                  borderRadius: "50%",
                  height: "50px",
                  marginLeft: "55px",
                  marginTop: "7px",
                  backgroundColor: "rgb(255, 50, 84)",
                  cursor: "pointer",
                  color: "white",
                  padding: "12px",
                }}
              />
            </Tooltip>
          </div>
          {isActing && (
            <nav className="drops active">
              <ul>
                <li>
                  <Link href="#">Adults</Link>
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
                  <Link href="#">Children</Link>
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
                  <Link href="#">Infants</Link>
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
          )}
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <div className="dataDiv">
            <Tooltip title="Where are you going?" arrow>
              <TextField
                id="standard-basic"
                disableUnderline={true}
                margin="normal"
                label="Locations"
                onChange={locations}
                InputProps={{
                  classes: { notchedOutline: classes.noBorder },
                }}
              />
            </Tooltip>
            <SearchDate setTempVal={setTempVal} tempVal={tempVal} />
            <Tooltip title="Click to view facinating places" arrow>
              <div className="expertTab">
                {" "}
                <SearchRoundedIcon
                  onClick={CustomerData}
                  style={{
                    width: "50px",
                    borderRadius: "50%",
                    height: "28px",
                    // marginLeft: "50px",
                    marginTop: "12px",
                    cursor: "pointer",
                    color: "white",
                  }}
                />
                <p>SEARCH</p>
              </div>
            </Tooltip>
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        ></div>
      </div>
    </div>
  );
};

export default NavData;
