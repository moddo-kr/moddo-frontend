import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import GlobalStyles from '@/styles/globalStyles';
import Router from '@/Router';
import Layout from '@/common/components/Layout';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <GlobalStyles />
        <Router />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
