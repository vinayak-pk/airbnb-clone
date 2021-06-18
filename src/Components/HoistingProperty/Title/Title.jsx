import React from 'react'
import styled from './Title.module.css'
import ReactPlayer from 'react-player'
import { Button, Divider, makeStyles, TextField } from '@material-ui/core'
import {Link} from "react-router-dom"

let x ="https://a0.muscache.com/v/35/21/35214294-0149-5662-b169-fdd3fcedcc2b/3521429401495662b169fdd3fcedcc2b_4000k_1.mp4" 
const useStyles = makeStyles((theme) => ({
  box: {
    width: '70%',
    height: '50%',
    padding:"20px",
    borderRadius:"20px"
  },
  text:{
      marginLeft:"20px",
      marginTop:"25%",
      fontSize:"28px"
  },
  margin:{
    borderBottom:"1px solid grey",
    marginTop:"8%",
    marginBottom:"4%"
  },
  h1:{
    marginTop:"30px",
    marginLeft:"20px"
  }
}))

const Title = () => {
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
          <h1 className={classes.h1}>Let's give your place a name</h1>
          <div>
            <p className={classes.text}>Create your title</p>
            <TextField
              id="outlined-multiline-static"
              className={classes.box}
              multiline
              rows={4}
              InputProps={{
                style: {padding:"30px",height:"150px"}
              }}
              placeholder="Cheerful 3-bedrooms Cottage in"
              variant="outlined"
            />
          </div>
          <div className={classes.margin}/>
          <Link to="/hosting/images"><Button>Back</Button></Link>
          <Link to="/hosting/description"><Button style={{background:"black",color:"white",marginLeft:"80%"}}>Next</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default Title
