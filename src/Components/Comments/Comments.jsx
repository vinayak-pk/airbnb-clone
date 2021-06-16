import React from 'react';
import styles from "../Infopage/infopage.module.css"
import "./Comment.css"


const names = []
export function Comments({data}){
    
    let reviews = data?.review
    return (
        <div>
            <div>
            <i className="fa fa-star" style={{fontSize:"20px",color:"rgb(255,56,92)",paddingTop:"10px"}} />
            <span><b style={{fontSize:"20px"}}>  {data?.rating}</b></span>
            <span> (<u className={styles.topdec}>{reviews?.length} reviews</u>)</span>
           </div>
           <div className="cmainbody">
              {reviews?.map((review,i)=>{
                  return  i<=5&&(<div className="commbody">
                  <div className="comflexbox">
                   <div>
                     <img src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png" alt="img" className="cimg"/>
                   </div>
                   <div>
                       <h5 className="ch5">Name</h5>
                       <p className="cp">date</p>
                   </div>
                  </div>
                  <div>
                      <p className="cp">{review.comment}</p>
                  </div>
              </div>)
              })}
           </div>
           {reviews.length>5&&(<button className="cobutton">Show all {reviews?.length} reviews</button>)}
        </div>
    )
}
