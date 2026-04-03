import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  position: relative; // 부모 요소
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const DeleteButton = styled.button`
  position: absolute; // 자식 요소
  width: fit-content;
  height: fit-content;
  &:hover {
    filter: brightness(0.6);
  }
`;

export const CheckedIcon = styled.div<{ $size: number }>`
  position: absolute; // 자식 요소
  top: -0.25rem;
  right: -0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: ${({ theme }) => theme.color.semantic.icon.default};
  border-radius: ${({ theme }) => theme.radius.circle};
`;
