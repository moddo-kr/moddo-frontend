import styled, { css } from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

interface StyledButtonProps {
  $variant: 'primary' | 'secondary' | 'tertiary' | 'black';
  $size: 'medium' | 'small' | 'xsmall';
}

const sizeStyles = {
  medium: css`
    padding: ${getToken('padding.4')} ${getToken('padding.5')};
    ${applyTypography('typography.body.medium-semibold')}
  `,
  small: css`
    padding: ${getToken('padding.3')} ${getToken('padding.5')};
    ${applyTypography('typography.body.small-semibold')}
  `,
  xsmall: css`
    height: 1.75rem;
    padding: 0 ${getToken('padding.4')};
    ${applyTypography('typography.caption.small-medium')}
  `,
};

const variantStyles = {
  primary: css`
    background: ${getToken('fill.primary.normal')};
    color: ${getToken('fg.static-white')};
    &:active:not(:disabled) {
      background: ${getToken('fill.primary.normal-pressed')};
    }
  `,
  secondary: css`
    background: ${getToken('fill.neutral')};
    color: ${getToken('fg.normal')};
    &:active:not(:disabled) {
      background: ${getToken('fill.neutral-pressed')};
    }
  `,
  tertiary: css`
    background: transparent;
    color: ${getToken('fg.neutral')};
    border: 1px solid ${getToken('border.neutral')};
    /* tertiary는  pressed 상태의 시각적 변화가 없어 스타일을 따로 지정하지 않음 */
  `,
  black: css`
    background: ${getToken('fill.inverse.neutral')};
    color: ${getToken('fg.static-white')};
    &:active:not(:disabled) {
      background: ${getToken('fill.inverse.normal')};
    }
  `,
};

export const Button = styled.button<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${getToken('gap.2')};
  border-radius: ${getToken('radius.full')};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  &:disabled {
    cursor: not-allowed;
    background: ${getToken('fill.normal-disable')};
    color: ${getToken('fg.normal-disable')};
    border: none;
  }
`;
