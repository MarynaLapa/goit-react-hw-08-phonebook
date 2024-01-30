import { NavLink } from "react-router-dom"
import { Navigate } from "./headerStyled"

const LoginList = () => {
  return (
    <Navigate>
      <ul>
        <li>
            <NavLink to="/login">Login</NavLink>
        </li>
        <li>
            <NavLink to="/register">Registration</NavLink>
        </li>
      </ul>
    </Navigate>
      
  )
}

export default LoginList