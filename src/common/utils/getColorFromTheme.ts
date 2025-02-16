import { ColorKey, ColorType } from '@/styles/theme.type';

/**
 * dot notion으로 구분된 키를 이용하여 테마 Color에서 색상을 가져옵니다.
 * @param themeColor 테마 Color 객체
 * @param key dot notation으로 구분된 색상 키
 * @returns 색상 문자열 또는 undefined
 * @example
 * getColorFromTheme(theme, 'primitive.blue.500');
 * getColorFromTheme(theme, 'semantic.state.danger');
 */
const getColorFromTheme = (themeColor: ColorType, key: ColorKey) => {
  if (!key) return undefined; // key가 없으면 undefined를 반환
  return key
    .split('.') // dot notation을 기준으로 key 분리
    .reduce<unknown>(
      (currentColor, colorKey) =>
        // colorKey가 존재하고 객체이면 colorKey를 키로 가지는 값을 반환
        typeof currentColor === 'object' &&
        currentColor !== null &&
        colorKey in currentColor
          ? (currentColor as Record<string, unknown>)[colorKey]
          : undefined, // 존재하지 않는 key는 undefined를 반환
      themeColor as Record<string, unknown>
    ) as string | undefined;
};

export default getColorFromTheme;
