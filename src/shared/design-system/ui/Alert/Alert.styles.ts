import styled from 'styled-components';
import { getToken, getTypographyToken } from '@/shared/design-system';
import type { AlertState, AlertVariant } from './Alert';

const { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing } =
  getTypographyToken('typography.body.small');

const backgroundByState: Record<AlertState, ReturnType<typeof getToken>> = {
  info: getToken('fill.accent-blue.assistive'),
  success: getToken('fill.accent-green.assistive'),
  warning: getToken('fill.accent-yellow.assistive'),
  danger: getToken('fill.accent-red.assistive'),
};

export const Container = styled.div<{
  $state: AlertState;
  $variant: AlertVariant;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  /* HACK: Figma 스펙 padding 12px 10px 중 10px에 대응하는 semantic 토큰 없음 */
  padding: ${getToken('padding.4')} 10px;
  gap: ${getToken('gap.3')};
  border-radius: ${getToken('radius.lg')};
  background: ${({ $state, $variant }) =>
    $variant === 'white' ? getToken('fill.normal') : backgroundByState[$state]};
`;

export const Message = styled.p`
  flex: 1;
  min-width: 0;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  color: ${getToken('fg.normal')};
  margin: 0;
`;

export const IconWrapper = styled.span`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;
