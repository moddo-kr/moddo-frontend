import { css } from 'styled-components';
import { getTypographyToken } from './getTypographyToken';

/**
 * typography semantic token을 css fragment로 변환할 때 사용하는 유틸 함수
 * @param key typography semantic token key (ex. 'typography.body.medium')
 * @example
 * const StyledComponent = styled.div`
 *   ${applyTypography('typography.body.medium')}
 *   color: ${getToken('fg.neutral')};
 * `;
 */
function applyTypography(key: Parameters<typeof getTypographyToken>[0]) {
  const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } =
    getTypographyToken(key);

  return css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
}

export { applyTypography };
