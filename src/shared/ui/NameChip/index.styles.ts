import styled from 'styled-components';
import { TextVariant } from '@/shared/ui/Text/index.styles';
import { NameChipSize, NameChipVariant } from './index.type';

interface NameChipProps {
  $variant: NameChipVariant;
  $size: NameChipSize;
}

export const Chip = styled.div<NameChipProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.radius.circle};
  padding: ${({ theme, $size }) =>
    $size === 'md'
      ? `${theme.unit[8]} ${theme.unit[12]}`
      : `${theme.unit[4]} ${theme.unit[12]}`};
  background-color: ${({ theme, $variant }) => {
    if ($variant === 'orange') return theme.color.semantic.orange.default;
    if ($variant === 'alternative')
      return theme.color.semantic.background.normal.alternative;
    if ($variant === 'disabled')
      return theme.color.semantic.background.normal.disabled;
    return 'inherit';
  }};
  color: ${({ theme, $variant }) => {
    if ($variant === 'orange') return theme.color.semantic.text.inverse;
    if ($variant === 'alternative') return theme.color.semantic.text.default;
    if ($variant === 'disabled') return theme.color.semantic.text.disabled;
    return 'inherit';
  }};
  ${({ $size }) =>
    $size === 'md' ? TextVariant('body2R') : TextVariant('caption')};
`;
