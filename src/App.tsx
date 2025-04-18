import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import GlobalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';
import Layout from '@/common/components/Layout';
import AppRouter from '@/Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalErrorBoundary from '@/common/components/GlobalErrorBoundary';
import Toast from '@/common/components/Toast';
import useApiError from '@/common/hooks/useApiError';
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
    <ChakraProvider value={defaultSystem}>
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
    </ChakraProvider>
  );
}

export default App;
