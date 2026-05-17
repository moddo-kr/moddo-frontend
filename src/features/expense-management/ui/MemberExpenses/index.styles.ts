import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const MemberExpensesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
  width: 100%;
`;

export const MemberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(
    1.5rem,
    10vw,
    4rem
  ); /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  align-self: stretch;
`;

/* 멤버 */

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${getToken('gap.2')};
  flex-shrink: 0;
`;
