import { Link } from 'react-router';
import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const LinkButton = styled(Link)`
  width: 100%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  background-color: ${getToken('fill.primary.normal')};
  border-radius: ${getToken('radius.lg')};
  padding: ${getToken('padding.5')} ${getToken('padding.3')};
  cursor: pointer;
`;

export const CreateGroupLabel = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.inverse.normal')};
`;

export const CreateGroupButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${getToken('gap.2')};
`;
