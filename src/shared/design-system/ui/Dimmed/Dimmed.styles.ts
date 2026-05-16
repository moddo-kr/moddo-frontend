import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${getToken('bg.dim')};
  opacity: 0.32;
  z-index: 9997;
`;
