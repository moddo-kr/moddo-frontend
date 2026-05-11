import { Link } from 'react-router';
import styled from 'styled-components';
import { applyTypography } from '@/shared/design-system';

export const LinkButton = styled(Link)`
  width: 100%;
  @media (min-width: 600px) {
    font-size: 22px;
  }
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.default};
  border-radius: ${({ theme }) => theme.radius.default};
  border: ${({ theme }) => `1px solid ${theme.color.semantic.border.default}`};
  padding: ${({ theme }) => `${theme.unit[20]} ${theme.unit[16]}`};
  cursor: pointer;
`;

export const GroupName = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
`;
