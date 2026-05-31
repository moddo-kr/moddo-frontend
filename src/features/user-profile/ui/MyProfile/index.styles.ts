import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${getToken('padding.6')};
  gap: ${getToken('gap.6')};
  min-height: 5.925rem;
  background-color: ${getToken('bg.neutral')};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const UserName = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
`;

export const UserEmail = styled.span`
  ${applyTypography('typography.body.small')};
  color: ${getToken('fg.neutral')};
  opacity: 0.5;
`;
