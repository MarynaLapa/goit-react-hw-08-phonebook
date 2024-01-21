import Button from "components/partsOfPage/Button"
import Input from "components/partsOfPage/Input"
import { FormStyled } from "components/styled/style"

const RegistrationForm = ({ register }) => {
    
    const handlerSubmit = (e) => {
        e.preventDefault() 

        const data = new FormData(e.currentTarget)
        const formData = {}
        data.forEach((value, key) => {
            formData[key] = value  
        })

        console.log('formData', formData)
        register(formData)
    }
    
  return (
      <FormStyled onSubmit={handlerSubmit}>
          <h1>Create Account</h1>
          <Input htmlFor={'fullName'} label={''} id={'fullName'} type={'text'} name={'name'} placeholder={"Name"} /> 
          <Input htmlFor={'userEmail'} label={''} id={'userEmail'} type={'email'} name={'email'} placeholder={"Email"} />
          <Input htmlFor={'userPassword'} label={''} id={'userPassword'} type={'current-password'} name={'password'} placeholder={"Password"} /> 
          <Button type="submit" text={'Sign Up'} />
      </FormStyled>
  )
}

export default RegistrationForm
