import { BrowserRouter, Routes, Route } from 'react-router';
import Main from '@/pages/main';
import Create from '@/pages/create';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
