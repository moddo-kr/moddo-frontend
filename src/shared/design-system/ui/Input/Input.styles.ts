import styled, { css } from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';
import type { InputState, InputVariant } from './Input';

const defaultWrapperStateStyles = {
  default: css`
    border: 1px solid ${getToken('border.neutral')};
    background: ${getToken('fill.normal')};
    &:focus-within {
      border: 2px solid ${getToken('border.primary.normal')};
    }
  `,
  /* HACK: error border에 대응하는 semantic token 없음, fg.accent-red.normal(red.50) 사용 */
  error: css`
    border: 2px solid ${getToken('fg.accent-red.normal')};
    background: ${getToken('fill.normal')};
  `,
  disabled: css`
    border: 1px solid ${getToken('border.neutral')};
    background: ${getToken('fill.normal-disable')};
    cursor: not-allowed;
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${getToken('gap.4')};
  width: 100%;
`;

export const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.2')};
`;

export const LabelText = styled.label`
  ${applyTypography('typography.body.small-semibold')}
  color: ${getToken('fg.neutral')};
  cursor: pointer;
`;

export const Required = styled.span`
  ${applyTypography('typography.body.small')}
  color: ${getToken('fg.accent-red.normal')};
`;

export const InputWrapper = styled.div<{
  $state: InputState;
  $variant: InputVariant;
}>`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  width: 100%;
  overflow: hidden;
  ${({ $state, $variant }) =>
    $variant === 'price'
      ? css`
          padding: ${getToken('padding.4')} 0;
          border-bottom: 1px solid ${getToken('border.neutral')};
          justify-content: flex-end;
        `
      : css`
          border-radius: ${getToken('radius.lg')};
          padding: ${getToken('padding.4')} ${getToken('padding.5')};
          ${defaultWrapperStateStyles[$state]}
        `}
`;

export const StyledInput = styled.input<{ $variant: InputVariant }>`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  color: ${getToken('fg.normal')};
  ${({ $variant }) =>
    $variant === 'price'
      ? css`
          ${applyTypography('typography.title.small')}
          text-align: right;
        `
      : css`
          ${applyTypography('typography.body.medium')}
        `}
  &::placeholder {
    color: ${getToken('fg.assistive')};
    opacity: 0.5;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${getToken('fg.normal-disable')};
  }
`;

export const IconWrapper = styled.span<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  overflow: hidden;
  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const PriceUnit = styled.span`
  ${applyTypography('typography.title.small')}
  color: ${getToken('fg.normal')};
  flex-shrink: 0;
`;
