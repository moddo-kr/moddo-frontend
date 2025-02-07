import axios, { AxiosHeaders } from 'axios';

const axiosInstance = axios.create({
  baseURL: '/',
});

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

export default axiosInstance;
