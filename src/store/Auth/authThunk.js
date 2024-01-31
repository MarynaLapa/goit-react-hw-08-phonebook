import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import { loginApi, logoutApi, refreshApi, signUpApi } from '../../components/api/auth';
import { clearAuthHeader, setAuthHeader} from "components/api/api";



export const singUpThunk = createAsyncThunk(
    'auth/signup', async (body, { rejectWithValue, getState }) => {
    try {
        const data = await signUpApi(body, getState().auth.token)
         setAuthHeader(data.token);
        Notify.success('Congratulations, you have been successfully registered!')
        return data
    } catch (error) {
        Notify.failure('Error during registration. Please check the data you entered and try again')
        return rejectWithValue(error.message)
    }
})

export const loginThunk = createAsyncThunk(
    'auth/login', async (body, { rejectWithValue, getState }) => {
    try {
        const data = await loginApi(body, getState().auth.token)
        setAuthHeader(data.token);
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const refreshThunk = createAsyncThunk(
    'auth/refresh', async (_, { rejectWithValue, getState }) => {
        try {
            const persistedToken = getState().auth.token
            if (persistedToken === null) {
                return rejectWithValue('Unable to fetch user');
            }
            setAuthHeader(persistedToken);
            const { data } = await refreshApi()
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const logoutThunk = createAsyncThunk(
    'auth/logout', async (_, { rejectWithValue }) => {
        try {
            await logoutApi()
            clearAuthHeader();
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)