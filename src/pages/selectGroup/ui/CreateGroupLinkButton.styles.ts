import { Link } from 'react-router';
import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const LinkButton = styled(Link)`
  width: 100%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  background-color: ${({ theme }) => theme.color.semantic.orange.default};
  border-radius: ${({ theme }) => theme.radius.default};
  padding: ${({ theme }) => `${theme.unit[16]} ${theme.unit[8]}`};
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
