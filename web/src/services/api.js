import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://rocket-notes-api-1419.onrender.com'
})
