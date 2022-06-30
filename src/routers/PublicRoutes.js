import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AutContext } from '../auth/autContext'

export const PublicRoutes = ({children}) => {
  
const {user}=useContext(AutContext)  
 return user.logged 
     ?<Navigate to='/marvel'/>
     : children
     
    
        
   
  
}




