import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { isAuthSelector } from 'store/Auth/selectors'

const PrivateRoute = ({ children }) => {

  const isAuth = useSelector(isAuthSelector)
  const { state: prevLocation } = useLocation()

    return isAuth ? children : <Navigate to={prevLocation ?? '/login'} />
}

export default PrivateRoute