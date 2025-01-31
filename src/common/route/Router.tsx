import { Routes, Route } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import SelectGroup from '@/pages/selectGroup';
import PasswordSetup from '@/pages/passwordSetup';

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.SELECT_GROUP()} element={<SelectGroup />} />
      <Route path={ROUTE.PASSWORD_SETUP()} element={<PasswordSetup />} />
    </Routes>
  );
}

export default Router;
