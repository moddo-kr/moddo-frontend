import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.unit[8]};
  width: 100%;
`;
