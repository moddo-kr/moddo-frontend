import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const DateGroupLabel = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0rem 1.25rem 1.25rem 1.25rem;
  flex: 1;
  overflow-y: auto;
  background-color: ${getToken('bg.neutral')};
`;
