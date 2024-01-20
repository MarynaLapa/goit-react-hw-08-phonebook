import Container from '../Container'
import Logout from './Logout'
import NavList from './NavList'

const Header = () => {
  return (
    <header>
        <Container>
            <NavList />
            <Logout/>
        </Container>
    </header>
  )
}

export default Header