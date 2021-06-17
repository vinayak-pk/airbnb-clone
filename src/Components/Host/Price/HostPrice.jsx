import React, { useState } from 'react'
import styled from './Price.module.css'
import { FaAirbnb } from 'react-icons/fa'
import AddRoundedIcon from '@material-ui/icons/AddRounded'
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
    marginTop: '35%',
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
          <IconButton onClick={() => setCount(count - 100)} aria-label="delete">
            <RemoveRoundedIcon />
          </IconButton>
          <TextField id="outlined-basic" label={count} variant="outlined" />
          <IconButton onClick={() => setCount(count + 100)} aria-label="delete">
            <AddRoundedIcon />
          </IconButton>
        </div>
        <h1 className={classes.h1}>{count}₹</h1>
        <Divider className={classes.margin} />
        <Button>Back</Button>
        <Button
          style={{ background: 'black', color: 'white', marginLeft: '70%' }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default HostPrice
