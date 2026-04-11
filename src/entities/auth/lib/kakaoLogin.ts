const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

/**
 * 카카오 소셜 로그인 페이지로 이동한다.
 * @param redirectPathAfterLogin - 로그인 완료 후 돌아올 경로 (pathname). 미전달 시 origin(루트)으로 이동.
 * state 파라미터에 완전한 URL을 담아 전달하며, 백엔드가 로그인 완료 후 해당 URL로 redirect한다.
 */
function kakaoLogin(redirectPathAfterLogin?: string) {
  if (!KAKAO_CLIENT_ID || !KAKAO_REDIRECT_URI) {
    throw new Error('카카오 OAuth에 필요한 환경 변수가 설정되지 않았습니다.');
  }

  // Open Redirect 방어: '/'로 시작하고 '//'로 시작하지 않는 same-origin 경로만 허용
  // '//'로 시작하는 경우 프로토콜 상대 URL로 외부 도메인으로 redirect될 수 있음
  const safePath =
    redirectPathAfterLogin?.startsWith('/') &&
    !redirectPathAfterLogin.startsWith('//')
      ? redirectPathAfterLogin
      : '/';
  const stateUrl = `${window.location.origin}${safePath}`;

  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&state=${encodeURIComponent(
    stateUrl
  )}`;
}

export default kakaoLogin;
