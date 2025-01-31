import GlobalStyles from '@/common/styles/globalStyles.ts';
import Router from '@/common/route/Router';
import Layout from '@/common/components/layout';

function App() {
  return (
    <Layout>
      <GlobalStyles />
      <Router />
    </Layout>
  );
}

export default App;
