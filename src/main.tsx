import { createRoot } from 'react-dom/client';
import enableMocking from './mocks/lib/enableMocking';
import App from './app/App';

enableMocking().then(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  createRoot(document.getElementById('root')!).render(<App />);
});
