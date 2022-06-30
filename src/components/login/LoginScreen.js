import React, { useContext } from 'react';

import { types } from '../../types/types';
import { useNavigate } from 'react-router-dom'
import { AutContext } from '../../auth/autContext';

export const LoginScreen = () => {
 
  const navigate = useNavigate()
  const {dispatch}= useContext(AutContext)


  const handleLogin=()=>{
    
    const action={
      type:types.login,
      payload:{name:'Fernando'}
    }
    dispatch(action)

    const lastPath =localStorage.getItem('lastPath') || '/marvel'
    navigate(lastPath,{
      replace:true
    }) ;
    

  } 
    return (
      
    <div>
        <h1>login Screen</h1>
        <hr/>

        <button
            className='btn btn-primary'
            onClick={handleLogin}
            >
              login
        </button>
        
    </div>
  )
}
