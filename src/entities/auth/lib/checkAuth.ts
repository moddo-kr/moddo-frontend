import { redirect } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import { queryClient } from '@/shared/api/queryClient';
import { getAuth } from '../api/auth';

/**
 * 페이지에 접근하기 전에 실행되는 함수
 * */
const checkAuth = async ({ request }: LoaderFunctionArgs) => {
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
    const redirectTo = new URL(request.url).pathname;
    return redirect(`${ROUTE.login}?redirectTo=${redirectTo}`);
  }
};

export default checkAuth;
