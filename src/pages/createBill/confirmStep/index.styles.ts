import styled from 'styled-components';

export const TotalExpenseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 1.5rem 1.25rem;
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
`;
