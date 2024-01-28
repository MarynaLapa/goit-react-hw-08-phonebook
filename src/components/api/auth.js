import { api } from "./api"

export const signUpApi = async (body) => {
    console.log('body', body)
    const { data } = await api.post('users/signup', body)
    console.log('data', data)
    return data 
}

export const loginApi = async (body) => {
    const { data } = await api.post('/users/login', body)
    return data
}