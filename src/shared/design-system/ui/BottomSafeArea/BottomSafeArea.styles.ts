import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const BottomSafeArea = styled.div`
  width: 100%;
  height: 1rem;
  background: ${getToken('bg.normal')};
  overflow: hidden;
`;
