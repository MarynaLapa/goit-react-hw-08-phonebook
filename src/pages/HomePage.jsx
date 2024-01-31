import Section from "components/partsOfPage/Section"
import { useLocation, useNavigate } from "react-router-dom"
import { ReactComponent as Arrow} from 'components/svg/arrow-right.svg'
import { Hero, HomeButton, Title } from "components/styled/formStyled";


const HomePage = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const handlerNavigate = () => {
    navigate(location.state??'/login')
  }
  
  return (
    <Section style={{backgroundColor: 'red'}}>
      <Hero>
        <Title>Welcome to the phonebook</Title>
        <HomeButton onClick={handlerNavigate}>
          Get started
          <Arrow width='24' height='24'/>
        </HomeButton>
      </Hero>
    </Section>
  )
}

export default HomePage