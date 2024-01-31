
import { useInput } from "../validation/validationState"
import { Button, FormContainer } from "../../styled/formStyled"

const LoginForm = ({ login }) => {

  const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
  const password = useInput('', {isEmpty: true, minLength: 7, maxLength: 12})

  const handlerSubmit = (e) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const formData = {}
    form.forEach((value, key) => {
      formData[key] = value
    })

    login(formData)

  }

  return (
   <FormContainer onSubmit={handlerSubmit}>
      <h1 >Sign in</h1>
      <div>
        {(email.value.length > 0 ) && <label htmlFor='email'>Email</label>}
        <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} type="email" name="email" placeholder="Enter your email..." id="email" pattern="^[A-Za-z0-9][A-Za-z0-9\.-_]*[A-Za-z0-9]*@([A-Za-z0-9]+([A-Za-z0-9-]*[A-Za-z0-9]+)*\.)+[A-Za-z]*$" title="Please enter a valid email address" required/>
        {(email.isDirty && email.isEmpty) && <span>{email.isEmptyError}</span>}
        {(email.isDirty && email.minLength) && <span>Field length at least 3 characters</span>}
        {/* {(email.isDirty && email.isEmailError) && <span>{email.isEmailError}</span>} */}
      </div>
      
      <div>
        {(password.value.length > 0 ) && <label htmlFor='password'>Password</label>}
        <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value} type="password" name="password" placeholder="Enter your password..." id='password' />
        {(password.isDirty && password.isEmpty) && <span>{password.isEmptyError}</span>}
        {(password.isDirty && password.minLength) && <span>{password.minLengthError}</span>}
        {(password.isDirty && password.maxLength) && <span>{password.maxLengthError}</span>}
      </div>
      <Button disabled={!email.inValid || !password.inValid} type={"submit"}>Log In</Button>
    </FormContainer>
  )
}

export default LoginForm