import { Routes, Route } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import SelectGroup from '@/pages/selectGroup';
import GroupNameSetup from '@/pages/groupSetup/groupNameSetup';
import PasswordSetup from '@/pages/groupSetup/passwordSetup';
import Create from './pages/create';

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.selectGroup} element={<SelectGroup />} />
      <Route path={ROUTE.groupSetupName} element={<GroupNameSetup />} />
      <Route path={ROUTE.groupSetupPassword} element={<PasswordSetup />} />
      <Route path={ROUTE.create} element={<Create />} />
    </Routes>
  );
}

export default Router;
