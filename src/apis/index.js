import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_URL}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
