import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { isAuthSelector } from 'store/Auth/selectors'

const PublicRoute = ({ children }) => {
  
  const {state: prevLocation} = useLocation()
  const isAuth = useSelector(isAuthSelector)
  
  return isAuth ? children : <Navigator to={prevLocation ?? '/'} />
}

export default PublicRoute 