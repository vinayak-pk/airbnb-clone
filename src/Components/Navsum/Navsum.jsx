import React from "react"
import {Link} from "react-router-dom"
import "../Payment/Summary.css"
export function Navsum(){
    return(
        <div className="sumNav">
          <div className="navtabs">
             <a href="#photo">Photos</a>
          </div>
          <div className="navtabs">
            <a href="#amenties">Amenties</a>
          </div>
          <div className="navtabs">
            <a href="#review">Reviews</a>
          </div>
          <div className="navtabs">
            <a href="#location">Location</a>
          </div>
        </div>
    )
}