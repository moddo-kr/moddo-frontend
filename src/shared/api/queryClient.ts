import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const setupQueryClient = (
  handleQueryError: (error: Error) => void,
  handleMutationError: (error: Error) => void
) => {
  queryClient.setDefaultOptions({
    mutations: {
      onError: handleMutationError,
      throwOnError: true, // 기본적으로 RouteErrorBoundary로 에러를 던집니다.
    },
    queries: {
      throwOnError: true, // 기본적으로 RouteErrorBoundary로 에러를 던집니다.
    },
  });
  queryClient.getQueryCache().config.onError = handleQueryError;
};
