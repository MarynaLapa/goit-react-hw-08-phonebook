import { createSlice } from '@reduxjs/toolkit';

import { loginThunk, logoutThunk, refreshThunk, singUpThunk } from './authThunk';
import {  handlerLogin, handlerLogout, handlerRefresh, handlerRefreshPending, handlerSignUp } from './handlers';

const initialState = {
    token: null,
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

            .addCase(loginThunk.fulfilled, handlerLogin)

            .addCase(refreshThunk.pending, handlerRefreshPending)
            .addCase(refreshThunk.fulfilled, handlerRefresh)
        
            .addCase(logoutThunk.fulfilled, handlerLogout)
    }
})

export const authReducer = authSlice.reducer