import React, { useEffect, useState } from "react";
import { WrappedMap } from "../GoogleMap/GoogleMapDiv";
import styled from "./HotelList.module.css";
import { useTranslation } from "react-i18next";
import List from "../ListData/List";
import FilterButton from "./FilterButton/FilterButton";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import { getHotelData } from "../../Redux/HotelData/action";
import Loading from "../isLoading/loading";
const HotelList = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [hotelList, setHotelList] = useState([]);
  const data = useSelector((state) => state.hotel.data);
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);
  const page_limit = 10;
  const handlePage = (event, value) => {
    setPage(value);
  };
  console.log(data);
  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  useEffect(() => {
    const requestParam = {
      url: `https://airbnb-clone2-server.herokuapp.com/hotel/all`,
      method: "get",
      params: {
        page: page,
        page_limit: page_limit,
      },
    };
    axios(requestParam)
      .then((response) => {
        setHotelList(response.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    // dispatch(getHotelData())
  }, [page]);
  //console.log(hotelList)
  return (
    <div>
      <div className={styled.flex}>
        <div className={styled.left}>
          <h1>{t(`area.1`)}</h1>
          <div>
            <FilterButton />
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <p>{t(`local.1`)}</p>
              {data.length !== 0
                ? data.map((el) => <List key={el.id} {...el} />)
                : hotelList &&
                  hotelList.map((el) => <List key={el.id} {...el} />)}
              <Pagination
                className={styled.page}
                count={10}
                page={page}
                onChange={handlePage}
              />
            </>
          )}
        </div>

        <div className={styled.right}>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%`, width: "100%" }} />}
            containerElement={
              <div style={{ height: `788px`, width: "100%" }} />
            }
            mapElement={<div style={{ height: `100%`, width: "100%" }} />}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelList;
