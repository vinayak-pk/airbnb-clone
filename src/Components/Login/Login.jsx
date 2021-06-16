import { Button } from '@material-ui/core'
import React from 'react'
import { auth,provider } from '../../firebase'
import { actionTypes } from '../../Redux/Login/reducer'
import { useStateValue } from '../../Redux/Login/StateProvider'

import "./Login.css"
const Login = () => {

    const [{},dispatch]=useStateValue()

    const signIn=()=>
    {
       auth.signInWithPopup(provider).then(result=>
        {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        }
       ).catch(error=>alert(error.message))
    }
  return (
              <Button onClick={signIn}>Sign In with Google</Button>
      
  )
}

export default Login