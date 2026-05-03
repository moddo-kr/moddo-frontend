import styled, { css } from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';

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

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  height: 2.5rem;
  /* HACK: pr 14px에 해당하는 토큰 없음. rem 단위로 하드코딩. */
  padding: ${getToken('padding.5')} 0.875rem ${getToken('padding.5')}
    ${getToken('padding.4')};
  background: ${getToken('fill.inverse.neutral')};
  border-radius: ${getToken('radius.full')};
  white-space: nowrap;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
`;

export const Message = styled.p`
  ${applyTypography('typography.body.small')}
  color: ${getToken('fg.inverse.normal')};
`;
