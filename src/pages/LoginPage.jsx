import Container from "components/partsOfPage/Container"
import { Button, Wrap, WrapperStyled } from "components/styled/formStyled"
import { FormWrapper } from '../components/styled/formStyled';
import LoginForm from "components/partsOfPage/LoginForm/LoginForm"
import Section from "components/partsOfPage/Section"

import { useDispatch } from "react-redux"
import { loginThunk } from "store/Auth/authThunk"
import SignContent from './../components/partsOfPage/SignContent';
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = (body) => {
    dispatch(loginThunk(body))
    .unwrap()
      .then((payload) => {
        console.log('payload', payload)
          navigate('/contacts')
       })
    .catch((error) => {})
  }

  return (
    <Section>
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
    </Section>
  )
}

export default LoginPage
