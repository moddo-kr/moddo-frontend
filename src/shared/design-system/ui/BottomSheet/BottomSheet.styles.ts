import { animated } from '@react-spring/web';
import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const BottomSheetWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  background: ${getToken('bg.normal')};
  border-radius: ${getToken('radius.xl')} ${getToken('radius.xl')} 0 0;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 37.5rem;
  min-width: 320px; /* 페이지 레이아웃에 설정된 최소 너비 */
  height: fit-content;
  z-index: 9998;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${getToken('padding.7')} ${getToken('padding.6')};
`;

export const Title = styled.div`
  ${applyTypography('typography.heading.small')}
  color: ${getToken('fg.strong')};
`;
