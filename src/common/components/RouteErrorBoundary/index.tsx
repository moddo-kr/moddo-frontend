import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import ErrorPage from '@/pages/error';
import { BoundaryError } from '@/common/types/error.type';

type FallbackPageProps = Omit<FallbackProps, 'error'> & {
  error: BoundaryError;
};

function FallbackPage({ error }: FallbackPageProps) {
  const { title, description, action } = error;

  return <ErrorPage title={title} description={description} action={action} />;
}

interface RouteErrorBoundaryProps {
  children?: React.ReactNode;
}

function RouteErrorBoundary({ children }: RouteErrorBoundaryProps) {
  return (
    <ErrorBoundary FallbackComponent={FallbackPage}>{children}</ErrorBoundary>
  );
}

export default RouteErrorBoundary;
