import styled, { css } from 'styled-components';
import { TextVariant } from '@/common/components/Text/index.styles';
import { ButtonSize, ButtonVariant } from './index.type';

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
}

const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.color.primitive.orange[400]};
    color: ${({ theme }) => theme.color.semantic.text.inverse};
  `,
  secondary: css`
    background: ${({ theme }) => theme.color.semantic.secondary.default};
    color: ${({ theme }) => theme.color.semantic.text.strong};
  `,
  tertiary: css`
    background: transparent;
    color: ${({ theme }) => theme.color.semantic.text.strong};
  `,
};

const buttonSizes = {
  md: css`
    padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[16]}`};
  `,
  sm: css`
    padding: ${({ theme }) => `${theme.unit[8]} ${theme.unit[16]}`};
  `,
  icon: css`
    padding: 0;
    background: transparent;
  `,
};

export const Button = styled.button<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.unit[4]};
  border-radius: ${({ theme }) => theme.radius.circle};
  cursor: pointer;
  border: none;
  ${({ $variant }) => buttonVariants[$variant]};
  ${({ $size }) => buttonSizes[$size]};
  ${TextVariant('body1Sb')};
  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) =>
      theme.color.semantic.background.normal.disabled};
    color: ${({ theme }) => theme.color.semantic.text.inverse};
  }
`;
