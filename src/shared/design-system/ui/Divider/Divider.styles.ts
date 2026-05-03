import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const Divider = styled.div`
  width: 100%;
  height: 8px;
  background: ${getToken('fill.neutral')};
`;
