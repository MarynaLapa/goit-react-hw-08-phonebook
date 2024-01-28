import { createSlice } from '@reduxjs/toolkit';

import { loginThunk, singUpThunk } from './authThunk';
import { handlerLogin, handlerPending, handlerRejected, handlerSignUp } from './handlers';

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
            .addCase(singUpThunk.pending, handlerPending)
            .addCase(singUpThunk.fulfilled, handlerSignUp)
            .addCase(singUpThunk.rejected, handlerRejected)
            .addCase(loginThunk.pending, handlerPending)
            .addCase(loginThunk.fulfilled, handlerLogin)
            .addCase(loginThunk.rejected, handlerRejected)
    }
})

export const authReducer = authSlice.reducer