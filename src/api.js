import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true // Include credentials with requests
});

export default axiosInstance;
