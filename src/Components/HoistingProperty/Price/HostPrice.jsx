import React, { useState } from 'react'
import styled from './Price.module.css'
import { FaAirbnb } from 'react-icons/fa'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import {Link} from "react-router-dom"
import {
  Button,
  Divider,
  IconButton,
  makeStyles,
  TextField,
} from '@material-ui/core'
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded'

const useStyles = makeStyles((theme) => ({
  box: {
    width: '70%',
    height: '50%',
    padding: '20px',
    borderRadius: '20px',
  },
  text: {
    marginLeft: '20px',
    marginTop: '25%',
    fontSize: '28px',
    textAlign: 'center',
  },
  margin: {
    borderTop:'1px solid grey',
    marginTop: '20%',
    marginBottom: '4%',
  },
  h1: {
    textAlign: 'center',
  },
}))

const HostPrice = () => {
  const classes = useStyles()
  const [count, setCount] = useState(2000)
  return (
    <div className={styled.flex}>
      <div className={styled.left}>
        <FaAirbnb className={styled.font} />
        <h1 className={styled.margin}>Now for the fun part –</h1>
        <h1 className={styled.font2}>set your price</h1>
      </div>
      <div className={styled.right}>
        <Button style={{ marginLeft: '70%' }}>Help</Button>
        <Button>Save and Exit</Button>
        <p className={classes.text}>
          Keep in mind that places like yours usually <br />
          range from ₹2,017 to ₹3,362.
        </p>
        <div className={styled.flex2}>
          <IconButton disabled={count<400} onClick={() => setCount(count - 100)} aria-label="delete">
            <RemoveRoundedIcon />
          </IconButton>
          <TextField id="outlined-basic" label={count} variant="outlined" InputProps={{style:{padding:"2%"}}}/>
          <IconButton disabled={count>400000}  onClick={() => setCount(count + 100)} aria-label="delete">
            <AddRoundedIcon />
          </IconButton>
        </div>
        <h1 className={classes.h1}>{count}₹</h1>
        <div className={classes.margin} />
        <Link to="/hosting/description"><Button>Back</Button></Link>
        <Link onClick={()=>{alert('Property added successfully')}} to="/"><Button
          style={{width:"30%", background: 'black', color: 'white', marginLeft: '60%' }}
        >
          Complete registering
        </Button></Link>
      </div>
    </div>
  )
}

export default HostPrice
