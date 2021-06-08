import React, { useState } from "react";
import "./Nav.css";
import "./NavChild.css";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
// import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { DetectClick } from "./DetectClick";
// import StaticDateRangePicker from "@material-ui/lab/StaticDateRangePicker";
// import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
// import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";
import Search from "../Search";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#070707",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(5),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: "0%",
  },
  margin: {
    margin: "10px auto",
  },
  demo2: {
    backgroundColor: "transparent",
    borderradius: "50%",
  },
}));
const useStyles2 = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "20%",
      height: "45px",
      backgroundColor: "white",
      borderRadius: "5%",
      borderRight: "1px solid black",
      border: "transparent",
    },
  },
}));
const useStyles3 = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "40%",
      backgroundColor: "white",
      borderRadius: "5%",
      borderRight: "1px solid black",
    },
  },
}));

const NavChild = () => {
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = DetectClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const [quant, setQuant] = React.useState(0);
  const [quant2, setQuant2] = React.useState(0);
  const [quant3, setQuant3] = React.useState(0);
  const [showquant, setShowQuant] = useState(false);
  const classes2 = useStyles2();
  const classes = useStyles();
  const classes3 = useStyles3();
  const [value, setValue] = React.useState(0);
  const [showSearch, setShowSearch] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="formInputMainDiv">
      <div className={classes.root}>
        <div className={classes.demo2}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="Places to stay" />
            <StyledTab label="Experiences" />
            <StyledTab label="Online Experiences" />
          </StyledTabs>
          <TabPanel value={value} index={0}>
            {/* <form className={classes2.root} noValidate autoComplete="off"> */}
            <div className={classes2.root}>
              <input
                id="standard-basic"
                label="Locations"
                placeholder="LOCATIONS"
              />

              <button
                onClick={() => setShowSearch(!showSearch)}
                variant="outlined"
              >
                {showSearch ? "Hide" : "Check in"}
              </button>
              <button>Check Out</button>
              <button onClick={onClick}>{showquant ? "Guests" : quant}</button>

              <SearchRoundedIcon
                style={{
                  width: "25px",
                  borderRadius: "50%",
                  height: "25px",
                  margin: "10px 0px auto",
                  backgroundColor: "rgb(255, 50, 84)",
                }}
              />
            </div>
            {/* </form> */}
            <p></p>
            {showSearch && <Search />}
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
                      onClick={() => setQuant((prev) => prev - 1)}
                      disabled={quant === 0}
                    >
                      -
                    </button>
                    <p>{quant}</p>
                    <button onClick={() => setQuant((prev) => prev + 1)}>
                      +
                    </button>
                  </div>
                </li>
                <li>
                  <a href="#">Children</a>
                  Ages 2-12
                  <div>
                    <button
                      onClick={() => setQuant2((prev) => prev - 1)}
                      disabled={quant2 === 0}
                    >
                      -
                    </button>
                    <p>{quant2}</p>
                    <button onClick={() => setQuant2((prev) => prev + 1)}>
                      +
                    </button>
                  </div>
                </li>
                <li>
                  <a href="#">Infants</a>
                  Under 2
                  <div>
                    <button
                      onClick={() => setQuant3((prev) => prev - 1)}
                      disabled={quant3 === 0}
                    >
                      -
                    </button>
                    <p>{quant3}</p>
                    <button onClick={() => setQuant3((prev) => prev + 1)}>
                      +
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <form className={classes3.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Locations" />
              <TextField id="standard-basic" label="Date" />
            </form>
          </TabPanel>

          <Typography className={classes.padding} />
        </div>
      </div>
    </div>
  );
};

export default NavChild;
