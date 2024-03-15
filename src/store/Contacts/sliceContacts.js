import { createSlice } from '@reduxjs/toolkit'
import { createContactsThunk, getContactsThunk, removeContactThunk } from './ThunkContacts'

const initialState = {
    items: [],   
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.items = payload
            })
            .addCase(createContactsThunk.fulfilled, (state, { payload }) => {
                state.items.push(payload)
            })
            .addCase(removeContactThunk.fulfilled, (state, { payload }) => {
                const index = state.items.findIndex((el) => el.id === payload.id)
                state.items.splice(index, 1)
            })     
    }
})

export const contactsReducer = contactsSlice.reducer
export const { addContacts, removeContact } = contactsSlice.actions
