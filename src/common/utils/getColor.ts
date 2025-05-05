import { ColorTokenType, ColorType } from '@/styles/theme.type';

/**
 * 컬러 토큰을 이용해서 theme에서 색상을 가져오는 함수
 * @param themeColor 테마 Color 객체
 * @param key 컬러 토큰
 * @returns 색상 문자열 또는 undefined
 * @example
 * getColor(theme, 'primitive.blue.500');
 * getColor(theme, 'semantic.state.danger');
 */
const getColor = (colorTheme: ColorType, token: ColorTokenType) => {
  if (!token) return undefined; // token이 없으면 undefined를 반환

  const tokenPath = token.split('.'); // dot notation을 기준으로 token 분리
  const color = tokenPath.reduce<unknown>(
    (currentColor, colorKey) =>
      // colorKey가 존재하고 객체이면 colorKey를 키로 가지는 값을 반환
      typeof currentColor === 'object' &&
      currentColor !== null &&
      colorKey in currentColor
        ? (currentColor as Record<string, unknown>)[colorKey]
        : undefined, // 존재하지 않는 key는 undefined를 반환
    colorTheme as Record<string, unknown>
  ) as string | undefined;

  // color가 string이면 반환하고, 아니면 undefined를 반환
  return typeof color === 'string' ? color : undefined;
};

export default getColor;
