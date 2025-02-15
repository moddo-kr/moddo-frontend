import { ShareData } from '@/common/types/share.type';

/**
 * 파라미터로 받은 공유 데이터를 OS 네이티브 공유 매커니즘으로 공유합니다.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
 * @see shareDataFormat in src/common/constants/shareFormat.ts
 */
const share = async (shareData: ShareData) => {
  // TODO 지원하지 않는 경우에 대한 처리 논의 필요함.
  // Web Share API를 지원하지 않는 경우
  if (!navigator.canShare || !navigator.share) return false;

  try {
    await navigator.share(shareData);
    return true;
  } catch (_error) {
    return false;
  }
};

export default share;
