import styled from 'styled-components';

export const BottomSafeArea = styled.div`
  width: 100%;
  height: calc(
    1rem + env(safe-area-inset-bottom)
  ); /* 뷰포트의 하단 안전 영역으로부터 1rem을 띄울 수 있도록 */
  background: transparent;
  overflow: hidden;
`;
