import axios from 'axios';

const instance = axios.create({

    baseURL:'https://testing-backend-s0dg.onrender.com',
    // baseURL: 'http://localhost:8001',
    withCredentials: true // This ensures cookies are sent with requests
});

export default instance;