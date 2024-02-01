import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'
import { selectIsLoggedIn } from 'store/Auth/selectors'


const PublicRoute = ({ children }) => {
    
  const isLoggedIn = useSelector(selectIsLoggedIn)
  
  return !isLoggedIn ? children : <Navigate to='/' />
}

export default PublicRoute 