import styled from 'styled-components';

export const BottomButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.unit[20]}`};
  margin-bottom: ${({ theme }) => theme.unit[16]};
`;
