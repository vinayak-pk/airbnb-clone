import React from 'react'
import styled from "./IntroHost.module.css"
import ReactPlayer from 'react-player'
const x="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
const JoinHosting = () => {
  return (
    <div>
      <div className={styled.background}>
      <div className={styled.right}>
       <ReactPlayer loop="true" controls="true" height="100vh" width="100%" playing="true" url={x}/>  
      </div>
      <div className={styled.left}>
           <h1 className={styled.margin}>Try Hosting on</h1>
           <h1 className={styled.font}>Airbnb,</h1>
           <h3 className={styled.color}>Join us. We’ll help you every</h3>
           <h3 className={styled.color}>step of the way.</h3>

           <button className={styled.btn}>Try Hosting</button>
      </div>
      
    </div>
    </div>
  )
}

export default JoinHosting
