import axios from 'axios';

const baseurl = 'https://www.themealdb.com/api/json/v1/1';

const axiosInstance = axios.create({
  baseURL: baseurl,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosInstance