import React from "react"

import styles from  "../Infopage/infopage.module.css";
import "./Summary.css"
export function Summary({data}){
    let reviews = data.review
    return (
        <div className="sumbody">
            <div>
                <div>
                    <b style={{fontSize:"22px"}}>₹ {data.price}/night</b><br/>
                    {reviews.length>0&&<><i className="fa fa-star" style={{fontSize:"16px",color:"rgb(255,56,92)",paddingTop:"10px"}} />
                    <span><b>{data.rating}</b></span>
                    <span> (<u  className={styles.topdec}>{reviews?.length} reviews</u>)</span></>}
                </div>
            </div>
        </div>
    )
}