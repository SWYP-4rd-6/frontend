import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    // if (token) {
    config.headers['Authorization'] =
      `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMDFAZW1haWwuY29tIiwiZXhwIjoxNzE2NDk2MjU1LCJpYXQiOjE3MTY0MDk4NTV9.qnKB8KpIunUdoK_hfachrltnk34PPWZepNj1o1DH1nc'}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

//be.interceptors.request.use(refresh, refreshErrorHandle);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const url = error.config.url;
  },
);
