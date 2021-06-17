import React from 'react'
import styled from './Image.module.css'
import ReactPlayer from 'react-player'
import { Button, Divider, makeStyles, TextField } from '@material-ui/core'
let x ="https://a0.muscache.com/v/ba/63/ba6382e8-3b62-5dca-bee0-c502214e1c29/ba6382e83b625dcabee0c502214e1c29_4000k_1.mp4"

const useStyles = makeStyles((theme) => ({
  box: {
     width: '70%',
    padding:"20px",
    borderRadius:"20px"
  },
  text:{
      marginLeft:"20px",
      fontSize:"28px"
  },
  margin:{
    marginBottom:"4%"
  },
  h1:{
    marginTop:"30px",
    marginLeft:"20px"
  }
}))

const Description = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={styled.background}>
        <div className={styled.right}>
          <ReactPlayer
            loop="true"
            controls="true"
            height="100vh"
            width="100%"
            playing="true"
            url={x}
          />
        </div>
        <div className={styled.left}>
          <Button style={{marginLeft:"70%"}}>Help</Button>
          <Button>Save and Exit</Button>
          <h1 className={classes.h1}>Next, let's add some photos(url) of your place</h1>
          <div>
            <p className={classes.text}>Ta-da! How does this look?</p>
            <TextField
              id="outlined-multiline-static"
              className={classes.box}
              variant="outlined"
            />
               <TextField
              id="outlined-multiline-static"
              className={classes.box}
              variant="outlined"
            />
               <TextField
              id="outlined-multiline-static"
              className={classes.box}
              variant="outlined"
            />
               <TextField
              id="outlined-multiline-static"
              className={classes.box}
              variant="outlined"
            />
               <TextField
              id="outlined-multiline-static"
              className={classes.box}
              variant="outlined"
            />
          </div>
          <Divider className={classes.margin}/>
          <Button>Back</Button>
          <Button style={{background:"black",color:"white",marginLeft:"70%"}}>Next</Button>
        </div>
      </div>
    </div>
  )
}

export default Description
