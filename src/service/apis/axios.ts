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
    const newConfig = { ...config }; // config 객체를 복사하여 수정
    /** 최신값이 있다면 바꿔주기 */
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      newConfig.headers.Authorization = accessToken;
    }
    /** useMock 설정이 true인 경우에는 X-Mock-Request 헤더를 추가해서 모킹한 API를 사용할 수 있게 하는 interceptor */
    if (newConfig.useMock) {
      newConfig.baseURL = 'http://localhost:3000/api/v1';
      newConfig.headers = AxiosHeaders.from({
        ...newConfig.headers,
        'X-Mock-Request': 'true',
      });
    }
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * accessToken 만료 시 재발급받도록 로그인 페이지로 리다이렉션
 * @Todo accessToken, refreshToken 저장 방식 수정 후 로직 추가
 * refreshToken 여부 확인 후 재발급 or 로그인 페이지 리다이렉션 로직 추가
 */
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
  }
);

export default axiosInstance;
