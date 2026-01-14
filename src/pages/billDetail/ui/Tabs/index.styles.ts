import styled from 'styled-components';

export const TabsList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.unit[16]};
`;

export const Tab = styled.div<{ $isActive: boolean }>`
  padding-bottom: ${({ theme }) => theme.unit[12]};
  border-bottom: 3px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.color.semantic.text.default : 'transparent'};
  cursor: pointer;
`;
