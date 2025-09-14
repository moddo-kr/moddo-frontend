import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.unit[32]} ${theme.unit[20]}`};
  gap: ${({ theme }) => theme.unit[16]};
`;
