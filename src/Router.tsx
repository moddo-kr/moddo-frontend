import { createBrowserRouter, RouterProvider, redirect } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import SelectGroup from '@/pages/selectGroup';
import GroupNameSetup from '@/pages/groupSetup/groupNameSetup';
import PasswordSetup from '@/pages/groupSetup/passwordSetup';
import CreateBill from './pages/createBill';
import MemberSetup from './pages/groupSetup/memberSetup';
import Login from './pages/auth/login';
import LoginSuccess from './pages/auth/loginSuccess';
import Home from './pages/home';

/**
 * 페이지에 접근하기 전에 실행되는 함수
 * -> accessToken이 있는지 확인하고, 없으면 login 으로 redirect
 *
 * @Todo accessToken 및 refreshToken 저장 방식 수정 후 로직 추가
 * 1. 메모리(전역상태변수로 관리)의 accessToken 존재 여부 확인
 * 2. 메모리에 accessToken이 없다면 httpOnly 쿠키를 확인 ->  refreshToken API 호출(refreshToken으로 accessToken 재발급)
 * 3. 쿠키에 refreshToken이 없다면 로그인 페이지로 redirect
 * */
const checkAuth = () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    return redirect(ROUTE.login);
  }
  return null;
};

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
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
