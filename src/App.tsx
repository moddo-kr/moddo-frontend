import { ThemeProvider } from 'styled-components';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import GlobalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';
import Layout from '@/common/components/Layout';
import AppRouter from '@/Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Toast from './common/components/Toast';
import ErrorBoundary from './common/utils/ErrorBoundary';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <Layout>
            <GlobalStyles />
            <AppRouter />
            <ReactQueryDevtools />
            <Toast />
          </Layout>
        </ErrorBoundary>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
