import { api } from "./api";

export const getAllContacts = async (token) => {
    const { data } = await api('contacts', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const addContact = async (contact, token) => {
    const { data } = await api.post('contacts', contact, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }) 
    return data
}

export const removeContact = async (contactId, token) => {
    const { data } = await api.delete(`contacts/${contactId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}