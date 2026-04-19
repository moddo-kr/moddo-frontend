import { ROUTE } from '@/shared/config/route';

/**
 * Open Redirect 방어: '/'로 시작하고 '//'로 시작하지 않는 same-origin 경로만 허용
 * '//'로 시작하는 경우 프로토콜 상대 URL로 외부 도메인으로 redirect될 수 있음
 */
function getSafeRedirectPath(
  path: string | null | undefined,
  fallback: string = ROUTE.home
): string {
  return path?.startsWith('/') && !path.startsWith('//') ? path : fallback;
}

export default getSafeRedirectPath;
