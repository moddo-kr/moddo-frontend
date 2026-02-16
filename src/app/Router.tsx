import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import RouteErrorBoundary from '@/app/RouteErrorBoundary';
import RouteErrorElement from '@/app/RouteErrorElement';
import checkAuth from '@/entities/auth/lib/checkAuth';
import getGroupManagerAuth from '@/entities/auth/lib/getGroupManagerAuth';
import groupTokenUrlLoader from '@/entities/auth/lib/groupTokenUrlLoader';

const BillDetail = lazy(() =>
  import('@/pages/billDetail/').then(({ BillDetailPage }) => ({
    default: BillDetailPage,
  }))
);
const CharacterShare = lazy(() =>
  import('@/pages/characterShare').then(({ CharacterSharePage }) => ({
    default: CharacterSharePage,
  }))
);
const CreateBill = lazy(() =>
  import('@/pages/createBill').then(({ CreateBillPage }) => ({
    default: CreateBillPage,
  }))
);
const GroupSetup = lazy(() =>
  import('@/pages/groupSetup').then(({ GroupSetupPage }) => ({
    default: GroupSetupPage,
  }))
);
const Home = lazy(() =>
  import('@/pages/home').then(({ HomePage }) => ({ default: HomePage }))
);
const Login = lazy(() =>
  import('@/pages/login').then(({ LoginPage }) => ({ default: LoginPage }))
);
const Onboarding = lazy(() =>
  import('@/pages/onboarding').then(({ OnboardingPage }) => ({
    default: OnboardingPage,
  }))
);
const SelectGroup = lazy(() =>
  import('@/pages/selectGroup').then(({ SelectGroupPage }) => ({
    default: SelectGroupPage,
  }))
);
const NotFound = lazy(() =>
  import('@/pages/notFound').then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  }))
);

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
          element: <Outlet />,
          children: [
            {
              path: ROUTE.onboarding,
              element: <Onboarding />,
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
