import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.goldstarsewing.com', // Replace with your backend URL
  withCredentials: true, // Ensure credentials are included
});

export default instance;
