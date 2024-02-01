import { Button, FormContainer } from "../../styled/styled"
import { useInput } from "../validation/validationState"

const RegistrationForm = ({ register }) => {

    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 7, maxLength: 12})
    const name = useInput('', { isEmpty: true })
    
    const handlerSubmit = (e) => {
        e.preventDefault() 

        const form = new FormData(e.currentTarget)
        const formData = {}
        form.forEach((value, key) => {
            formData[key] = value  
        })
        console.log('formData', formData)
        register(formData)

    }
    
    return (
        <FormContainer onSubmit={handlerSubmit}>
            <h1 >Create Account</h1>
            <div>
                {(name.value.length > 0 ) && <label htmlFor='name'>Name</label>}
                <input onChange={e => name.onChange(e)} onBlur={e => name.onBlur(e)} value={name.value} type="text" name="name" placeholder="Enter your name..." id="name" required/>
                {(name.isDirty && name.isEmpty) && <span>{name.isEmptyError}</span>}
            </div>  
            <div>
                {(email.value.length > 0 ) && <label htmlFor='email'>Email</label>}
                <input onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} value={email.value} type="email" name="email" placeholder="Enter your email..." id="email" required/>
                {(email.isDirty && email.isEmpty) && <span>{email.isEmptyError}</span>}
                {(email.isDirty && email.minLength) && <span>Field length at least 3 characters</span>}
                {/* {(email.isDirty && email.isEmailError) && <span>{email.isEmailError}</span>} */}
            </div>
            <div>
                {(password.value.length > 0 ) && <label htmlFor='password'>Password</label>}
                <input onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} value={password.value} type="password" name="password" placeholder="Enter your password..." id='password' required/>
                {(password.isDirty && password.isEmpty) && <span>{password.isEmptyError}</span>}
                {(password.isDirty && password.minLength) && <span>{password.minLengthError}</span>}
                {(password.isDirty && password.maxLength) && <span>{password.maxLengthError}</span>}
            </div>

            <Button disabled={!email.inValid || !password.inValid || !name.inValid} type={"submit"}>Sign Up</Button>
        </FormContainer>
    )
}

export default RegistrationForm
