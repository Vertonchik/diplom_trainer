import axios from 'axios';
import { getCookie, logout } from '../helpers/auth';


axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['token'] = getCookie('token');

axios.interceptors.response.use((response) => {
  return response;
}, function (error) {
  if (error.response?.status === 401) {
    logout();
    window.location.reload();
  }
  return Promise.reject(error.response);
});

window.axios = axios;

export default axios;
