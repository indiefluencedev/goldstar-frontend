import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8001', // Replace with your backend URL
  withCredentials: true, // Ensure credentials are included
});

export default instance;
