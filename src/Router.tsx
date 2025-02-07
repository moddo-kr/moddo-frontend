import { Routes, Route } from 'react-router';
import { ROUTE } from '@/common/constants/route';
import SelectGroup from '@/pages/selectGroup';
import GroupNameSetup from '@/pages/groupSetup/groupNameSetup';
import PasswordSetup from '@/pages/groupSetup/passwordSetup';
import CreateBill from './pages/createBill';
import MemberSetup from './pages/groupSetup/memberSetup';

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.selectGroup} element={<SelectGroup />} />
      <Route path={ROUTE.groupSetupName} element={<GroupNameSetup />} />
      <Route path={ROUTE.groupSetupPassword} element={<PasswordSetup />} />
      <Route path={ROUTE.groupSetupMember} element={<MemberSetup />} />
      <Route path={ROUTE.createBill} element={<CreateBill />} />
    </Routes>
  );
}

export default Router;
