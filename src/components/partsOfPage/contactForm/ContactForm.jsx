import { useState } from 'react'
import data from './data.json'
import { useDispatch, useSelector } from 'react-redux'
import { contactsSelector } from 'store/Contacts/selectors'
import { createContactsThunk } from 'store/Contacts/ThunkContacts'
import { Button, FormStyled } from 'components/styled/styled'
import { Notify } from 'notiflix'
import InputWrapper from '../InputWrapper'


const ContactForm = () => {
  
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const contacts = useSelector(contactsSelector)

  const dispatch = useDispatch()
  
  const handlerChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name': setName(value)
        break;
      
      case 'number': setNumber(value)
        break;
      
      default:
        return;
    }
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    
    const foundUser = contacts.find(contact =>
      contact.name?.toLowerCase() === e.target.name.value.toLowerCase()
    )
       
    if (foundUser) {
      alert(`${e.target.name.value} is already in contacts`)
      return;
    }
     
    const formData = new FormData(e.currentTarget)
    
    const data = {}
    formData.forEach((value, key) => {
      if (value.length) {
        data[key] = value
      }
    })

    dispatch(createContactsThunk(data))
    .unwrap()
      .then(() => {
        Notify.success('Contact has been successfully added!')
       })
      .catch(() => {
        Notify.failure('The contact was not added. Please try again.')
    })
    
    setName('')
    setNumber('')
  }

  return (
        <FormStyled onSubmit={handlerSubmit}> 
          <InputWrapper data={data} value={[name, number]} onChange={handlerChange}/>
          <Button type='submit'>Add contact</Button>
        </FormStyled>
    )
}
export default ContactForm