import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const ShareModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const ModalTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ShareItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.6')};
  padding-bottom: ${getToken('padding.5')};
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: ${getToken('radius.full')};
  background-color: ${getToken('fill.normal')};
  border: 1px solid ${getToken('border.alternative')};
  cursor: pointer;
`;
