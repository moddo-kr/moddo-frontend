const KAKAO_SDK = {
  src: 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js',
  integrity:
    'sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka',
  crossorigin: 'anonymous',
};

const initKakaoSDK = () => {
  // 1. 이미 Kakao SDK가 로드되어 있는 경우
  if (document.getElementById('kakao-sdk')) {
    if (Kakao?.isInitialized()) return;
    Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  }
  // 2. Kakao SDK 스크립트 로드
  const kakaoSdk = document.createElement('script');
  kakaoSdk.id = 'kakao-sdk';
  kakaoSdk.src = KAKAO_SDK.src;
  kakaoSdk.integrity = KAKAO_SDK.integrity;
  kakaoSdk.crossOrigin = KAKAO_SDK.crossorigin;
  document.head.appendChild(kakaoSdk);
  kakaoSdk.onload = () => {
    Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
  };
};

export default initKakaoSDK;
