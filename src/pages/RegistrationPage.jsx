import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { singUpThunk } from 'store/Auth/authThunk';
import Container from 'components/partsOfPage/Container';
import { Button, FormWrapper, SectionContacts, Wrap, WrapperStyled } from './../components/styled/formStyled';
import SignContent from './../components/partsOfPage/SignContent';
import RegistrationForm from 'components/partsOfPage/RegistrationForm/RegistrationForm';
import { Notify } from 'notiflix';


const RegistrationPage = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // console.log('location state', location.state.from.pathname )//Шлях до запиту

  const register = (body) => {
    dispatch(singUpThunk(body))
    .unwrap()
      .then((payload) => {
        navigate('/contacts')
        Notify.success('Congratulations, you have been successfully registered!')
      })
      .catch((error) => Notify.failure('Error during registration. Please check the data you entered and try again'))
  }

  return (
    <SectionContacts>
      <Container>
        <Wrap >
          <FormWrapper style={WrapperStyled}>
            <SignContent title={'Welcome Back!'} description={"To keep connected with us please login with your personal info"} />
            <Button onClick={()=> navigate('/login')}>Sign In</Button>
          </FormWrapper>
          <FormWrapper > 
            <RegistrationForm register={register} />
          </FormWrapper>
        </Wrap>
      </Container>
    </SectionContacts>
  )
}

export default RegistrationPage


