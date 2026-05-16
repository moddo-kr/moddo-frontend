import styled, { css } from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

interface StyledTextButtonProps {
  $size: 'medium' | 'small';
}

const sizeStyles = {
  medium: css`
    gap: ${getToken('gap.2')};
    padding: ${getToken('padding.1')} ${getToken('padding.3')};
    ${applyTypography('typography.body.medium-semibold')}
  `,
  small: css`
    gap: ${getToken('gap.1')};
    padding: ${getToken('padding.1')} ${getToken('padding.2')};
    ${applyTypography('typography.body.small-semibold')}
  `,
};

export const TextButton = styled.button<StyledTextButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  border-radius: ${getToken('radius.xs')};
  color: ${getToken('fg.assistive')};
  cursor: pointer;
  white-space: nowrap;
  ${({ $size }) => sizeStyles[$size]}
  &:active:not(:disabled) {
    background: ${getToken('fill.normal-pressed')};
    color: ${getToken('fg.alternative')};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${getToken('fg.normal-disable')};
  }
`;
