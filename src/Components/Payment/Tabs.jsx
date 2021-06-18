import React from "react";

export function Tabs({head,subhead,handleClick}) {
  return (
    <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
      <div>
        <h3>{head}</h3>
        <p>{subhead}</p>
      </div>
      <div>
        <button style={{border:"0px",textDecoration:"underline",backgroundColor:"white",fontSize:"15px",fontWeight:"600"}} onClick={handleClick}>Edit</button>
      </div>
    </div>
  );
}
