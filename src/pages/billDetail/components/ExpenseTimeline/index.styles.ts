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

// 타임라인 아이템의 왼쪽에 위치하는 컴포넌트 (점, 점선)
export const TimelineLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem 0;
  margin-right: 1.25rem;
`;
