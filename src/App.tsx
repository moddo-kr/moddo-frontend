import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import GlobalStyles from '@/styles/globalStyles';
import Layout from '@/common/components/Layout';
import AppRouter from '@/Router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <GlobalStyles />
        <AppRouter />
        <ReactQueryDevtools />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
