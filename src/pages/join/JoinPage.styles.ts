import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const ScrollWrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

export const ScrollArea = styled.div`
  height: 100%;
  overflow-y: auto;
`;

// TODO: 공통 breakpoint를 정해두는게 좋을 것 같습니다!
// TODO: 피그마 디자인 기준 4열이나, 390px 이상 5열 / 600px 이상 6열 반응형 처리에 대한 디자인 의견이 필요합니다.
export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    4,
    1fr
  ); // 기본적으로 4열로 시작 (피그마 디자인 기준)
  justify-items: center;
  padding: ${getToken('padding.5')};

  // 피그마 디자인의 Frame 너비가 390px 이상이므로, 390px 이상에서는 5열로 변경
  @media (min-width: 390px) {
    grid-template-columns: repeat(5, 1fr);
  }

  // body 최대 너비가 600px 이므로, 600px 이상에서는 6열로 변경
  @media (min-width: 600px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const ProfileButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
  pointer-events: none;
`;
