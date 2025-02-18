import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.color.primitive.base.black};
  opacity: 0.5;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: ${({theme}) => theme.color.primitive.base.white};
  color: ${({theme}) => theme.color.semantic.text.default};
  padding: ${({theme}) => `${theme.unit[24]} ${theme.unit[20]}`};
  border-radius: ${({theme}) => theme.radius.default};
`;
