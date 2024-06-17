import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8001/api',
  withCredentials: true // Include credentials with requests
});

export default axiosInstance;
