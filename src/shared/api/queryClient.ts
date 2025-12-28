import { QueryClient } from '@tanstack/react-query';

/**
 * 전역 API 에러 처리가 필요할 경우,
 * useApiError 훅이 아닌 별도의 정책 함수에서 처리합니다. (생성 시점에 고정된 설정을 사용하기 위함)
 */

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true, // 기본적으로 RouteErrorBoundary로 에러를 던집니다.
    },
    mutations: {
      throwOnError: true, // 기본적으로 RouteErrorBoundary로 에러를 던집니다.
    },
  },
});
