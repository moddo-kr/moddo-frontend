import styled from 'styled-components';
import { TextVariant } from '../Text/index.styles';

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.unit[8]};
  padding: ${({ theme }) => `${theme.unit[10]} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.default};
`;

export const NumberInput = styled.input<{ $variant?: 'lg' | 'sm' }>`
  all: unset;
  flex: 1;
  text-align: right;
  ${({ $variant }) =>
    $variant === 'lg' ? TextVariant('title') : TextVariant('body1Sb')};
  color: ${({ $variant, theme }) =>
    $variant === 'lg'
      ? theme.color.semantic.text.strong
      : theme.color.semantic.text.default};
  &::placeholder {
    color: ${({ theme }) => theme.color.semantic.text.subtle};
    opacity: 0.5;
  }
`;
