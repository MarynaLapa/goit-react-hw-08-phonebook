import Button from 'components/partsOfPage/Button'
import Input from 'components/partsOfPage/Input'
import { FormStyled } from 'components/styled/style'

const LoginPage = () => {
  return (
     <FormStyled>
        <h1>Sign in</h1>
        <Input htmlFor={'userEmail'} label={''} id={'userEmail'} type={'email'} name={'email'} placeholder={"Email"} required/> 
        <Input htmlFor={'userPassword'} label={''} id={'userPassword'} type={'password'} name={'password'} placeholder={"Password"} required /> 
        <Button type="submit" text={'Sign In'} />
    </FormStyled>
  )
}

export default LoginPage