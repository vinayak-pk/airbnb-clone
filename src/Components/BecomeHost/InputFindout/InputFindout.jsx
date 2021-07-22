import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import  {makeStyles}  from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./InputFindout.css";

const useStyling = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "10px",
      width: 410,
      backgroundColor: "white",

      //   marginLeft: "20px",
    },
  },
}));

const InputFindout = () => {
  const classifying = useStyling();
  return (
    <div className="MainContInput">
      <div className="cont1Input">
        <div>
          <div className="banner__info3">
            <span>
              Find out more and
              <br /> connect with expert
              <br /> Hosts
            </span>
            <p>
              We’ll share more about hosting and give you access to live
              webinars where experienced hosts can answer your questions.{" "}
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="cont2Input">
        <form className={classifying.root}>
          <div className="subCont2Input">
            <TextField
              id="outlined-basic"
              label="Email address"
              variant="outlined"
            />
            <br />
            <TextField
              id="outlined-basic"
              label="Phone number (Optional)"
              variant="outlined"
            />
            <p></p>
          </div>
        </form>
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="I want to receive occasional insights from Airbnb ."
        />
        <span></span>
        <div className="btn">
          <Button>Sign Up</Button>
          <br />
          <p>
            By selecting "Sign up", I agree that Airbnb will process my personal<br/>
            information in accordance with the Airbnb Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputFindout;
