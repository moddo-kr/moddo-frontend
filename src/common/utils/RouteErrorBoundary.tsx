import ErrorPage from '@/pages/error';

function RouteErrorBoundary() {
  // const error = useRouteError();
  // 필요한 경우 error에 접근해서 다른 에러 페이지를 보여줄 수 있어요.
  return <ErrorPage />;
}

export default RouteErrorBoundary;
