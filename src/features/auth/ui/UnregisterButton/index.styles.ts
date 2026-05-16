import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const Button = styled.button`
  padding: ${getToken('padding.4')} ${getToken('padding.6')};
  ${applyTypography('typography.body.medium')};
`;
