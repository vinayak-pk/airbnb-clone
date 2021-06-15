import React from "react";
import Button from "@material-ui/core/Button";
import Logo2 from "../Pictures/Logo2.svg";
import "./Hostplace.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

const useStylessss = makeStyles(() => ({
  noBorder: {
    border: "none",
    borderRightStyle: "solid",
    borderRightColor: "grey",
    backgroundColor: "white",
  },
}));

const HostPlace = ({ setTempVal, tempVal }) => {
  const classesified = useStylessss();
  const [address, setAddress] = React.useState("");
  const [coordinate, setcoordinates] = React.useState({
    lat: null,
    lng: null,
  });

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log(ll);
    setAddress(value);
    setcoordinates(ll);
    // setTempVal({ ...tempVal, location: ll });
  };
  const locations = (coordinate) => {
    setTempVal({ ...tempVal, location: { ...coordinate } });
  };

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
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  <Tooltip title="Where are you going?" arrow>
                    <input
                      id="standard-basic"
                      disableUnderline={true}
                      // value={tempVal.location}
                      margin="normal"
                      label="Locations"
                      onChange={() => locations(coordinate)}
                      variant="outlined"
                      InputProps={{
                        classes: { notchedOutline: classesified.noBorder },
                      }}
                      {...getInputProps({
                        placeholder: "Enter your address ...",
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
          <div className="footerCont">
            <Button variant="outlined">Back</Button>
            <Button variant="outlined">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostPlace;
