import { useSelector } from 'react-redux'
import Logout from './Logout'
import NavList from './NavList'
import LoginList from './LoginList'
import { HeaderContainer, HeaderStyled } from './headerStyled'
import { selectIsLoggedIn } from 'store/Auth/selectors'


const Header = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn)

  return (
    <HeaderStyled>
      <HeaderContainer >
        <NavList />
        {isLoggedIn? <Logout />: <LoginList/>}
      </HeaderContainer>
    </HeaderStyled>
  )
}

export default Header