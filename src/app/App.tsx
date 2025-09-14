import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import GlobalStyles from '@/shared/styles/globalStyles';
import theme from '@/shared/styles/theme';
import Layout from '@/shared/components/Layout';
import AppRouter from '@/app/Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalErrorBoundary from '@/app/GlobalErrorBoundary';
import Toast from '@/shared/components/Toast';
import useApiError from '@/shared/hooks/useApiError';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { handleError: handleQueryError } = useApiError({});
  const { handleError: handleMutationError } = useApiError({});
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            onError: handleMutationError,
            throwOnError: true, // 기본적으로 RouteErrorBoundary로 에러를 던집니다.
          },
          queries: {
            throwOnError: true, // 기본적으로 RouteErrorBoundary로 에러를 던집니다.
          },
        },
        queryCache: new QueryCache({
          onError: handleQueryError,
        }),
      })
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <GlobalStyles />
            <AppRouter />
            <ReactQueryDevtools />
            <Toast />
          </Layout>
        </QueryClientProvider>
      </GlobalErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
