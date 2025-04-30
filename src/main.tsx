import { createRoot } from 'react-dom/client';
import enableMocking from './mocks/utils/enableMocking';
import App from './App';

enableMocking().then(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  createRoot(document.getElementById('root')!).render(<App />);
});
