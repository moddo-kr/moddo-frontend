const TITLE = '즐거운 만남 끝까지 즐겁게, 모또';
const DESCRIPTION = '정산을 요청했어요! 금액을 확인하고 정산해주세요.';

/**
 * 공유 데이터 포맷으로 변환
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
 */
export const shareDataFormat = (link: string): ShareData => ({
  title: TITLE,
  text: DESCRIPTION,
  url: link,
});

/**
 * 공유 메시지 포맷으로 변환
 * @example
 * [즐거운 만남 끝까지 즐겁게, 모또]
 * 정산을 요청했어요! 금액을 확인하고 정산해주세요.
 * https://moddo.io/abc123
 */
export const shareMessageFormat = (link: string): string =>
  `[${TITLE}]
${DESCRIPTION}
${link}`;
