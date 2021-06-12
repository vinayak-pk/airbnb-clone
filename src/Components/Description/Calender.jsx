import  React from "react";
import TextField from "@material-ui/core/TextField";
import { StaticDateRangePicker } from "@material-ui/lab";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import {makeStyles} from "@material-ui/styles"
import Box from "@material-ui/core/Box";

import "./description.css"

let useStyles = makeStyles((theme)=>({
    root:{
        border:"0px"
    }
}));

export default function Calender() {
  const [value, setValue] = React.useState([null, null]);
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField  className={classes.root} {...startProps} />
            <Box sx={{ mx: 1 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
