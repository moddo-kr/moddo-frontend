import styled from 'styled-components';

export const Container = styled.span`
  display: inline-flex;
  height: ${({ theme }) => theme.unit[32]};
  padding: ${({ theme }) => `0.3125rem ${theme.unit[12]}`};
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.unit[4]};
  border-radius: ${({ theme }) => theme.unit.max};
  background: ${({ theme }) => theme.color.semantic.secondary.default};
`;
