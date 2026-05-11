import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const Wrapper = styled.div`
  overflow-x: hidden;
  max-width: 600px;
  min-width: 320px;
  height: 100dvh;
  min-height: 100dvh;
  width: 100%;
  background-color: ${getToken('bg.normal')};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
