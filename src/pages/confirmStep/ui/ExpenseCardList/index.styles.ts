import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0rem 1.25rem 1.25rem 1.25rem;
  flex: 1;
  overflow-y: auto;
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
`;
