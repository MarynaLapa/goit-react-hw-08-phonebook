import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, logoutApi, refreshApi, signUpApi } from '../../components/api/auth';

export const singUpThunk = createAsyncThunk(
    'auth/signup', async (body, { rejectWithValue }) => {
    try {
        return await signUpApi(body)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const loginThunk = createAsyncThunk(
    'auth/login', async (body, { rejectWithValue }) => {
    try {
        return await loginApi(body)
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const refreshThunk = createAsyncThunk(
    'auth/refresh', async (_, { rejectWithValue, getState }) => {
        try {
            const data = await refreshApi(getState().auth.token)
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const logoutThunk = createAsyncThunk(
    'auth/logout', async (_, { rejectWithValue, getState }) => {
        try {
            return await logoutApi(getState().auth.token)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)