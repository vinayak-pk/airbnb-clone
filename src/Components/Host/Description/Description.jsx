import React from 'react'
import styled from './Description.module.css'
import ReactPlayer from 'react-player'
import { Button, Divider, makeStyles, TextField } from '@material-ui/core'
let x =
  'https://a0.muscache.com/v/8f/29/8f29e73f-2c5d-589d-bb23-310c9093953e/8f29e73f2c5d589dbb23310c9093953e_4000k_1.mp4'

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
    marginTop:"22%",
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
          <h1 className={classes.h1}>Now, let's describe your place</h1>
          <div>
            <p className={classes.text}>Create your description</p>
            <TextField
              id="outlined-multiline-static"
              className={classes.box}
              multiline
              rows={4}
              InputProps={{
                style: {padding:"30px",height:"150px"}
              }}
              defaultValue="Have fun with the whole family at this stylish place."
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
