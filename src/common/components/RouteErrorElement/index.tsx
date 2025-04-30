import { useRouteError } from 'react-router';
import { BoundaryError } from '@/common/types/error.type';
import ErrorPage from '@/pages/error';

function RouteErrorElement() {
  const error = useRouteError();

  if (error instanceof BoundaryError) {
    const { title, description, action } = error;
    return (
      <ErrorPage title={title} description={description} action={action} />
    );
  }

  return <ErrorPage />;
}

export default RouteErrorElement;
