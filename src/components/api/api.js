import axios from "axios"

const API_BASE_URL = 'https://connections-api.herokuapp.com/';

export const api = axios.create({
    baseURL: API_BASE_URL,
})

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


