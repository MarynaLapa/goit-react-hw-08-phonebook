import axios from "axios"

export const api = axios.create({
    baseURL: 'https://65a8036b94c2c5762da8222e.mockapi.io/contacts'
})


export const apiAuth = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/'
})
// 'https://connections-api.herokuapp.com/';

