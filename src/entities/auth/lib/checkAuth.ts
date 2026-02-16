import { redirect } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import { queryClient } from '@/shared/api/queryClient';
import { getAuth } from '../api/auth';

/**
 * 페이지에 접근하기 전에 실행되는 함수
 * */
const checkAuth = async () => {
  try {
    const user = await queryClient.ensureQueryData({
      queryKey: ['auth', 'user'],
      queryFn: getAuth,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    });

    if (!user || !user.authenticated) {
      throw new Error('Unauthorized');
    }

    return user;
  } catch {
    // NOTE - 로그인 성공 후 이전 페이지로 돌아가기 위한 로직
    // const redirectTo = new URL(request.url).pathname;
    // return redirect(`${ROUTE.login}?redirectTo=${redirectTo}`);
    return redirect(ROUTE.login);
  }
};

export default checkAuth;
