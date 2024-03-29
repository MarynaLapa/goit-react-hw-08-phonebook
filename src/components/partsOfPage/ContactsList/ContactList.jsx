import { List } from 'components/styled/styled'
import ContactsListItem from './ContactsListItem'

import { useSelector } from 'react-redux'
import { contactsSelector, filterListSelector, filterSelector } from 'store/Contacts/selectors'


const ContactList = () => {

    const contacts = useSelector(contactsSelector)
    const filter = useSelector(filterSelector)
    const filteredList = useSelector(filterListSelector)
 
    return (        
        <List>
            {contacts && <ContactsListItem contacts={filter ? filteredList : contacts} />}    
        </List>
    )
}

export default ContactList