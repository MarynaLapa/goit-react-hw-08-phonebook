import Container from '../Container'
import Logout from './Logout'
import NavList from './NavList'
import styled from "styled-components"

const HeaderStyled = styled.header`
  border-bottom: 2px solid #c4c4f2;
  padding: 16px 32px;
`

const Header = () => {
  return (
    <HeaderStyled>
      <Container props={true}>
        <NavList />
        <Logout />
      </Container>
    </HeaderStyled>
  )
}

export default Header