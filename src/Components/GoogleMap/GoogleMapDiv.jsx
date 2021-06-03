import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs,Marker } from "react-google-maps";
import hotel from "../../Data/hotel.json"

const GoogleMapDiv = () => {
  return (
      <GoogleMap defaultZoom={10} defaultCenter={{lat:26.808790,lng:80.959085}}>
        {
          hotel.map((location)=>
          (
            <Marker key ={location.id} position={{lat:location.geometry.coordinate[0],lng:location.geometry.coordinate[1]}}/>
          ))
        }
      </GoogleMap>

  )
}
export const WrappedMap=withScriptjs(withGoogleMap(GoogleMapDiv))

export default GoogleMapDiv

