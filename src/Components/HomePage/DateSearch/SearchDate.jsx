import * as React from "react";
import TextField from "@material-ui/core/TextField";
// import InputLabel from '@material-ui/core/InputLabel';
import DateRangePicker from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
    borderRightStyle: "solid",
    borderRightColor: "grey",
  },
}));
export default function Calender({ setTempVal, tempVal }) {
  const [value, setValue] = React.useState([null, null]);
  // const [data, setData] = React.useState(value);

  const handleChange = (newValue) => {
    setTempVal({ ...tempVal, customerDate: newValue });
    setValue(newValue);
  };
  // console.log(value)
  const classes = useStyles();
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check in"
        endText="Check out"
        value={value}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <Tooltip title="Add Dates" arrow>
              <TextField
                variant="outlined"
                disableUnderline={false}
                margin="normal"
                name="Check-out"
                autoComplete="Check-out"
                placeholder="Check out"
                className={classes.textField}
                InputProps={{
                  classes: { notchedOutline: classes.noBorder },
                }}
                {...startProps}
                helperText=""
              />
            </Tooltip>
            <Box></Box>
            <Tooltip title="Add Dates" arrow>
              <TextField
                variant="outlined"
                disableUnderline={false}
                margin="normal"
                name="Check-in"
                autoComplete="Check-in"
                placeholder="Check-in"
                className={classes.textField}
                InputProps={{
                  classes: { notchedOutline: classes.noBorder },
                }}
                {...endProps}
                helperText=""
              />
            </Tooltip>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
