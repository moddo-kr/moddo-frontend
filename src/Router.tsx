import { Routes, Route } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import SelectGroup from '@/pages/selectGroup';
import GroupNameSetup from '@/pages/groupSetup/groupNameSetup';
import PasswordSetup from '@/pages/groupSetup/passwordSetup';
import Create from './pages/create';
import MemberSetup from './pages/groupSetup/memberSetup';
import Login from './pages/login';
import LoginSuccess from './pages/loginSuccess';
import Home from './pages/home';

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.login} element={<Login />} />
      <Route path={ROUTE.loginSuccess} element={<LoginSuccess />} />
      <Route path={ROUTE.home} element={<Home />} />
      <Route path={ROUTE.selectGroup} element={<SelectGroup />} />
      <Route path={ROUTE.groupSetupName} element={<GroupNameSetup />} />
      <Route path={ROUTE.groupSetupPassword} element={<PasswordSetup />} />
      <Route path={ROUTE.groupSetupMember} element={<MemberSetup />} />
      <Route path={ROUTE.create} element={<Create />} />
    </Routes>
  );
}

export default Router;
