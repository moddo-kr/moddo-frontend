import { redirect } from 'react-router';
import { ROUTE } from '@/shared/config/route';

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

export default checkAuth;
