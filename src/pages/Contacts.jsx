import ContactForm from 'components/partsOfPage/contactForm/ContactForm'
import ContactList from 'components/partsOfPage/ContactsList/ContactList'
import Container from 'components/partsOfPage/Container'
import Filter from 'components/partsOfPage/Filter'
import Section from 'components/partsOfPage/Section'
import { SectionContacts, Title, TitleSection, Wrap } from 'components/styled/styled'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContactsThunk } from 'store/Contacts/ThunkContacts'
import { globalErrorSelector } from 'store/Root/selectors'

const Contacts = () => {
   const dispatch = useDispatch()
    const error = useSelector(globalErrorSelector)
    
    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch])
  
  return (
    <>
      <SectionContacts>
        <Container>
          <Wrap style={{flexDirection: 'column', width: '480px', padding: '60px 0'}}>  
            <Title>Phonebook</Title>
            <ContactForm />
          </Wrap>
        </Container>
      </SectionContacts>
      <Section>
        <Container>
          <TitleSection>Contacts</TitleSection>
          <Filter title={'Find contacts by name'} />
          {error && <h1>{error}</h1>}
            <ContactList />
        </Container>
      </Section>
    </>
  )
}

export default Contacts