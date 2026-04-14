import axios, { AxiosHeaders } from 'axios';
import { ROUTE } from '@/shared/config/route';

const BASE_URL = import.meta.env.VITE_SERVER_URL
  ? `${import.meta.env.VITE_SERVER_URL}/api/v1`
  : '';

const axiosInstance = axios.create({
  // 환경변수에서 서버 URL을 가져오고, 기본값으로 빈 문자열을 사용하도록 설정
  // 의도적으로 상대경로를 사용해야 하는 경우(예: 스토리북)를 위해서 빈 문자열도 사용할 수 있도록 함
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰 재발급 전용 클라이언트 - response interceptor 없이 사용해 재발급 시 무한 루프 방지
const refreshClient = axios.create({
  baseURL: BASE_URL,
  baseURL: import.meta.env.VITE_SERVER_URL
    ? `${import.meta.env.VITE_SERVER_URL}/api/v1`
    : '',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Axios 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
  (config) => {
    const newConfig = { ...config }; // config 객체를 복사하여 수정
    /** 개발 환경에서 useMock 설정이 true인 경우에는 X-Mock-Request 헤더를 추가해서 모킹한 API를 사용할 수 있게 하는 interceptor */
    if (import.meta.env.MODE === 'development' && newConfig.useMock) {
      newConfig.baseURL = '/api/v1';
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
 * 401 응답 시 refreshToken으로 재발급 시도
 * 재발급 성공 시 원래 요청 재시도, 실패 시 로그인 페이지로 redirect
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // isRetry: 재시도한 원래 요청이 다시 401을 반환할 경우 무한 루프 방지
    if (error.response?.status === 401 && !originalRequest.isRetry) {
      originalRequest.isRetry = true;

      try {
        // refreshClient 사용: response interceptor가 없어 재발급 요청 자체가 인터셉터를 타지 않음
        await refreshClient.put('/user/reissue/token');
        return await axiosInstance(originalRequest); // 원래 요청 재시도
      } catch {
        // 재발급 실패 시 로그인 페이지로 redirect
        // 로그인 페이지로 redirect할 때, 현재 페이지 경로를 쿼리 파라미터로 전달해서 로그인 후 원래 페이지로 돌아올 수 있도록 함
        const redirectTo = encodeURIComponent(window.location.pathname);
        window.location.href = `${ROUTE.login}?redirectTo=${redirectTo}`;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
