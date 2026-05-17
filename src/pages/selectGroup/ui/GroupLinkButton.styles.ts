import { Link } from 'react-router';
import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const LinkButton = styled(Link)`
  width: 100%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  background-color: ${getToken('bg.normal')};
  border-radius: ${getToken('radius.lg')};
  border: ${`1px solid ${getToken('border.neutral')}`};
  padding: ${getToken('padding.6')} ${getToken('padding.5')};
  cursor: pointer;
`;

export const GroupName = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
`;

export const GroupLinkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
`;

export const MemberChipRow = styled.div`
  display: flex;
  gap: ${getToken('gap.2')};
`;
