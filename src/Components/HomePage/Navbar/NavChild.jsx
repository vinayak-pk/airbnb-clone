import React, { useState } from "react";
import "./Nav.css";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import StaticDateRangePicker from "@material-ui/lab/StaticDateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";

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
  const [val, setVal] = React.useState([null, null]);

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
            <form className={classes2.root} noValidate autoComplete="off">
              <input
                id="standard-basic"
                label="Locations"
                placeholder="LOCATIONS"
              />

              {showSearch && (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <StaticDateRangePicker
                    displayStaticWrapperAs="desktop"
                    value={val}
                    onChange={(newValue) => {
                      setVal(newValue);
                    }}
                    renderInput={(startProps, endProps) => (
                      <React.Fragment>
                        <TextField {...startProps} />
                        <Box sx={{ mx: 2 }}> to </Box>
                        <TextField {...endProps} />
                      </React.Fragment>
                    )}
                  />
                </LocalizationProvider>
              )}
              <Button
                onClick={() => setShowSearch(!showSearch)}
                className="banner__searchButton"
                variant="outlined"
              >
                {showSearch ? "Hide" : "Check in"}
              </Button>
              <Button>Check Out</Button>
              <Button>Guests</Button>

              <SearchRoundedIcon
                style={{
                  width: "25px",
                  borderRadius: "50%",
                  height: "25px",
                  margin: "10px 0px auto",
                  backgroundColor: "rgb(255, 50, 84)",
                }}
              />
            </form>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <form className={classes3.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Locations" />
              <TextField id="standard-basic" label="Date" />
            </form>
          </TabPanel>

          {/* <Typography className={classes.padding} /> */}
        </div>
      </div>
    </div>
  );
};

export default NavChild;
{
  /* <Search/> */
}
