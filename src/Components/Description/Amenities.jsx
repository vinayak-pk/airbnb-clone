import React from 'react';
import {LocalDining,Wifi,LocalParking,Pool,Pets,Tv,LocalLaundryService,AcUnit,Toys,SmokingRooms} from "@material-ui/icons"
export function Amenties(){
    return ( 
        <div>
            <h2>Amenities</h2>
            <div style={{display:"flex"}}>
                <div>
                    <span><LocalDining/> Kitchen</span>
                </div>
                <div>
                    <span><Wifi/> Wifi</span>
                </div>
                <div>
                    <span><LocalParking/> Parking</span>
                </div>
                <div>
                    <span><Pool/> Pool</span>
                </div>
                <div>
                    <span><Pets/> Pets allowed</span>
                </div>
                <div>
                    <span><Tv/> Tv</span>
                </div>
                <div>
                    <span><LocalLaundryService/> Washing machine</span>
                </div>
                <div>
                    <span><AcUnit/> Ac</span>
                </div>
                <div>
                    <span><Toys/> Cot</span>
                </div>
                <div>
                    <span><SmokingRooms/> Smoking Allowed</span>
                </div>
            </div>
        </div>
    )
}