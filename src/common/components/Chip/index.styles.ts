import styled, { css } from 'styled-components';
import { TextVariant } from '@/common/components/Text/index.styles';
import { ChipVariant, ChipSize } from './index.type';

interface StyledChipContainerProps {
  $variant: ChipVariant;
  $size: ChipSize;
}

const chipSizes = {
  md: css`
    padding: ${({ theme }) => `${theme.unit[8]} ${theme.unit[12]}`};
    ${TextVariant('body2R')};
  `,
  sm: css`
    padding: ${({ theme }) => `${theme.unit[4]} ${theme.unit[12]}`};
    ${TextVariant('caption')};
  `,
};

const chipVariants = {
  primary: css`
    background: ${({ theme }) => theme.color.semantic.primary.default};
    color: ${({ theme }) => theme.color.semantic.text.inverse};
  `,
  secondary: css`
    background: ${({ theme }) => theme.color.semantic.secondary.default};
    color: ${({ theme }) => theme.color.semantic.text.default};
  `,
  disabled: css`
    background: ${({ theme }) => theme.color.semantic.icon.disabled};
    color: ${({ theme }) => theme.color.primitive.base.white};
  `,
};

export const Container = styled.div<StyledChipContainerProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.unit[2]};
  border-radius: ${({ theme }) => theme.radius.circle};
  ${({ $size }) => chipSizes[$size]};
  ${({ $variant }) => chipVariants[$variant]};
  white-space: nowrap;
`;
