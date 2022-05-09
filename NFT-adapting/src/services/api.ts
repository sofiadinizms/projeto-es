import axios from 'axios';

const api = axios.create({
  baseURL: 'http://159.65.188.149/',
});

export default api;
