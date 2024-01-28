import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { loginApi, signUpApi } from '../../components/api/auth';

export const singUpThunk = createAsyncThunk(
    'auth/signup', async (body, { rejectWithValue }) => {
    try {
        const data = await signUpApi(body)
        Notify.success('Congratulations, you have been successfully registered!')
        return data
    } catch (error) {
        Notify.failure('Error during registration. Please check the data you entered and try again')
        return rejectWithValue(error.message)
    }
})

export const loginThunk = createAsyncThunk(
    'auth/login', async (body, { rejectWithValue }) => {
    try {
        const data = await loginApi(body)
        Notify.success(`Welcome, ${data.user.name}!`)
        return data
    } catch (error) {
        Notify.failure('Error while logging in. Please check your entered data and try again')
        return rejectWithValue(error.message)
    }
})