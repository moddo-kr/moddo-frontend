import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

export const TabListContainer = styled.div`
  padding: ${({ theme }) =>
    `${theme.unit[24]} ${theme.unit[20]} 0 ${theme.unit[20]}`};
  border-bottom: 1px solid ${({ theme }) => theme.color.semantic.border.subtle};
`;
