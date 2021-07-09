import React from 'react'
import styled from "./IntroHost.module.css"
import ReactPlayer from 'react-player'

const x="https://a0.muscache.com/v/f1/11/f1118f4e-7ac4-581a-94d3-a07513b8b005/f1118f4e7ac4581a94d3a07513b8b005_4000k_1.mp4"
const IntroHost = () => {
  return (
<div>
    
<div className={styled.background}>
      <div className={styled.left}>
           <h1 className={styled.margin}>Hosting</h1>
           <h1 className={styled.font}>makes Airbnb,</h1>
           <h1 className={styled.font}>Airbnb</h1>
           <button className={styled.btn}>Try Hosting</button>
      </div>
      <div className={styled.right}>
       <ReactPlayer loop="true" controls="true" height="100vh" width="100%" playing="true" url={x}/>  
      </div>
    </div>
</div>
  )
}

export default IntroHost
