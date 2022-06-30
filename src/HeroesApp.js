import React, { useEffect, useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AutContext } from './auth/autContext';
import { authReducer } from './auth/authReducer';
import 'animate.css';


const init=()=>{
    return JSON.parse (localStorage.getItem('user'))|| {logged:false}
}

export const HeroesApp = () => {

const [user, dispatch] = useReducer(authReducer,{},init)

useEffect(() => {
  
if(!user) return;
localStorage.setItem('user',JSON.stringify(user))
}, [user])


  return (
    <AutContext.Provider value={{
      user,
      dispatch
    }}>

    <AppRouter/>
    </AutContext.Provider>
  )
}
