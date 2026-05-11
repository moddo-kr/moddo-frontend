import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const SelectGroupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${getToken('bg.neutral')};
`;

export const SelectGroupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: ${getToken('layout.gap.y-nav-to-title')};
  flex-grow: 1;
  background-color: ${getToken('bg.neutral')};
`;

export const GroupButtonList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.25rem 1.25rem 0;
  gap: ${getToken('gap.4')};
`;
