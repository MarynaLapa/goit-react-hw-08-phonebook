import { useState } from 'react'
import data from './data.json'
import { FormStyled } from 'components/styled/style'
import Button from 'components/Button'
import Input from 'components/Input'

const ContactForm = ({onSubmit}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

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
    onSubmit({name, number})

    setName('')
    setNumber('')
  }

  return (
        <FormStyled onSubmit={handlerSubmit}> 
          <Input
            data={data}
            value={[name, number]}
            onChange={handlerChange}
          />
          <Button
            text={'Add contact'}
            type={'submit'}
          />
        </FormStyled>
    )
}
export default ContactForm