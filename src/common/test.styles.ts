import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.color.primitive.base.black};
  opacity: 0.5;
  z-index: 9998;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.color.primitive.base.white};
  color: ${({ theme }) => theme.color.semantic.text.default};
  padding: ${({ theme }) => `${theme.unit[24]} ${theme.unit[20]}`};
  border-radius: ${({ theme }) => theme.radius.default};
  z-index: 10000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 83dvw;
  height: fit-content;
  max-width: 31rem;
  min-width: 16.563rem;
  background: ${({ theme }) => theme.color.semantic.background.normal.default};
`;

export const DefaultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.unit[28]};
  align-items: flex-start;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.color.semantic.background.normal.default};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.unit[16]};
  background: ${({ theme }) => theme.color.semantic.background.normal.default};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.semantic.background.normal.default};
`;
