import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import { checkAuth, groupTokenUrlLoader } from '@/common/loaders';
import getGroupManagerAuth from '@/common/loader/getGroupManagerAuth';
import RouteErrorBoundary from '@/common/components/RouteErrorBoundary';
import RouteErrorElement from '@/common/components/RouteErrorElement';

const BillDetail = lazy(() => import('@/pages/billDetail'));
const CharacterShare = lazy(() => import('@/pages/billDetail/characterShare'));
const CreateBill = lazy(() => import('@/pages/createBill'));
const GroupSetup = lazy(() => import('@/pages/groupSetup'));
const Home = lazy(() => import('@/pages/home'));
const Login = lazy(() => import('@/pages/auth/login'));
const LoginSuccess = lazy(() => import('@/pages/auth/loginSuccess'));
const SelectGroup = lazy(() => import('@/pages/selectGroup'));
const NotFound = lazy(() => import('@/pages/notFound'));

function AppRouter() {
  const router = createBrowserRouter([
    {
      id: 'root',
      element: (
        <RouteErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </RouteErrorBoundary>
      ),
      errorElement: <RouteErrorElement />,
      children: [
        {
          path: ROUTE.login,
          element: <Login />,
        },
        {
          id: 'protected',
          loader: checkAuth,
          children: [
            {
              path: ROUTE.loginSuccess,
              element: <LoginSuccess />,
            },
            {
              path: ROUTE.home,
              element: <Home />,
            },
            {
              path: ROUTE.selectGroup,
              element: <SelectGroup />,
            },
            {
              path: ROUTE.groupSetup,
              element: <GroupSetup />,
            },
          ],
        },
        // TODO : 로그인 기능으로 변경될 예정
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
          loader: groupTokenUrlLoader,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
