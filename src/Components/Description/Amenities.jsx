import React from 'react';
import {LocalDining,Wifi,LocalParking,Pool,Pets,Tv,LocalLaundryService,AcUnit,Toys,SmokingRooms} from "@material-ui/icons"

import "./description.css"
export function Amenties({data}){
    return ( 
        <div className="amenbody">
            <h2>Amenities</h2>
            <div className="amenval">
                <div  className="avalbody">
                    <span ><LocalDining/> <span className={data.kitchen?"amennind":"amenind"}>Kitchen</span></span>
                </div>
                <div className="avalbody">
                    <span ><Wifi/> <span className={data.wifi?"amennind":"amenind"}>Wifi</span></span>
                </div>
                <div className="avalbody">
                    <span ><LocalParking/> <span className={data.parking?"amennind":"amenind"}>Parking</span></span>
                </div>
                <div className="avalbody">
                    <span ><Pool/>  <span className={data.pool?"amennind":"amenind"}>Pool</span></span>
                </div>
                <div className="avalbody">
                    <span ><Pets/>  <span className={data.pets?"amennind":"amenind"}>Pets allowed</span></span>
                </div>
                <div className="avalbody">
                    <span ><Tv/>  <span className={data.tv?"amennind":"amenind"}>Tv</span></span>
                </div>
                <div className="avalbody">
                    <span><LocalLaundryService/>  <span className={data.heating?"amennind":"amenind"}>Washing machine</span></span>
                </div>
                <div className="avalbody">
                    <span ><AcUnit/>  <span className={data.ac?"amennind":"amenind"}>Ac</span></span>
                </div>
                <div className="avalbody">
                    <span ><Toys/>  <span className={data.hair_dryer?"amennind":"amenind"}>Cot</span></span>
                </div>
                <div className="avalbody">
                    <span><SmokingRooms/>  <span className={data.smoking?"amennind":"amenind"}>Smoking Allowed</span></span>
                </div>
            </div>
            <button className="amenbutton">Show all amenties</button>
        </div>
    )
}