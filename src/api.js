import axios from 'axios';

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER}`, // Replace with your backend URL
  withCredentials: true, // Ensure credentials are included
});

export default instance;
