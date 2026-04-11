import { redirect } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { ROUTE } from '@/shared/config/route';
import { queryClient } from '@/shared/api/queryClient';
import { getAuth } from '@/entities/auth/api/auth';

/**
 * 로그인 페이지 진입 전에 실행되는 loader
 * 이미 인증된 상태라면 redirectTo 또는 홈으로 redirect한다.
 */
const checkAlreadyAuthLoader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const user = await queryClient.ensureQueryData({
      queryKey: ['auth', 'user'],
      queryFn: getAuth,
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
    });

    if (user?.authenticated) {
      const redirectTo = new URL(request.url).searchParams.get('redirectTo');
      // Open Redirect 방어: '/'로 시작하고 '//'로 시작하지 않는 same-origin 경로만 허용
      // '//'로 시작하는 경우 프로토콜 상대 URL로 외부 도메인으로 redirect될 수 있음
      const safeRedirectTo =
        redirectTo?.startsWith('/') && !redirectTo.startsWith('//')
          ? redirectTo
          : ROUTE.home;
      return redirect(safeRedirectTo);
    }
  } catch {
    // 인증 실패 시 로그인 페이지 렌더링
  }

  return null;
};

export default checkAlreadyAuthLoader;
