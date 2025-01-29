import { createRoot } from 'react-dom/client';
import App from './App';
import { worker } from './mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

createRoot(document.getElementById('root') as Element).render(<App />);
