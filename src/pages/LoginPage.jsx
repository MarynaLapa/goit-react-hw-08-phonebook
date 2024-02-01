import Container from "components/partsOfPage/Container"
import { Button, SectionContacts, Wrap, WrapperStyled } from "components/styled/styled"
import { FormWrapper } from '../components/styled/styled';
import LoginForm from "components/partsOfPage/LoginForm/LoginForm"

import { useDispatch } from "react-redux"
import { loginThunk } from "store/Auth/authThunk"
import SignContent from './../components/partsOfPage/SignContent';
import { useNavigate } from "react-router-dom";
import { Notify } from "notiflix";



const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = (body) => {
    dispatch(loginThunk(body))
    .unwrap()
      .then((payload) => {
        navigate('/contacts')
        Notify.success(`Welcome, ${payload.user.name}!`)
       })
      .catch((error) => {
        Notify.failure('Error while logging in. Please check your entered data and try again')
    })
  }

  return (
    <SectionContacts>
      <Container>
        <Wrap >
          <FormWrapper > 
            <LoginForm login={login} />
          </FormWrapper>
          <FormWrapper style={WrapperStyled}>
            <SignContent title={'Hello, Friend!'} description={"Enter your personal details and start journey with us"} />
            <Button onClick={()=> navigate('/register')}>Sing Up</Button>
          </FormWrapper>
        </Wrap>
      </Container>
    </SectionContacts>
  )
}

export default LoginPage
