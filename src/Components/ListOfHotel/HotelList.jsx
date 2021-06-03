import React from 'react'
import { WrappedMap } from '../GoogleMap/GoogleMapDiv'
import styled from "./HotelList.module.css"
import { useTranslation } from 'react-i18next';
const HotelList = () => {
    const { t, i18n } = useTranslation();
   const handleChange=(e)=>
    {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value="en">English</option>
                <option value="hindi">Hindi</option>
            </select>
            <div className={styled.flex}>
                <div className={styled.left}>
                    <h1>{t(`area.1`)}</h1>
                </div>
                <div className={styled.right}>
                    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDwlPh9xzA5q-o2dks8pVtUaD2vGMyMDiI`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `788px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default HotelList
