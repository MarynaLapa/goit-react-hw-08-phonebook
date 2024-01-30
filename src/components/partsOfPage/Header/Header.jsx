import { useSelector } from 'react-redux'
import Logout from './Logout'
import NavList from './NavList'
import { profileSelector } from 'store/Auth/selectors'
import LoginList from './LoginList'
import { HeaderContainer, HeaderStyled } from './headerStyled'


const Header = () => {

  const profile = useSelector(profileSelector)

  return (
    <HeaderStyled>
      <HeaderContainer >
        <NavList />
        {profile ? <Logout />: <LoginList/>}
      </HeaderContainer>
    </HeaderStyled>
  )
}

export default Header