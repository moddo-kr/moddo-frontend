import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const StateMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem ${getToken('padding.6')} 2rem 0; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
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
  width: 0.625rem;
  height: 0.625rem;
  border-radius: ${getToken('radius.full')};
  background-color: ${getToken('fill.primary.normal')};
  flex-shrink: 0;
`;

export const Line = styled.div<{ $hidden?: boolean }>`
  flex: 1;
  ${({ $hidden }) => $hidden && 'visibility: hidden;'}
  border-left: 2px dotted #d2d4d5; /* HACK: 토큰에 정의되어 있지 않아 임시로 하드코딩함 */
`;

export const Gap = styled.div`
  height: 1rem;
`;
