import axios from 'axios';

const instance = axios.create({

    baseURL:'http://localhost:8001',
    // baseURL: 'https://testing-backend-s0dg.onrender.com',
    withCredentials: true // This ensures cookies are sent with requests
});

export default instance;
