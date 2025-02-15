import { ROUTE } from '@/common/constants/route';
import axios, { AxiosHeaders } from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${localStorage.getItem('accessToken')}`,
  },
});

// Axios 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/** useMock 설정이 true인 경우에는 X-Mock-Request 헤더를 추가해서 모킹한 API를 사용할 수 있게 하는 interceptor */
axiosInstance.interceptors.request.use((config) => {
  const updatedConfig = { ...config };

  if (config.useMock) {
    updatedConfig.headers = AxiosHeaders.from({
      ...updatedConfig.headers,
      'X-Mock-Request': 'true',
    });
  } 
  return updatedConfig;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response && error.response.status === 401) {
      alert('세션이 만료되었습니다. 재로그인해주세요');
      window.location.href = ROUTE.login;
      localStorage.removeItem('accessToken');
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;

