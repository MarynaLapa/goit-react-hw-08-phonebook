import { createSlice } from '@reduxjs/toolkit';
import { singUpThunk } from './authThunk';
import { handlerSignUp } from './handlers';

const initialState = {
    isLoading: false, 
    error: '',
    token: '',
    profile: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(singUpThunk.fulfilled, handlerSignUp)
    }
})

export const authReducer = authSlice.reducer