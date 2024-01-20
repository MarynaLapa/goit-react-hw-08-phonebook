import { NavLink } from 'react-router-dom'

const NavList = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink>Home</NavLink>
            </li>
            <li>
                <NavLink>Contacts</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavList