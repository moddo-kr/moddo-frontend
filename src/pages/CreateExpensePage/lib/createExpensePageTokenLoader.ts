import { LoaderFunction, redirect } from 'react-router';
import { ROUTE } from '@/shared/config/route';

// 지출 생성 페이지 url에서 groupToken을 추출하는 loader
const createExpensePageTokenLoader: LoaderFunction = async ({ params }) => {
  // url 파라미터에서 groupToken 추출
  const { groupToken } = params;

  // groupToken이 없으면 그룹 선택 페이지로 리다이렉트
  if (!groupToken) {
    return redirect(ROUTE.selectGroup);
  }

  return { groupToken };
};

export default createExpensePageTokenLoader;
