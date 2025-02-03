import { Routes, Route } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import SelectGroup from '@/pages/selectGroup';
import GroupNameSetup from '@/pages/groupSetup/groupNameSetup';
import PasswordSetup from '@/pages/groupSetup/passwordSetup';

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.SELECT_GROUP()} element={<SelectGroup />} />
      <Route path={ROUTE.GROUP_SETUP_NAME()} element={<GroupNameSetup />} />
      <Route path={ROUTE.GROUP_SETUP_PASSWORD()} element={<PasswordSetup />} />
    </Routes>
  );
}

export default Router;
