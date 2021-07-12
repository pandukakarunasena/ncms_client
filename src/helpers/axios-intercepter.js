// Step-1: Create a new Axios instance with a custom config.
// The timeout is set to 10s. If the request takes longer than
// that then the request will be aborted.
import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://localhost:8080/ncms_war_exploded/api',
  // baseURL: process.env.APP_API_BASE_URL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

customAxios.interceptors.request.use(function (config) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  config.headers.Authorization = currentUser ? `${currentUser.data.token}` : '';
  return config;
});

// Step-2: Create request, response & error handlers

const responseHandler = (response) => {
  if (response.status === 401) {
    window.location = '/';
  }

  if (response.status === 403) {
    window.location = '/';
  }

  return response;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.

// Step-4: Export the newly created Axios instance to be used in different locations.
export default customAxios;
