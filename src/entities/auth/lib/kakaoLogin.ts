const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

function kakaoLogin(url?: string) {
  const defaultRedirectUrl = window.location.origin;
  const redirectUrl = url || defaultRedirectUrl;

  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code&state=${encodeURIComponent(
    redirectUrl
  )}`;
}

export default kakaoLogin;
