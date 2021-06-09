import * as React from "react";
import TextField from "@material-ui/core/TextField";
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";
export default function Calender({ setTempVal, tempVal }) {
  const [value, setValue] = React.useState([null, null]);
  // const [data, setData] = React.useState(value);

  const handleChange = (newValue) => {
    setTempVal({ ...tempVal, customerDate: newValue });
    setValue(newValue)
  };
  // console.log(value)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} helperText="" />
            <Box></Box>
            <TextField {...endProps} helperText="" />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
