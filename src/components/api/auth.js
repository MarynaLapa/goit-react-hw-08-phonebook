import { apiAuth } from "./api"

export const signUpApi = async (body) => {
    const response  = await apiAuth.post('users/signup', body)
    console.log('data', response)
    return response 
}

export const loginApi = async (body) => {
    const { data } = await apiAuth.post('/users/login', body)
    return data
}