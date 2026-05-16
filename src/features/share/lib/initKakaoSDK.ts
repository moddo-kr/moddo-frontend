const KAKAO_SDK = {
  src: 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js',
  integrity:
    'sha384-DKYJZ8NLiK8MN4/C5P2dtSmLQ4KwPaoqAfyA/DfmEc1VDxu4yyC7wy6K1Hs90nka',
  crossorigin: 'anonymous',
};

let kakaoInitPromise: Promise<void> | null = null;

const initKakaoSDK = (): Promise<void> => {
  // 1. 이미 초기화된 경우
  if (window.Kakao?.isInitialized()) return Promise.resolve();
  const kakaoKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
  if (!kakaoKey) {
    return Promise.reject(
      new Error('VITE_KAKAO_JAVASCRIPT_KEY 환경 변수가 설정되지 않았습니다.')
    );
  }
  // 2. 로딩 중이거나 이미 로드된 경우 — 같은 Promise 반환 (로딩 중 중복 로딩을 막기 위함)
  if (kakaoInitPromise) return kakaoInitPromise;
  // 3. 스크립트 로드 시작
  kakaoInitPromise = new Promise((resolve, reject) => {
    const kakaoSdk = document.createElement('script');
    kakaoSdk.id = 'kakao-sdk';
    kakaoSdk.src = KAKAO_SDK.src;
    kakaoSdk.integrity = KAKAO_SDK.integrity;
    kakaoSdk.crossOrigin = KAKAO_SDK.crossorigin;
    document.head.appendChild(kakaoSdk);
    kakaoSdk.onload = () => {
      window.Kakao.init(kakaoKey);
      resolve();
    };
    kakaoSdk.onerror = () => {
      kakaoSdk.remove();
      kakaoInitPromise = null;
      reject(new Error('Kakao SDK 로드 실패'));
    };
  });
  return kakaoInitPromise;
};

export default initKakaoSDK;
