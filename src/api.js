import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://testing-backend-s0dg.onrender.com',
  withCredentials: true // Include credentials with requests
});

export default axiosInstance;
