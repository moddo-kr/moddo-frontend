import styled from 'styled-components';
import { TextVariant } from '../Text/index.styles';

export const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: ${({ theme }) => theme.unit[8]};
  padding: ${({ theme }) => `${theme.unit[10]} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.default};
  flex-grow: 1;
  min-width: 0; // 자식 요소가 부모 요소의 크기를 넘어가지 않도록 함
`;

export const NumberInput = styled.input<{ $variant?: 'lg' | 'sm' }>`
  all: unset;
  flex: 1;
  text-align: right;
  min-width: 0; // 자식 요소가 부모 요소의 크기를 넘어가지 않도록 함
  flex-shrink: 1;
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
