import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://localhost:8188',
  timeout: 1000,
});
