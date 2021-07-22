import React from 'react'
import { auth, provider } from '../../firebase'
import { actionTypes } from '../../Redux/Login/reducer'
import { useStateValue } from '../../Redux/Login/StateProvider'
import './Login.css'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'
import { Divider, TextField } from '@material-ui/core'
import  {makeStyles}  from "@material-ui/styles";
import { FcGoogle } from "react-icons/fc";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const useStyles = makeStyles((theme) => ({
  width: {
    padding: '10%',
  },
  center1: {
    textAlign: 'center',
  },
  width2: {
    width: '90%',
    marginBottom: '20px',
  },
  width3: {
    width: '90%',
    marginBottom: '20px',
    backgroundColor: 'rgb(223, 89, 111)',
    height: '50px',
    marginTop: '20px',
    color: 'white',
  },
  width4: {
    height: '50px',
    marginTop: '20px',
    width: '90%',
  },
  font:{
      fontSize:"12px"
  }
}))
export default function Login({open,setOpen}) {
  const [{},dispatch] = useStateValue()
  const classes = useStyles()
  const [state,setState] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
        setState(false);
      })
      .catch((error) => alert(error.message))
  }
  return (
    state?<div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Login
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.width}>
          <h5 className={classes.center}>Log in or Sign Up</h5>
          <Divider />
          <h3>Welcome to Airbnb</h3>
          <TextField
            id="outlined-basic"
            label="Phone number"
            variant="outlined"
            className={classes.width2}
            InputProps={{
              style: {padding:"2% 0"}
            }}
          />
          <div className={classes.font}>
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.
          </div>
          <Button className={classes.width3}>Continue</Button>
          <Divider />
          <Button  startIcon={<FcGoogle/>} className={classes.width4} onClick={signIn}>
            Sign In with Google
          </Button>
        </div>
      </Dialog>
    </div>:<></>
  )
}
