import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

interface StyledPageLayoutProps {
  $bg?: 'normal' | 'neutral';
}

export const PageLayout = styled.div<StyledPageLayoutProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ $bg }) =>
    $bg === 'neutral' ? getToken('bg.neutral') : getToken('bg.normal')};
`;
