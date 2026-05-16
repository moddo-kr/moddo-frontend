import styled from 'styled-components';
import { getToken } from '@/shared/design-system';
import { ACTION_AREA_BOTTOM_FIXED_PADDING } from '@/shared/design-system/ui';

interface StyledPageLayoutProps {
  $bg?: 'normal' | 'neutral';
  $hasBottomFixedAction: boolean;
}

export const PageLayout = styled.div<StyledPageLayoutProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: ${({ $hasBottomFixedAction }) =>
    $hasBottomFixedAction ? ACTION_AREA_BOTTOM_FIXED_PADDING : 0};
  background-color: ${({ $bg }) =>
    $bg === 'neutral' ? getToken('bg.neutral') : getToken('bg.normal')};
`;
