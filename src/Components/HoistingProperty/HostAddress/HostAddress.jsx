import React from "react";
import Logo2 from "../Pictures/Logo2.svg";
import "./HostAddress.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom"
const useStylesInput = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(0),
      width: "45ch",
      // height: "60px"
    },
  },
}));
const HostAddress = () => {
  const InputClass = useStylesInput();
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
              <h3>Confirm your address</h3>
            </div>
            <form className={InputClass.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Street"
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Flat,suite,etc.(Optional)"
                variant="outlined"
              />
              <br />
              <TextField id="outlined-basic" label="City" variant="outlined" />
              <br />
              <TextField
                id="outlined-basic"
                label="State(Optional)"
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Postcode(Optional)"
                variant="outlined"
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Country/Region"
                variant="outlined"
              />
            </form>
            <p>
              Don't worry,we'll only share your address with guests who are
              booked.
            </p>
            <Button variant="outlined">Looks good</Button>
          </div>
          <div className="footerCont">
            <Link to="/hosting/place"><Button variant="outlined">Back</Button></Link>
            <Link to="/hosting/guests"><Button variant="outlined">Next</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostAddress;
