import { worker } from '../browser';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  // eslint-disable-next-line consistent-return
  return worker.start();
}

export default enableMocking;
