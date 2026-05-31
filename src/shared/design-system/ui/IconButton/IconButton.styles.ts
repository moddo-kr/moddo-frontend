import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  border-radius: ${getToken('radius.xs')};
  color: ${getToken('fg.alternative')};
  cursor: pointer;
  &:active:not(:disabled) {
    color: ${getToken('fg.neutral')};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${getToken('fg.normal-disable')};
  }
`;
