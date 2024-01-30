import { createAsyncThunk } from "@reduxjs/toolkit"
import { removeContact, addContact, getAllContacts } from "components/api/contactsApi";
import { Notify } from "notiflix";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const getContactsThunk = createAsyncThunk(
    'contacts/getContacts', async (_, { rejectWithValue, getState }) => {
        try {
            Loading.circle('Loading...');
            return await getAllContacts(getState().auth.token)
        } catch (error) {
            return rejectWithValue(error)
        } finally {
            Loading.remove();
        }
    }
)

export const createContactsThunk = createAsyncThunk(
    'contacts/addContacts', async (body, { rejectWithValue, getState }) => {
        try {
            return await addContact(body, getState().auth.token)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const removeContactThunk = createAsyncThunk(
    'contact/removeContacts', async (id, { rejectWithValue, getState }) => {
        try {
            const data = await removeContact(id, getState().auth.token)
            Notify.success('The contact has not been deleted.') // згодом можна зробити алерт з питанням "Чи дійсно ви хочете видалити контакт? якщо так то видаляємо контакт, а якщо ні виконатити переривання запиту за допомогою аборт"
            return data
        } catch (error) {
            Notify.warning('Oops. Something went wrong. Try again.')
            return rejectWithValue(error)
        }
    }
)
