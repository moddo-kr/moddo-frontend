import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useLocation } from 'react-router';
import { ErrorPage } from '@/pages/error';
import { BoundaryError } from '@/shared/types/error.type';

type FallbackPageProps = Omit<FallbackProps, 'error'> & {
  error: BoundaryError;
};

function FallbackPage({ error, resetErrorBoundary }: FallbackPageProps) {
  const { title, description, action } = error;

  return (
    <ErrorPage
      title={title}
      description={description}
      action={action}
      onReset={resetErrorBoundary}
    />
  );
}

interface RouteErrorBoundaryProps {
  children?: React.ReactNode;
}

function RouteErrorBoundary({ children }: RouteErrorBoundaryProps) {
  const location = useLocation();

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          FallbackComponent={FallbackPage}
          onReset={reset}
          resetKeys={[location.key]}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default RouteErrorBoundary;
