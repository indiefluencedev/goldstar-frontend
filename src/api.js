import axios from 'axios';

const instance = axios.create({

    baseURL:'https://goldstar-backend.onrender.com',
    // baseURL: 'https://goldstar-backend.onrender.com',
    withCredentials: true // This ensures cookies are sent with requests
});

export default instance;