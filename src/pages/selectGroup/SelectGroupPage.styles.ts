import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const SelectGroupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${getToken('layout.gap.y-nav-to-title')};
  flex: 1;
`;

export const GroupButtonList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.25rem 1.25rem 0;
  gap: ${getToken('gap.4')};
`;
