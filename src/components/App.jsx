import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import ContactForm from "./contactForm/ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { Title, TitleSection } from "./styled/style";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  })
  const [filterName, setFilterName ] = useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  
     
  const handlerSubmit = (data) => {

    const foundUser = contacts.find(contact =>
      contact.name?.toLowerCase() === data.name.toLowerCase() 
    ) 
       
    if (foundUser) {
      alert(`${data.name} is already in contacts`)
      return;
    } 
      const newContact = {
        ...data,
        id: nanoid(),
    }
      setContacts(prev => [...prev, newContact])
    }    

  const handlerChange = (e) => setFilterName(e.target.value)
  
  const handelerDelete = (id) => setContacts((prev)=>  prev.filter(el=> el.id !== id))
  
  return (   
    
    <div>
      <Title>Phonebook</Title>
      <ContactForm
        onSubmit={handlerSubmit}
      />

      <TitleSection>Contacts</TitleSection>
      <Filter
        title={'Find contacts by name'}
        onChange={handlerChange}
      />
      {contacts && (
        <ContactList
          contacts={
            filterName ?
                contacts.filter(user => user.name.toLowerCase().includes(filterName.toLowerCase()))
              :
                contacts
          }
          RemoveUser={handelerDelete}
        />
      )} 
    </div>

  )
};

export default App