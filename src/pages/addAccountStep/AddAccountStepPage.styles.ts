import styled from 'styled-components';

export const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.unit[56]} ${theme.unit[20]}`};
  flex: 1;
  gap: ${({ theme }) => theme.unit[48]};
`;
