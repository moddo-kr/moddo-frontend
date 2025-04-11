import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import { checkAuth, groupTokenUrlLoader } from '@/common/loaders';
import getGroupManagerAuth from '@/common/loader/getGroupManagerAuth';
import RouteErrorBoundary from './common/utils/RouteErrorBoundary';

const BillDetail = lazy(() => import('@/pages/billDetail'));
const CharacterShare = lazy(() => import('@/pages/billDetail/characterShare'));
const CreateBill = lazy(() => import('@/pages/createBill'));
const GroupSetup = lazy(() => import('@/pages/groupSetup'));
const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/auth/login'));
const LoginSuccess = lazy(() => import('@/pages/auth/loginSuccess'));
const Onboarding = lazy(() => import('@/pages/onboarding'));
const SelectGroup = lazy(() => import('@/pages/selectGroup'));
const NotFound = lazy(() => import('@/pages/notFound'));

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Outlet />,
      errorElement: <RouteErrorBoundary />,
      children: [
        {
          path: ROUTE.login,
          element: <Login />,
        },
        {
          path: ROUTE.onboarding,
          element: <Onboarding />,
        },
        {
          path: ROUTE.loginSuccess,
          element: <LoginSuccess />,
        },
        {
          path: ROUTE.home,
          element: <Home />,
          loader: checkAuth,
        },
        {
          path: ROUTE.selectGroup,
          element: <SelectGroup />,
          loader: checkAuth,
        },
        {
          path: ROUTE.groupSetup,
          element: <GroupSetup />,
          loader: checkAuth,
        },
        {
          path: ROUTE.createBill,
          element: <CreateBill />,
          loader: getGroupManagerAuth,
        },
        {
          path: ROUTE.billDetail,
          element: <BillDetail />,
          loader: groupTokenUrlLoader,
        },
        {
          path: ROUTE.billDetailCharacterShare,
          element: <CharacterShare />,
          loader: groupTokenUrlLoader, // TODO : 권한 확인하기
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    // TODO : 로딩 페이지 추가하기
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default AppRouter;
