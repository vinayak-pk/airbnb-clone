import React, { useState } from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from "react-google-maps";
import hotel from "../../Data/hotel.json"

const GoogleMapDiv = () => {
  const [list, setList] = useState(null)
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 26.808790, lng: 80.959085 }}>
      {
        hotel.map((location) =>
        (
          <Marker key={location.id}
            position={{
              lat: location.geometry.coordinate[0],
              lng: location.geometry.coordinate[1]
            }}
            onClick={() => {
              setList(location)
            }} />
        ))
      }
      {list && (
        <InfoWindow position={{
          lat: list.geometry.coordinate[0],
          lng: list.geometry.coordinate[1]
        }}
        onCloseClick={()=>
        {
          setList(null)
        }}
        >
          <div>
            {list.price}$
             </div>
        </InfoWindow>
      )}
    </GoogleMap>

  )
}
export const WrappedMap = withScriptjs(withGoogleMap(GoogleMapDiv))

export default GoogleMapDiv

