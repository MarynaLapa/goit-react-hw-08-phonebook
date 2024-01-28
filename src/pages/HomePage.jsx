
import Container from "components/partsOfPage/Container"
import Section from "components/partsOfPage/Section"
import { Button } from "components/styled/formStyled"
import { useLocation, useNavigate } from "react-router-dom"


const HomePage = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const handlerNavigate = () => {
    navigate(location.state??'/login')
  }
  
  return (
    <Section>
      <Container>
        <h1>Welcome to the phonebook</h1>
        <Button onClick={handlerNavigate}>Get started</Button>
      </Container>
    </Section>
  )
}

export default HomePage