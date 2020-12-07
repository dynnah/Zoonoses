import axios from 'axios'

const api = axios.create({
    baseURL: 'https://zoonoses-api.herokuapp.com/',
    timeout: 10000,
})

api.interceptors.request.use(req => {
    const token = localStorage.getItem('token')
    if (token) {
        if(req.headers) {
           req.headers.Authorization = `Bearer ${token}` 
        }
    }
    return req
})

export default api