import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

export const InfoMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD2PkvzFUzR08UAM8theN9JE268imbE6Rs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `110%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 19.218, lng: 72.978 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: 19.218, lng: 72.978 }} />
    )}
  </GoogleMap>
));