import styled, { css } from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';

const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } =
  getTypographyToken('typography.heading.medium');

const baseText = css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  white-space: nowrap;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${getToken('gap.4')};
  padding-top: ${getToken('padding.4')};
  padding-bottom: ${getToken('padding.4')};
  width: 100%;
`;

export const Placeholder = styled.span`
  ${baseText}
  color: ${getToken('fg.assistive')};
  opacity: 0.5;
`;

export const Value = styled.span`
  ${baseText}
  color: ${getToken('fg.normal')};
`;

export const Unit = styled.span`
  ${baseText}
  color: ${getToken('fg.normal')};
`;
