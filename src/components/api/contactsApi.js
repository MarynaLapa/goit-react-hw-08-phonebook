import axios from "axios";

export const getAllContacts = async (token) => {
    const { data } = await axios('contacts', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const addContact = async (contact, token) => {
    const { data } = await axios.post('contacts', contact, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }) 
    return data
}

export const removeContact = async (contactId, token) => {
    const { data } = await axios.delete(`contacts/${contactId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}