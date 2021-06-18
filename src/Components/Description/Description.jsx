import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

import "./description.css";
import { Details } from "./Details";
import { Roomconfig } from "./Roomconfig";
import { Amenties } from "./Amenities";
import Calender from "./Calender"
let styles = makeStyles((theme) => ({
  root: {
    padding: "10px 0px",
  },
}));
export function Description() {
  let styling = styles();
  const { data } = useSelector((state) => state.info);
  const {customerDate} = useSelector((state) => state.Navbar)
  let tempDate1 = customerDate[0];
  let tempDate2 = customerDate[1];
  let days = dayCal(tempDate1, tempDate2)
  return (
    <div className="desbody">
      <Box display="inline-block">
        <Box>
          <b className="bstyle">
            Private rooms in{" "}
            {data.typeofplace === "home"
              ? "Bed and Breakfast"
              : data.typeofplace === "hotel"
              ? "Beautiful hotel"
              : "Beautiful cottage"}{" "}
            hosted by {data.hostedby}
          </b>
          <br />
          <Box className={styling.root} display="inline-block">
            <Box component="span">{data.no_of_guest} guests</Box>
            <span> · </span>
            <Box component="span">{data.bedrooms} bedrooms</Box>
            <span> · </span>
            <Box component="span">{data.beds} beds</Box>
            <span> · </span>
            <Box component="span">{data.bathrooms} bathrooms</Box>
          </Box>
        </Box>
      </Box>
      <Box component="span">
        {" "}
        <img
          className="deshost"
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/August/130808/6C8558749-130808-walter-white-tease-6C8558749.jpg"
          alt="logo"
        />
      </Box>
      <hr />
      <Details data={data} />
      <hr />
      {data.description && (
        <div>
          <p className="dpara desbody">{data.description}</p>
          <hr />
        </div>
      )}
      <br/>
      <h2>Sleeping arragements</h2>
      <Roomconfig />
      <br/>
      <hr/>
      <Amenties data={data}/>
      <br/>
      <hr/>
      <div>
        <h2>{days} nights in {(data.location).charAt(0).toUpperCase()+data.location.slice(1)}</h2>
        <Calender/>
      </div>
    </div>
  );
}

function dayCal(date1,date2){
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays
}