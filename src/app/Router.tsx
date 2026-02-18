import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import RouteErrorBoundary from '@/app/RouteErrorBoundary';
import RouteErrorElement from '@/app/RouteErrorElement';
import checkAuth from '@/entities/auth/lib/checkAuth';
import groupTokenUrlLoader from '@/entities/auth/lib/groupTokenUrlLoader';
import createExpensePageGuardLoader from '@/pages/CreateExpensePage/lib/createExpensePageGuardLoader';

const ExpenseDetail = lazy(() =>
  import('@/pages/expenseDetail/').then(({ ExpenseDetailPage }) => ({
    default: ExpenseDetailPage,
  }))
);
const CharacterShare = lazy(() =>
  import('@/pages/characterShare').then(({ CharacterSharePage }) => ({
    default: CharacterSharePage,
  }))
);
const CreateExpense = lazy(() =>
  import('@/pages/CreateExpensePage').then(({ CreateExpensePage }) => ({
    default: CreateExpensePage,
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
const MyLinks = lazy(() =>
  import('@/pages/myLinks').then(({ MyLinksPage }) => ({
    default: MyLinksPage,
  }))
);
const LazyMyPage = lazy(() =>
  import('@/pages/my').then(({ MyPage }) => ({
    default: MyPage,
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
              path: ROUTE.myLinks,
              element: <MyLinks />,
            },
            {
              path: ROUTE.my,
              element: <LazyMyPage />,
            },
            {
              path: ROUTE.selectGroup,
              element: <SelectGroup />,
            },
            {
              path: ROUTE.groupSetup,
              element: <GroupSetup />,
            },
            {
              path: ROUTE.createExpense,
              element: <CreateExpense />,
              loader: createExpensePageGuardLoader,
            },
          ],
        },
        // TODO : 로그인 기능으로 변경될 예정
        {
          path: ROUTE.expenseDetail,
          element: <ExpenseDetail />,
          loader: groupTokenUrlLoader,
        },
        {
          path: ROUTE.characterShare,
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
