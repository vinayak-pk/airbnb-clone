import React from "react"

import "../Payment/Summary.css"
export function Navsum(){
    return(
        <div className="sumNav">
          <div className="navtabs">
             Photos
          </div>
          <div className="navtabs">
             Amenties
          </div>
          <div className="navtabs">
             Reviews
          </div>
          <div className="navtabs">
             Location
          </div>
        </div>
    )
}