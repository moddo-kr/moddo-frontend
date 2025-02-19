import styled from 'styled-components';

export const MemberExpensesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[8]};
  width: 100%;
`;

export const MemberContainer = styled.div`
  display: flex;
  padding-right: var(--unit-4, 0.25rem);
  align-items: center;
  gap: var(--unit-64, 4rem);
  align-self: stretch;
`;

/* 멤버 */

export const ProfileImg = styled.img`
  width: ${({ theme }) => theme.unit[36]};
  height: ${({ theme }) => theme.unit[36]};
  object-fit: contain;
  border-radius: 50%;
`;

export const ProfileWrapper = styled.div`
  position: relative; // 부모 요소
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const DeleteButtonWrapper = styled.div`
  position: absolute; // 자식 요소
  width: fit-content;
  height: fit-content;
`;
