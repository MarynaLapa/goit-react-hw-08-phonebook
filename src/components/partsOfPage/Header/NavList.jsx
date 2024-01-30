import { NavLink } from 'react-router-dom'
import { Navigate } from './headerStyled'

const NavList = () => {

  return (
    <Navigate>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/contacts'>Contacts</NavLink>
            </li>
        </ul>
    </Navigate>
  )
}

export default NavList