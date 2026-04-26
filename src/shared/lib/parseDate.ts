import { isValid, parseISO } from 'date-fns';

/**
 * API 응답의 ISO 날짜 문자열을 Date 객체로 변환합니다.
 *
 * new Date("invalid")는 truthy한 Invalid Date를 반환해 이후 format() 등에서 RangeError를 반환하기 때문에 parseISO + isValid로 유효성을 검사한 후 변환합니다.
 * 유효하지 않으면 null을 반환합니다.
 */
export const parseDate = (value: string | null): Date | null => {
  if (!value) return null;
  const parsed = parseISO(value);
  return isValid(parsed) ? parsed : null;
};
