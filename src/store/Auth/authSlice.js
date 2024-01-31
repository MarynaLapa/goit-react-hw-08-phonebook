import { createSlice } from '@reduxjs/toolkit';

import { loginThunk, logoutThunk, refreshThunk, singUpThunk } from './authThunk';
import {  handlerLogin, handlerLogout, handlerPending, handlerRefresh, handlerRefreshPending, handlerRefreshRejected, handlerRejected, handlerSignUp } from './handlers';

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

            .addCase(refreshThunk.pending, handlerRefreshPending)
            .addCase(refreshThunk.fulfilled, handlerRefresh)
            .addCase(refreshThunk.rejected, handlerRefreshRejected)
        
            .addCase(logoutThunk.pending, handlerPending)
            .addCase(logoutThunk.fulfilled, handlerLogout)
            .addCase(logoutThunk.rejected, handlerRejected)
    }
})

export const authReducer = authSlice.reducer