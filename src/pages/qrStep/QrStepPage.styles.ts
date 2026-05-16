import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const QrContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

export const QrField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: ${getToken('radius.lg')};
  background-color: ${getToken('bg.normal')};
`;
