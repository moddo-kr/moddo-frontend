import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import GlobalStyles from '@/styles/globalStyles';
import Layout from '@/common/components/Layout';
import AppRouter from '@/Router';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <GlobalStyles />
        <AppRouter />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
