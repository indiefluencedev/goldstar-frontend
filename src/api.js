import axios from 'axios';

const instance = axios.create({

    baseURL:'http://localhost:8001',
    // baseURL: 'http://localhost:8001',
    withCredentials: true // This ensures cookies are sent with requests
});

export default instance;
