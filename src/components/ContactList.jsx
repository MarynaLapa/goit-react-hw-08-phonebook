import { List } from 'components/styled/style'
import React from 'react'

const ContactList = ({ contacts, RemoveUser }) => {
    return (
            <List>
                {contacts.map(contact => (
                    <li key={contact.id} id={contact.id}>
                        <span>{contact.name}: {contact.number}</span>
                        <button
                            type='button'
                            onClick={() => RemoveUser(contact.id)}>
                            Delete
                        </button> 
                    </li>
                ))}
            </List>
                  
  )}

export default ContactList