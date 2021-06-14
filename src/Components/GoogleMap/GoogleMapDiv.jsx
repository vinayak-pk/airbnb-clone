import React, { useState } from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from "react-google-maps";
import hotel from "../../Data/hotel.json"
import styled from "./Google.module.css"
const GoogleMapDiv = () => {
  const [list, setList] = useState(null)
 
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 26.808790, lng: 80.959085 }}>
      {
        hotel.map((location) =>
        (
          <Marker key={location.id}
            position={{
              lat: location.geometry[0],
              lng: location.geometry[1]
            }}
            onClick={() => {
              setList(location)
            }} 
            />
           
        ))
      }
      {list && (
        <InfoWindow position={{
          lat: list.geometry[0],
          lng: list.geometry[1]
        }}
        onCloseClick={()=>
        {
          setList(null)
        }}
        >

          <div className={styled.div}>
              <img className={styled.img} src={list.img[0]} alt=""/>
              <p>⭑{list.rating}</p>
              <h2>{list.name}</h2>
              <p>{list.price}$ /night</p>         
          </div>
        </InfoWindow>
      )}
    </GoogleMap>

  )
}
export const WrappedMap = withScriptjs(withGoogleMap(GoogleMapDiv))

export default GoogleMapDiv

