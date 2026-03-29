import axios, { AxiosHeaders } from 'axios';
import { ROUTE } from '@/shared/config/route';

const axiosInstance = axios.create({
  // 환경변수에서 서버 URL을 가져오고, 기본값으로 빈 문자열을 사용하도록 설정
  // 의도적으로 상대경로를 사용해야 하는 경우(예: 스토리북)를 위해서 빈 문자열도 사용할 수 있도록 함
  baseURL: import.meta.env.VITE_SERVER_URL
    ? `${import.meta.env.VITE_SERVER_URL}/api/v1`
    : '',
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
    /** 개발 환경에서 useMock 설정이 true인 경우에는 X-Mock-Request 헤더를 추가해서 모킹한 API를 사용할 수 있게 하는 interceptor */
    if (import.meta.env.MODE === 'development' && newConfig.useMock) {
      newConfig.baseURL = '/api/v1';
      newConfig.headers = AxiosHeaders.from({
        ...newConfig.headers,
        'X-Mock-Request': 'true',
      });
    }
    // SUPABASE용 apikey 헤더 추가 (필요 시)
    else if (newConfig.url?.split('?')[0].endsWith('user/guest/token')) {
      newConfig.headers = AxiosHeaders.from({
        ...newConfig.headers,
        apikey: import.meta.env.VITE_SUPABASE_PUBLIC_KEY,
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
