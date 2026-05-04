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
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  width: 100%;
  background: ${getToken('fill.neutral')};
  border-radius: ${getToken('radius.xl')};
  padding: ${getToken('padding.6')};
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.2')};
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

export const Description = styled.span`
  ${applyTypography('typography.body.medium')}
  color: ${getToken('fg.alternative')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Amount = styled.span`
  ${applyTypography('typography.heading.small')}
  color: ${getToken('fg.normal')};
`;
