import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import "./Nav.css";

const useStyles = makeStyles(() => ({
  noBorder: {
    border: "none",
    borderRightStyle: "solid",
    borderRightColor: "grey",
  },
}));

const LocationSearch = ({ setTempVal, tempVal }) => {
  const classes = useStyles();
  const [address, setAddress] = useState("");
  const [coordinate, setcoordinates] = useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log(ll);
    setAddress(value);
    setcoordinates(ll);
    setTempVal({ ...tempVal, location: ll });
  };

  const locations = (coordinate) => {
    setTempVal({ ...tempVal, location: { ...coordinate } });
  };
  //  console.log(coordinate,tempVal)
  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Tooltip title="Where are you going?" arrow>
              <TextField
                id="standard-basic"
                disableUnderline={true}
                value={tempVal.location}
                margin="normal"
                label="Locations"
                onChange={() => locations(coordinate)}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  classes: { notchedOutline: classes.noBorder },
                }}
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input",
                })}
              />
            </Tooltip>
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: "#e7e7e7",
                      cursor: "pointer",
                      color: "black",
                      // borderRadius: "10px",
                      width: "500px",
                      padding: "20px",
                      borderBottom: "1px solid grey",
                      display: "flex",
                      justifyContent: "space-between",
                    }
                  : {
                      backgroundColor: "#ffffff",
                      color: "black",
                      // borderRadius: "10px",
                      width: "500px",
                      padding: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      // borderBottom: "1px solid grey",
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    {" "}
                    <EditLocationIcon />
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default LocationSearch;
