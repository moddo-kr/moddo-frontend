import styled from 'styled-components';

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) =>
    `${theme.unit[32]} ${theme.unit[20]} ${theme.unit[32]} 0`};
`;

// 점, 선, 내용, 여백을 포함하고 있는 타임라인 아이템
export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 4.25rem 1fr;
  justify-items: stretch;
`;

export const ExpenseContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 18.875rem;
  height: 6.25rem; // TODO : 지우기
  padding: ${({ theme }) => `${theme.unit[24]} ${theme.unit[20]}`};
  align-items: center;
  /* align-content: center; */
  gap: 0.25rem 5.625rem; // unit/4
  /* flex-shrink: 0;
  flex-wrap: wrap; */
  border-radius: 1.25rem; // border/radius/large
  background: #f1f3f5; // background/normal/alternative
`;

export const ContentTitle = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.unit[8]};
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

// 타임라인 아이템의 왼쪽에 위치하는 컴포넌트 (점, 점선)
export const TimelineLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem 0;
  margin-right: 1.25rem;
`;

export const MemberChipContainer = styled.div`
  width: 100%;
`;
