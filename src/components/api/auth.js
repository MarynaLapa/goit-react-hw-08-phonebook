import axios from "axios"
// import { api } from "./api"

export const signUpApi = async (body) => {
    const { data } = await axios.post('users/signup', body)
    return data 
}

export const loginApi = async (body) => {
    const { data } = await axios.post('/users/login', body)
    return data
}

export const refreshApi = async (token) => {
    const { data } = await axios('users/current', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return data
}

export const logoutApi = async () => {
    await axios.post('/users/logout')
}