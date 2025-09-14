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

export const ShareItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.unit[16]};
  padding-bottom: ${({ theme }) => theme.unit[16]};
`;

export const ShareButton = styled.button<{ $outline?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.unit[48]};
  height: ${({ theme }) => theme.unit[48]};
  border-radius: ${({ theme }) => theme.unit[48]};
  background-color: ${({ theme }) => theme.color.primitive.base.white};
  border: 1px solid ${({ theme }) => theme.color.semantic.border.subtle};
  cursor: pointer;
`;
