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
`;

export const Dot = styled.div`
  width: ${({ theme }) => theme.unit[10]};
  height: ${({ theme }) => theme.unit[10]};
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.color.primitive.orange[500]};
  flex-shrink: 0;
`;

export const Line = styled.div<{ $hidden?: boolean }>`
  flex: 1;
  ${({ $hidden }) => $hidden && 'visibility: hidden;'}
  border-left: 2px dotted ${({ theme }) =>
    theme.color.semantic.secondary.strong};
`;

export const Gap = styled.div`
  height: ${({ theme }) => theme.unit[16]};
`;
