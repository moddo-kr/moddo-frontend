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
  flex-direction: column;
  gap: ${getToken('gap.4')};
  width: 100%;
  background: ${getToken('fill.normal')};
  border: 1px solid ${getToken('border.neutral')};
  border-radius: ${getToken('radius.xl')};
  padding: ${getToken('padding.5')} ${getToken('padding.6')};
`;

export const Label = styled.span`
  ${applyTypography('typography.body.medium-semibold')}
  color: ${getToken('fg.neutral')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
`;

export const LinkField = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.2')};
  width: 100%;
  overflow: hidden;
`;

export const LinkText = styled.span`
  ${applyTypography('typography.caption.xsmall')}
  color: ${getToken('fg.assistive')};
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${getToken('fg.assistive')};
`;
