import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// 기본 axios 인스턴스: 인증이 필요 없는 요청에 사용
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// 인증이 필요한 요청을 위한 axios 인스턴스
export const authAxiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

// 요청 인터셉터 설정: 인증이 필요한 요청에 대해 accessToken을 헤더에 추가
authAxiosInstance.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig,
  ): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 설정: 기본적으로 응답을 그대로 반환하며, 필요 시 오류 처리 로직 추가 가능
authAxiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    const url = error.config?.url;
    // 오류 처리 로직 추가 가능
    return Promise.reject(error);
  },
);

authAxiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: AxiosError): Promise<AxiosError> => {
    const url = error.config?.url;
    // 오류 처리 로직 추가 가능
    return Promise.reject(error);
  },
);