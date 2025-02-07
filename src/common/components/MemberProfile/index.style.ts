import styled from 'styled-components';

export const ProfileImg = styled.img<{ bgcolor: string }>`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 50%;
`;

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