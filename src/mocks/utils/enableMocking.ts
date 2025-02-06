async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('../browser');

  // eslint-disable-next-line consistent-return
  return worker.start();
}

export default enableMocking;
