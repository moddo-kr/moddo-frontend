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
  height: fit-content;
  z-index: 9998;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* HACK: py 28px에 해당하는 padding 토큰 없음 (padding.6 = 20px). 하드코딩. */
  padding: 1.75rem ${getToken('padding.6')};
`;

export const Title = styled.div`
  ${applyTypography('typography.heading.small')}
  color: ${getToken('fg.strong')};
`;
