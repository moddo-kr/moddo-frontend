import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '@/shared/styles/globalStyles';
import theme from '@/shared/styles/theme';
import AppRouter from '@/app/Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalErrorBoundary from '@/app/GlobalErrorBoundary';
import Toast from '@/shared/ui/Toast';
import { queryClient } from '@/shared/api/queryClient';
import Layout from './Layout';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
