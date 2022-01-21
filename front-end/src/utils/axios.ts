import axios from 'axios';

// ----------------------------------------------------------------------

export const axiosInst = axios.create({
  baseURL: 'http://localhost:5000'
});

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
