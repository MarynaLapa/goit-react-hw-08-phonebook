import ContactForm from 'components/partsOfPage/contactForm/ContactForm'
import ContactList from 'components/partsOfPage/ContactList'
import Container from 'components/partsOfPage/Container'
import Filter from 'components/partsOfPage/Filter'
import Section from 'components/partsOfPage/Section'
import { Title, TitleSection } from 'components/styled/style'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContactsThunk } from 'store/Contacts/ThunkContacts'
import { errorSelector } from 'store/selectors'


const HomePage = () => {
    const dispatch = useDispatch()
    const error = useSelector(errorSelector)
    
    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch])
 
  return (
   <main>
      <Section>
        <Container>
          <Title>Phonebook</Title>
          <ContactForm />
        </Container>
      </Section>
      <Section>
        <Container>
          <TitleSection>Contacts</TitleSection>
          <Filter title={'Find contacts by name'} />
          {error && <h1>{error}</h1>}
            <ContactList />
        </Container>
      </Section>
    </main>
  )
}

export default HomePage