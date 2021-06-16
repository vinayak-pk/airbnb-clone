import React, { useEffect, useState } from 'react'
import { WrappedMap } from '../GoogleMap/GoogleMapDiv'
import styled from "./HotelList.module.css"
import { useTranslation } from 'react-i18next';
import List from '../ListData/List';
import FilterButton from './FilterButton/FilterButton';
import { useSelector } from 'react-redux';
import axios from "axios"
import Pagination from '@material-ui/lab/Pagination';
const HotelList = () => {
    const { t, i18n } = useTranslation();
    const [hotelList,setHotelList]=useState([])
    const data =useSelector(state=>state.hotel.data)
    const [page, setPage] = React.useState(1);
    const page_limit=10
    const handlePage = (event, value) => {
      setPage(value);
    };
    console.log(data)
   const handleChange=(e)=>
    {
        i18n.changeLanguage(e.target.value);
    }
 useEffect(()=> {
    const requestParam = {
        url: `http://localhost:2244/hotel/all`,
        method: "get",
        params:{
            page:page,
            page_limit:page_limit
        }
      };
      axios(requestParam)
        .then((response) =>{
            setHotelList(response.data.data)
         
        })
        .catch((err) => console.log(err));
 },[page])
 //console.log(hotelList)
    return (
        <div>
            <select onChange={handleChange}>
                <option value="en">English</option>
                <option value="hindi">Hindi</option>
            </select>
            <div className={styled.flex}>
                <div className={styled.left}>
                    <h1>{t(`area.1`)}</h1>    
                    <div>
                         <FilterButton/>
                    </div>
                    
                    <p>{t(`local.1`)}</p>
                    {
                      data.length!==0?data.map((el)=>
                      (
                          <List key={el.id}{...el}/>
                      )):hotelList&&hotelList.map((el)=>
                      (
                          <List key={el.id} {...el}/>
                      ))
                    }
                     <Pagination className={styled.page} count={11} page={page} onChange={handlePage} />
                </div>
                <div className={styled.right}>
                    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD0rSoWwf7mbci0dfvsTgSmH3WA3NWx_6U`}
                        loadingElement={<div style={{ height: `100%`,width:"100%" }} />}
                        containerElement={<div style={{ height: `788px`,width:"100%" }} />}
                        mapElement={<div style={{ height: `100%`, width:"100%"}} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default HotelList
