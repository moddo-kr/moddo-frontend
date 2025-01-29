import { createRoot } from 'react-dom/client';
import { worker } from '@/mocks/browser';
import Router from '@/Router';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

createRoot(document.getElementById('root') as Element).render(<Router />);
