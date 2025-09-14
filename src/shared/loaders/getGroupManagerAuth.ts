import { LoaderFunction, redirect } from 'react-router';
import { ROUTE } from '@/shared/constants/route';

/** 정산 담당자가 필요한 토큰을 모두 가지고 있는지 확인하는 로더 */
const getGroupManagerAuth: LoaderFunction = async () => {
  // NOTE : checkAuth와 중복됨
  // 로그인 토큰이 있는지 확인
  const accessToken = localStorage.getItem('accessToken');

  // 없으면 로그인 페이지로 리다이렉트
  if (!accessToken) {
    return redirect(ROUTE.login);
  }

  // 그룹 토큰이 있는지 확인
  const groupToken = localStorage.getItem('groupToken');

  // 없으면 그룹 선택 페이지로 리다이렉트
  if (!groupToken) {
    return redirect(ROUTE.selectGroup);
  }

  // 그룹 토큰과 액세스 토큰을 반환한다.
  return {
    accessToken,
    groupToken,
  };
};

export default getGroupManagerAuth;
