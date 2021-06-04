import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/infopage/action";

import styles from  "./infopage.module.css";
export function Infopage() {
  let dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log("here");
  React.useEffect(() => {
    dispatch(getData(1));
  }, [dispatch]);
  let reviews = data?.review
  console.log(data)
  return (
    <div className={styles.boundary}>
      <div>
        <h2>{data.name}</h2>
        <div>
        <i className="fa fa-star" style={{fontSize:"16px",color:"rgb(255,56,92)",paddingTop:"10px"}} />
           <span><b>{data.rating}</b></span>
           <span> (<u  className={styles.topdec}>{reviews?.length} reviews</u>)</span>
           <span> · </span>
           <span className={styles.topdec}>{data.location},{data.location_nearby},India</span>
        </div>
      </div>
    </div>
  );
}
