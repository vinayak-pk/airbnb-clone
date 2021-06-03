import React from 'react'
import { WrappedMap } from '../GoogleMap/GoogleMapDiv'

const HotelList = () => {
  return (
    <div style={{display:"flex",width:"100%"}}>
      <div style={{width:"55%",height:"100%"}}></div>
      <div style={{width:"45%",height:"100%"}}>
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDwlPh9xzA5q-o2dks8pVtUaD2vGMyMDiI`}
       loadingElement= {<div style={{ height: `100%` }} />}
       containerElement= {<div style={{ height: `400px` }} />}
       mapElement={<div style={{ height: `100%` }} />}
       />
      </div>
    </div>
  )
}

export default HotelList
