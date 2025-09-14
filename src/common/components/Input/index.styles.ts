import styled, { css } from 'styled-components';
import { TextVariant } from '@/common/components/Text/index.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.unit[8]};
  width: 100%;
  min-width: 0;
`;

export const LabelField = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.unit[4]};
`;

interface StyledInputWrapperProps {
  $error: boolean;
  $disabled: boolean;
}

const StyledInputWrapper = {
  filled: css`
    border: ${({ theme }) => `1px solid ${theme.color.semantic.border.strong}`};
    background: ${({ theme }) =>
      theme.color.semantic.background.normal.default};
  `,
  error: css`
    border: ${({ theme }) =>
      `2px solid ${theme.color.semantic.state.danger} !important`};
    background: ${({ theme }) =>
      `${theme.color.semantic.background.normal.default} !important`};
  `,
  disabled: css`
    border: ${({ theme }) =>
      `1px solid ${theme.color.semantic.border.default} !important`};
    background: ${({ theme }) =>
      `${theme.color.semantic.background.normal.disabled} !important`};
  `,
  empty: css`
    border: ${({ theme }) =>
      `1px solid ${theme.color.semantic.border.default}`};
    background: ${({ theme }) =>
      theme.color.semantic.background.normal.default};
  `,
  focused: css`
    border: ${({ theme }) =>
      `2px solid ${theme.color.semantic.orange.default} !important`};
    background: ${({ theme }) =>
      `${theme.color.semantic.background.normal.default} !important`};
  `,
};

export const Wrapper = styled.div<StyledInputWrapperProps>`
  /* 기본 스타일링 */
  display: flex;
  padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[16]}`};
  box-sizing: border-box;
  height: ${({ theme }) => theme.unit[48]};
  align-items: center;
  gap: ${({ theme }) => theme.unit[8]};
  align-self: stretch;
  border-radius: ${({ theme }) => theme.radius.default};
  /* 입력값이 있는 경우 (placeholder가 보이지 않는 경우) */
  &:has(input:not(:placeholder-shown)) {
    ${StyledInputWrapper.filled}
  }
  /* 입력값이 없는 경우 (placeholder가 보이는 경우) */
  &:has(input:placeholder-shown) {
    ${StyledInputWrapper.empty}
  }
  /* 포커스된 경우 */
  &:focus-within {
    ${StyledInputWrapper.focused}
  }
  ${({ $error }) => ($error ? StyledInputWrapper.error : '')}
  ${({ $disabled }) => ($disabled ? StyledInputWrapper.disabled : '')}
`;

export const Input = styled.input`
  all: unset;
  flex: 1;
  ${TextVariant('body1R')}
  color: ${({ theme }) => theme.color.semantic.text.subtle};
  &::placeholder {
    opacity: 0.5;
  }
  min-width: 0;
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
`;
