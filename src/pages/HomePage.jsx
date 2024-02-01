import { useLocation, useNavigate } from "react-router-dom"
import { ReactComponent as Arrow} from 'components/svg/arrow-right.svg'
import { Hero, HomeButton, SectionContacts, Title } from "components/styled/styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "store/Auth/selectors";

const HomePage = () => {

  const location = useLocation()
  const navigate = useNavigate()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const handlerNavigate = () => {
    navigate(location.state??'/login')
  }
  
  return (
    <SectionContacts>
      <Hero>
        <Title>Welcome to the phonebook</Title>
        {!isLoggedIn && <HomeButton onClick={handlerNavigate}>
          Get started
          <Arrow width='24' height='24' />
        </HomeButton>}
      </Hero>
    </SectionContacts>
  )
}

export default HomePage