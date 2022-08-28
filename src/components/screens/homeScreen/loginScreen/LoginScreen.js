import React, { useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
// import { useSelector } from 'react-redux/es/hooks/useSelector'
import {login} from '../../../../redux/actions/auth.action' 

import './LoginScreen.scss'

const LoginScreen = () => {
  const dispatch = useDispatch()


  const accessToken = useSelector(state=>state.auth.accessToken) 

    const handleLogin = () => {
      dispatch(login())
    }

      const history = useHistory(useHistory)

    useEffect(()=>{

           if(accessToken){
        history.push('/')
           }

    },[accessToken,history])




  return (
    <div className='login'>
        <div className='login__container'>
            <img
             src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
              alt=''
              ></img>
            <button onClick={handleLogin}>Login With google</button>
            <p>This project is made using YOUTUBE DATA API</p>
        </div>
    </div>
  )
}

export default LoginScreen