import axios from "axios"

const API_BASE_URL = 'https://connections-api.herokuapp.com/';


export const api = axios.create({
    baseURL: API_BASE_URL,
})



