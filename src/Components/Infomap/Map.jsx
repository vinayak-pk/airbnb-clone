import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {useSelector} from "react-redux"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
let loc;
// const func=()=>{
//   const {location} = useSelector((state) => state.info)
//   loc =location
// return(<div>

// </div>)
// }
export const InfoMap =compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `110%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: props.data?.geometry[0], lng:props.data?.geometry[1] }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: props.data?.geometry[0], lng: props.data?.geometry[1] }} />
    )}
  </GoogleMap>
))
