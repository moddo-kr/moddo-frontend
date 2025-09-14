import { ErrorBoundary } from 'react-error-boundary';
import { ErrorPage } from '@/pages/error';

interface GlobalErrorBoundaryProps {
  children: React.ReactNode;
}

function GlobalErrorBoundary({ children }: GlobalErrorBoundaryProps) {
  return <ErrorBoundary fallback={<ErrorPage />}>{children}</ErrorBoundary>;
}

export default GlobalErrorBoundary;
