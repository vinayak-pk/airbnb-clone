import React, { useState } from "react";
// import "./Search.css";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
// // import { Calendar } from 'react-date-range';
// import { Button } from "@material-ui/core";
// import PeopleIcon from "@material-ui/icons/People";
// import { useHistory } from "react-router-dom";

// // DATE PICKER COMPONENT
// function Search() {
//   const history = useHistory();
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());
//   const [guest,setGuest] = useState('')

//   const selectionRange = {
//     startDate: startDate,
//     endDate: endDate,
//     key: "selection",
//   };

//   function handleSelect(ranges) {
//     setStartDate(ranges.selection.startDate);
//     setEndDate(ranges.selection.endDate);
//   }
//   console.log(startDate);
//   console.log(endDate);

//   return (
//     <div className="search">
//       <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
//       <div className="search2">
//         {" "}
//         <h2>
//           Number of guests <PeopleIcon />
//         </h2>
//         <input min={0} defaultValue={2} type="number" />
//         <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
//       </div>
//     </div>
//   );
// }

// export default Search;

// import * as React from 'react';
import TextField from "@material-ui/core/TextField";
import StaticDateRangePicker from "@material-ui/lab/StaticDateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import Box from "@material-ui/core/Box";

export default function Search() {
  const [value, setValue] = React.useState([null, null]);

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
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
