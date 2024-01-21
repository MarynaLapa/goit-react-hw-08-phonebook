import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, signUpApi } from '../../components/api/auth';

export const singUpThunk = createAsyncThunk(
    'auth/signUp', async (body, { rejectWithValue }) => {
    try {
        return await signUpApi(body)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const loginThunk = createAsyncThunk(
    'auth/login', async (body, { rejectWithValue }) => {
    try {
        return await loginApi(body)
    } catch (error) {
        return rejectWithValue(error)
    }
})