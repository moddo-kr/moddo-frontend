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
  justify-content: space-between;
  width: 100%;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  min-width: 0;
  flex: 1;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

export const Nickname = styled.span`
  ${applyTypography('typography.body.small-semibold')}
  color: ${getToken('fg.alternative')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const Amount = styled.span`
  ${applyTypography('typography.title.small')}
  color: ${getToken('fg.normal')};
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
`;
