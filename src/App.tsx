import { ThemeProvider } from 'styled-components';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import GlobalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';
import Router from '@/Router';
import Layout from '@/common/components/Layout';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyles />
          <Router />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
