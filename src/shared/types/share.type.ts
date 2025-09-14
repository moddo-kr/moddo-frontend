/**
 * 공유 데이터 타입
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
 */
export interface ShareData {
  url?: string; // 공유할 url
  text?: string; // 공유시 해당 메신저에 추가적인 텍스트로 전달되는 문구
  title?: string; // 공유시 썸네일에 제공되는 타이틀 문구
}
