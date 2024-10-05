import axios  from 'axios';
const axiosApi  = axios.create({
  baseURL: 'https://kubeeanalyticsbackend.onrender.com',
  withCredentials: true
} );
export default axiosApi;