/**
 * 클립보드에 텍스트를 복사합니다.
 * @param text 복사할 텍스트
 *
 * @example
 * ```ts
 * const isCopied = await copyClipboard('복사할 텍스트');
 * if (isCopied) alert('복사되었습니다.');
 * else alert('복사에 실패했습니다.');
 * ```
 */
const copyClipboard = async (text: string) => {
  // 1. Clipboard API를 사용할 수 있는 경우
  if (window.navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (_error) {
      return false;
    }
  }
  // 2. Clipboard API를 사용할 수 없는 경우
  if (document.queryCommandSupported?.('copy')) {
    // textarea 를 생성하여 복사
    const dummyTextarea = document.createElement('textarea');
    dummyTextarea.value = text;
    dummyTextarea.style.position = 'fixed';
    dummyTextarea.style.opacity = '0';
    dummyTextarea.style.top = '0';
    dummyTextarea.style.left = '0';
    document.body.appendChild(dummyTextarea);
    dummyTextarea.focus();
    dummyTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(dummyTextarea);
    return true;
  }
  return false;
};

export default copyClipboard;
