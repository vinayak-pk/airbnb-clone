import React from 'react'
import styles from  "../Infopage/infopage.module.css";
import "./Comment.css"
export function Ownerinfo({data}) {
    let reviews = data.review
    return(
        <div className="ownermain">
        <div className="comflexbox">
        <div>
          <img src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png" alt="img" className="cimg"/>
        </div>
        <div>
            <h5 className="ch5">Hosted by {data.hostedby}</h5>
            <p className="cp">Joined in August 2015</p>
        </div>
       </div>
       <div>
            <div className="ownerbox">
                <i className="fa fa-star" style={{fontSize:"17px",color:"rgb(255,56,92)",paddingTop:"10px"}} />
                <span><b style={{fontSize:"15px"}}>  {data?.rating}</b></span>
                <span> (<u className={styles.topdec}>{reviews?.length} reviews</u>)</span>
            </div>
            <div className="ownerbox">
                <i class="fas" style={{fontSize:"17px",color:"rgb(255,56,92)"}}>&#xf058;</i>
                <span>Identity verified</span>
            </div>
        </div>
        <div className="ownercontact">
            <p>Response rate: 87%</p>
            <p>Response time: within an hour</p>
            <button style={{marginTop:"20px"}} className="cobutton">Contant Host</button>
        </div>
       </div>
    )
}