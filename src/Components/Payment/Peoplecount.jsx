import React from "react";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Add, Remove } from "@material-ui/icons";

import "./Summary.css";
let init = {
  adult: 1,
  child: 0,
  infant: 0,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  buttons: {
    borderRadius: "50%",
    width: "3%",
  },
  p: {
    marginTop: "0px",
  },
  h6: {
    fontWeight: 600,
  },
  dropdown: {
    width: "94%",
    padding: "3%",
    border: "1px solid lightgray",
    borderRadius: "10px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
  },
}));
export function Peoplecount({data}) {
  const [show, setShow] = React.useState(false);
  const [counter, setCounter] = React.useState(init);
  const classes = useStyles();
  const handleChange=(name,val)=>{
        setCounter({...counter,[name]:counter[name]+val})
  }
  return (
    <div>
      <div
        className="persons"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        <h6 style={{ margin: "0px" }}>Guests</h6>
        <Typography variant="body1" className={classes.p}>
          {counter.a} guests
        </Typography>
      </div>
      {show ? (
        <Box className={classes.dropdown}>
          <Box>
            <Box className={classes.root}>
              <Box component="span">
                <b>Adults</b>
              </Box>
              <Box className="scountbody">
                <Box component="inline-block">
                  <button disabled={counter.adult===1} onClick={()=>handleChange("adult",-1)} className="sbuttons">
                    <Remove fontSize="15px" />
                  </button>
                </Box>
                <Box component="span">{counter.adult}</Box>
                <Box component="inline-block">
                  <button  disabled={counter.adult===4} onClick={()=>handleChange("adult",1)} className="sbuttons">
                    <Add fontSize="15px" />
                  </button>
                </Box>
              </Box>
            </Box>
            <Box className={classes.root}>
              <Box>
                <b>Children</b>
              </Box>
              <Box className="scountbody">
                <Box component="inline-block">
                  <button  disabled={counter.child===0} onClick={()=>handleChange("child",-1)} className="sbuttons">
                    <Remove fontSize="15px" />
                  </button>
                </Box>
                <Box component="span">{counter.child}</Box>
                <Box component="inline-block">
                  <button  disabled={counter.child===3} onClick={()=>handleChange("child",1)} className="sbuttons">
                    <Add fontSize="15px" />
                  </button>
                </Box>
              </Box>
            </Box>
            <Box className={classes.root}>
              <Box>
                <b>Infants</b>
              </Box>
              <Box className="scountbody">
                <Box component="inline-block">
                  <button  disabled={counter.infant===0} onClick={()=>handleChange("infant",-1)} className="sbuttons">
                    <Remove fontSize="15px" />
                  </button>
                </Box>
                <Box component="span">{counter.infant}</Box>
                <Box component="inline-block">
                  <button  disabled={counter.infant===2} onClick={()=>handleChange("infant",1)} className="sbuttons">
                    <Add fontSize="15px" />
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (<>
        <div>
          <button className="submitbutton">Reserve</button>
        </div>
        <div>
          <div className="pricing">
            <div>
            ₹9,999 x 3 nights
            </div>
            <div>
            ₹29,997
            </div>
          </div>
          <div className="pricing">
            <div>
            Cleaning fee
            </div>
            <div>
            ₹1,200
            </div>
          </div>
          <div className="pricing">
            <div>
            Service fee
            </div>
            <div>
            ₹4,404
            </div>
          </div>
          <div className="pricing">
            <div>
            Occupancy taxes and fees
            </div>
            <div>
            ₹5,615
            </div>
          </div>
        </div>
        <hr/>
        <div className="pricing">
          <div>
            <b>Total</b>
          </div>
          <div>
          ₹41,216
          </div>
        </div>
        </>
      )}
    </div>
  );
}
