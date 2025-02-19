import { styled } from 'styled-components';
import { TextVariant } from '@/common/components/Text/index.styles';

export const NumPadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.unit[16]};
  width: 100%;
`;

export const ValueWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[20]}`};
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.unit[8]};
`;

export const DisplayValue = styled.span<{ $isEmpty?: boolean }>`
  ${TextVariant('heading1')};
  color: ${({ theme, $isEmpty }) =>
    $isEmpty
      ? theme.color.semantic.text.subtle
      : theme.color.semantic.text.strong};
  opacity: ${({ $isEmpty }) => ($isEmpty ? 0.5 : 1)};
`;

export const ShortcutWrapper = styled.div`
  display: flex;
  padding: ${({ theme }) => `${theme.unit[0]} ${theme.unit[20]}`};
  gap: ${({ theme }) => theme.unit[8]};
`;

export const ShortcutButton = styled.button<{ $isDanger?: boolean }>`
  all: unset;
  display: flex;
  padding: ${({ theme }) => `${theme.unit[8]} ${theme.unit[16]}`};
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.unit[8]};
  flex: 1 0 0;
  border-radius: ${({ theme }) => theme.unit.max};
  background: ${({ theme, $isDanger }) =>
    $isDanger ? theme.color.semantic.background.state.danger : '#EDEEEE'};
  ${TextVariant('body2R')};
  color: ${({ theme, $isDanger }) =>
    $isDanger
      ? theme.color.semantic.state.danger
      : theme.color.semantic.text.default};
`;

export const NumCellWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: ${({ theme }) => `${theme.unit[0]} ${theme.unit[20]}`};
  width: 100%;
`;

export const NumCellButton = styled.button<{ $isSecondary?: boolean }>`
  all: unset;
  display: flex;
  box-sizing: border-box;
  height: ${({ theme }) => theme.unit[64]};
  padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[16]}`};
  justify-content: center;
  align-items: center;
  ${({ $isSecondary }) =>
    $isSecondary ? TextVariant('body1R') : TextVariant('heading1')};
  color: ${({ theme, $isSecondary }) =>
    $isSecondary
      ? theme.color.semantic.text.default
      : theme.color.semantic.text.strong};
  &:active {
    background: ${({ theme }) =>
      theme.color.semantic.background.normal.alternative};
  }
`;
