import { ThemeProvider } from 'styled-components';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import GlobalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';
import Layout from '@/common/components/Layout';
import AppRouter from '@/Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'react-toastify/dist/ReactToastify.css';
import Toast from './common/components/Toast';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyles />
          <AppRouter />
          <ReactQueryDevtools />
          <Toast />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
