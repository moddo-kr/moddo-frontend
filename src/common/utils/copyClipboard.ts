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
  // Clipboard API를 지원하지 않는 경우
  if (!navigator.clipboard) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_error) {
    return false;
  }
};

export default copyClipboard;
