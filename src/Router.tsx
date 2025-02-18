import { createBrowserRouter, RouterProvider } from 'react-router';
import { checkAuth, groupTokenUrlLoader } from '@/common/loaders';
import { ROUTE } from '@/common/constants/route';
import enableMocking from '@/mocks/utils/enableMocking';
import SelectGroup from '@/pages/selectGroup';
import GroupNameSetup from '@/pages/groupSetup/groupNameSetup';
import PasswordSetup from '@/pages/groupSetup/passwordSetup';
import CreateBill from '@/pages/createBill';
import MemberSetup from '@/pages/groupSetup/memberSetup';
import Login from '@/pages/auth/login';
import LoginSuccess from '@/pages/auth/loginSuccess';
import Home from '@/pages/home';
import BillDetail from '@/pages/billDetail';

await enableMocking();

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
    path: ROUTE.groupSetupName,
    element: <GroupNameSetup />,
    loader: checkAuth,
  },
  {
    path: ROUTE.groupSetupPassword,
    element: <PasswordSetup />,
    loader: checkAuth,
  },
  {
    path: ROUTE.groupSetupMember,
    element: <MemberSetup />,
    loader: checkAuth,
  },
  {
    path: ROUTE.createBill,
    element: <CreateBill />,
    loader: checkAuth,
  },
  {
    path: ROUTE.billDetail,
    element: <BillDetail />,
    loader: groupTokenUrlLoader,
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
