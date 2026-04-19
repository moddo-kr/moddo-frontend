import { ROUTE } from '@/shared/config/route';

/**
 * Open Redirect 방어: same-origin 경로만 허용
 * '//'(프로토콜 상대 URL), '\'(백슬래시 정규화 우회) 차단 후 URL 파서로 실제 origin이 현재 앱과 동일한지 최종 검증
 */
function isSafeSameOriginPath(path: string): boolean {
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('\\')) {
    return false;
  }

  try {
    const url = new URL(path, window.location.origin);
    return url.origin === window.location.origin;
  } catch {
    return false;
  }
}

function getSafeRedirectPath(
  path: string | null | undefined,
  fallback: string = ROUTE.home
): string {
  return path && isSafeSameOriginPath(path) ? path : fallback;
}

export default getSafeRedirectPath;
