import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { isAuthSelector } from 'store/Auth/selectors'

const PublicRoute = ({ children }) => {
  
  const {state: prevLocation} = useLocation()
  const isAuth = useSelector(isAuthSelector)
  
  return isAuth ? children : <Navigate to={prevLocation ?? '/'} />
}

export default PublicRoute 