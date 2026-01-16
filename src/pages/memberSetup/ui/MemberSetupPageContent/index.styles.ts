import styled from 'styled-components';

export const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.unit[28]} ${theme.unit[20]}`};
  flex: 1;
`;
