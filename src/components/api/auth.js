import axios from "axios"

export const signUpApi = async (body) => {
    const { data } = await axios.post('users/signup', body)
    return data 
}

export const loginApi = async (body) => {
    const { data } = await axios.post('/users/login', body)
    return data
}

export const refreshApi = async () => {
    const { data } = await axios.get('/users/current')
    return data
}

export const logoutApi = async () => {
    await axios.post('/users/logout')
}