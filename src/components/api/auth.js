import { api } from "./api"

export const signUpApi = async (body) => {
    const { data } = await api.post('users/signup', body)
    return data 
}

export const loginApi = async (body) => {
    const { data } = await api.post('/users/login', body)
    return data
}

export const refreshApi = async () => {
    const { data } = await api('/users/current')
    return data
}

export const logoutApi = async () => {
    const { data } = await api.post('/users/logout')
    return data
}