import { redirect } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import { queryClient } from '@/shared/api/queryClient';
import { getAuth } from '@/entities/auth/api/auth';

/**
 * 페이지에 접근하기 전에 실행되는 함수
 * */
const checkAuth = async ({ request }: LoaderFunctionArgs) => {
  const user = await queryClient.ensureQueryData({
    queryKey: ['auth', 'user'],
    queryFn: getAuth,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  if (!user || !user.authenticated) {
    const { pathname, search, hash } = new URL(request.url);
    const redirectTo = `${pathname}${search}${hash}`;
    return redirect(
      `${ROUTE.login}?redirectTo=${encodeURIComponent(redirectTo)}`
    );
  }

  // 5xx, 네트워크 오류 등 인증과 무관한 에러는 상위로 throw → RouteErrorElement에서 처리 (error를 여기서 캐치하지 않습니다.)
  return user;
};

export default checkAuth;
