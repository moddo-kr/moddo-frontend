import { QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from '@/shared/styles/globalStyles';
import AppRouter from '@/app/Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalErrorBoundary from '@/app/GlobalErrorBoundary';
import { ToastProvider } from '@/shared/design-system/ui';
import { queryClient } from '@/shared/api/queryClient';
import '@/shared/design-system/tokens/build/token.css';
import Layout from './Layout';

function App() {
  return (
    <GlobalErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <GlobalStyles />
          <AppRouter />
          <ReactQueryDevtools />
          <ToastProvider />
        </Layout>
      </QueryClientProvider>
    </GlobalErrorBoundary>
  );
}

export default App;
