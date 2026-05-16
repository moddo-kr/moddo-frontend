import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const Link = styled.a`
  padding: ${getToken('padding.4')} ${getToken('padding.6')};
  ${applyTypography('typography.body.medium')};
`;
