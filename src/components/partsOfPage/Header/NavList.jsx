import { NavLink } from 'react-router-dom'
import { Navigate } from './headerStyled'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'store/Auth/selectors';

const NavList = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <Navigate>
        <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            {isLoggedIn && (<li>
              <NavLink to='/contacts'>Contacts</NavLink>
            </li>)}
        </ul>
    </Navigate>
  )
}

export default NavList