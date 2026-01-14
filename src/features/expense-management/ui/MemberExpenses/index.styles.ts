import styled from 'styled-components';

export const MemberExpensesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[8]};
  width: 100%;
`;

export const MemberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(
    ${({ theme }) => theme.unit[24]},
    10vw,
    ${({ theme }) => theme.unit[64]}
  );
  align-self: stretch;
`;

/* 멤버 */

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.unit[4]};
  flex-shrink: 0;
`;
