import styled from 'styled-components';
import Text from '@/shared/ui/Text';

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

/* 이름 */
export const NameText = styled(Text)`
  white-space: nowrap;
`;
