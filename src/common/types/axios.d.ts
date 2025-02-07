import 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    useMock?: boolean;
  }
}
