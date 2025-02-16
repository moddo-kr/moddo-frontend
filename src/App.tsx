import { ThemeProvider } from 'styled-components';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import GlobalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';
import Layout from '@/common/components/Layout';
import AppRouter from '@/Router';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyles />
          <AppRouter />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
