import styled from 'styled-components';

export const BillFormList = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[24]};
  width: 100%;
  flex: 1 0 0;
  overflow-y: auto;
  padding: ${({ theme }) => `${theme.unit[24]} ${theme.unit[20]}`};
  background: ${({ theme }) =>
    theme.color.semantic.background.normal.alternative};
`;
