import React from 'react'
import {Box} from "@material-ui/core"
import {KingBedOutlined,SingleBedOutlined,HotelOutlined} from "@material-ui/icons"

import "./description.css"
export const Roomconfig = ()=>{
    return (
        <Box className="daccomcard">
            <Box className="daccom">
               <KingBedOutlined className="accicons"/>
               <SingleBedOutlined className="accicons"/>
               <HotelOutlined className="accicons"/>
            </Box>
            <h3>Bedroom 1</h3>
            <p>3 Beds</p>
        </Box>
    )
}












































