import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import RouteErrorBoundary from '@/app/RouteErrorBoundary';
import RouteErrorElement from '@/app/RouteErrorElement';
import checkAuth from '@/entities/auth/lib/checkAuth';
import groupTokenUrlLoader from '@/entities/auth/lib/groupTokenUrlLoader';
import createExpensePageGuardLoader from '@/pages/CreateExpensePage/lib/createExpensePageGuardLoader';

const LazyExpenseDetail = lazy(() =>
  import('@/pages/expenseDetail/').then(({ ExpenseDetailPage }) => ({
    default: ExpenseDetailPage,
  }))
);
const LazyCharacterShare = lazy(() =>
  import('@/pages/characterShare').then(({ CharacterSharePage }) => ({
    default: CharacterSharePage,
  }))
);
const LazyCreateExpense = lazy(() =>
  import('@/pages/CreateExpensePage').then(({ CreateExpensePage }) => ({
    default: CreateExpensePage,
  }))
);
const LazyGroupSetup = lazy(() =>
  import('@/pages/groupSetup').then(({ GroupSetupPage }) => ({
    default: GroupSetupPage,
  }))
);
const LazyHome = lazy(() =>
  import('@/pages/home').then(({ HomePage }) => ({ default: HomePage }))
);
const LazyLogin = lazy(() =>
  import('@/pages/login').then(({ LoginPage }) => ({ default: LoginPage }))
);
const LazyOnboarding = lazy(() =>
  import('@/pages/onboarding').then(({ OnboardingPage }) => ({
    default: OnboardingPage,
  }))
);
const LazyMyLinks = lazy(() =>
  import('@/pages/myLinks').then(({ MyLinksPage }) => ({
    default: MyLinksPage,
  }))
);
const LazyMyPage = lazy(() =>
  import('@/pages/my').then(({ MyPage }) => ({
    default: MyPage,
  }))
);
const LazyMyEditPage = lazy(() =>
  import('@/pages/my-edit').then(({ MyEditPage }) => ({
    default: MyEditPage,
  }))
);
const LazySelectGroup = lazy(() =>
  import('@/pages/selectGroup').then(({ SelectGroupPage }) => ({
    default: SelectGroupPage,
  }))
);
const LazyNotFound = lazy(() =>
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
          element: <LazyLogin />,
        },
        {
          id: 'protected',
          loader: checkAuth,
          element: <Outlet />,
          children: [
            {
              path: ROUTE.onboarding,
              element: <LazyOnboarding />,
            },
            {
              path: ROUTE.home,
              element: <LazyHome />,
            },
            {
              path: ROUTE.myLinks,
              element: <LazyMyLinks />,
            },
            {
              path: ROUTE.my,
              element: <LazyMyPage />,
            },
            {
              path: ROUTE.myEdit,
              element: <LazyMyEditPage />,
            },
            {
              path: ROUTE.selectGroup,
              element: <LazySelectGroup />,
            },
            {
              path: ROUTE.groupSetup,
              element: <LazyGroupSetup />,
            },
            {
              path: ROUTE.createExpense,
              element: <LazyCreateExpense />,
              loader: createExpensePageGuardLoader,
            },
          ],
        },
        // TODO : 로그인 기능으로 변경될 예정
        {
          path: ROUTE.expenseDetail,
          element: <LazyExpenseDetail />,
          loader: groupTokenUrlLoader,
        },
        {
          path: ROUTE.characterShare,
          element: <LazyCharacterShare />,
          loader: groupTokenUrlLoader,
        },
        {
          path: '*',
          element: <LazyNotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
