import { Routes, Route } from 'react-router-dom';
import { ROUTE } from '@/common/constants/route';
import SelectGroup from '@/pages/selectGroup';

function Router() {
  return (
    <Routes>
      <Route path={ROUTE.SELECT_GROUP()} element={<SelectGroup />} />
    </Routes>
  );
}

export default Router;
