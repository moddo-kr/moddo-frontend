import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const EmptyStateMessage = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
  text-align: center;
`;
