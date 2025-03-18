import { createBrowserRouter, RouterProvider } from 'react-router';
import { checkAuth, groupTokenUrlLoader } from '@/common/loaders';
import { ROUTE } from '@/common/constants/route';
import getGroupManagerAuth from '@/common/loader/getGroupManagerAuth';
import SelectGroup from '@/pages/selectGroup';
import GroupSetup from '@/pages/groupSetup';
import CreateBill from '@/pages/createBill';
import Login from '@/pages/auth/login';
import LoginSuccess from '@/pages/auth/loginSuccess';
import Home from '@/pages/home';
import BillDetail from '@/pages/billDetail';
import CharacterShare from './pages/billDetail/characterShare';
import Onboarding from './pages/onboarding';

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <Login />,
    },
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
  ]);

  return <RouterProvider router={router} />;
}

export default AppRouter;
