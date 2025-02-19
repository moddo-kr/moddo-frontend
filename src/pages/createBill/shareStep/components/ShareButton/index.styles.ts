import styled from 'styled-components';

export const ShareModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.unit[32]};
  width: 100%;
`;

export const ModalTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
