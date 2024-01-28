import { api } from "./api";

export const getAllContacts = async () => {
    return await api('contacts')
}

export const addContact = async (contact) => {
    const { data } = await api.post('contacts', contact) 
    return data
}

export const removeContact = async (contactId) => {
    const { data } = await api.delete(`contacts/${contactId}`)
    return data
}