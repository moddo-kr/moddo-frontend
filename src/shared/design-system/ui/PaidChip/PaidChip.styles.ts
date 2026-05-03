import styled, { css } from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';

interface StyledPaidChipProps {
  $status: '입금완료' | '미입금' | '확인중';
}

// HACK: 12px Medium에 해당하는 semantic token 없음.
// 그래서 caption.xsmall(12px Regular)에 caption.small-medium의 font-weight(Medium)를 override해 적용.
const typography = (() => {
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

const statusStyles = {
  입금완료: css`
    background: ${getToken('fill.primary.normal')};
    color: ${getToken('fg.static-white')};
  `,
  미입금: css`
    background: ${getToken('fill.normal-disable')};
    color: ${getToken('fg.normal-disable')};
  `,
  확인중: css`
    background: ${getToken('fill.normal')};
    color: ${getToken('fg.primary.normal')};
  `,
};

export const Chip = styled.div<StyledPaidChipProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${getToken('padding.2')} ${getToken('padding.3')};
  border-radius: ${getToken('radius.sm')};
  white-space: nowrap;
  ${typography}
  ${({ $status }) => statusStyles[$status]}
`;
