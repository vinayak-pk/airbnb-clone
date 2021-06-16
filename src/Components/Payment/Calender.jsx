import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import {useSelector} from "react-redux"
let useStyles = makeStyles((theme) => ({
  input:{
    padding: "10px 4px",
  }
}))
export default function Calender() {
  const {customerDate} = useSelector((state) => state.Navbar)
  const [value, setValue] = React.useState(customerDate);
   let classes = useStyles();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField InputProps={{
              className: classes.input
            }} {...startProps} helperText=""/>
            <Box ></Box>
            <TextField InputProps={{
              className: classes.input
            }} {...endProps} helperText=""/>

          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}