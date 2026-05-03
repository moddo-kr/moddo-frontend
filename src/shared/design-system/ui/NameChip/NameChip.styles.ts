import styled, { css } from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';

interface StyledNameChipProps {
  $variant: 'selected' | 'unselected' | 'disabled' | 'red';
  $size: 'm' | 's';
}

const applyTypography = (key: Parameters<typeof getTypographyToken>[0]) => {
  const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } =
    getTypographyToken(key);

  return css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
};

// HACK: s size는 12px Medium이지만 해당 semantic token 없음.
// 그래서 caption.xsmall(12px Regular)에 caption.small-medium의 font-weight(Medium)를 override해 적용.
const sTypography = (() => {
  const { fontFamily, fontSize, lineHeight, letterSpacing } =
    getTypographyToken('typography.caption.xsmall');
  const { fontWeight } = getTypographyToken('typography.caption.small-medium');

  return css`
    font-family: ${fontFamily};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    letter-spacing: ${letterSpacing};
  `;
})();

const sizeStyles = {
  m: css`
    padding: ${getToken('padding.3')} ${getToken('padding.4')};
    ${applyTypography('typography.body.small')}
  `,
  s: css`
    padding: ${getToken('padding.2')} ${getToken('padding.4')};
    ${sTypography}
  `,
};

const variantStyles = {
  selected: css`
    background: ${getToken('fill.primary.normal')};
    color: ${getToken('fg.static-white')};
  `,
  unselected: css`
    background: ${getToken('fill.neutral')};
    color: ${getToken('fg.normal')};
  `,
  disabled: css`
    background: ${getToken('fill.normal-disable')};
    color: ${getToken('fg.normal-disable')};
  `,
  red: css`
    background: ${getToken('fill.accent-red.assistive')};
    color: ${getToken('fg.accent-red.normal')};
  `,
};

export const Chip = styled.div<StyledNameChipProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.1')};
  border-radius: ${getToken('radius.full')};
  white-space: nowrap;
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
`;
