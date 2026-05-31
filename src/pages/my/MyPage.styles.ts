import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${getToken('padding.6')};
  gap: ${getToken('gap.6')};
  min-height: 5.925rem;
  background-color: ${getToken('bg.neutral')};
`;
