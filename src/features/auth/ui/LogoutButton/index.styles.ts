import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const Button = styled.button`
  padding: ${getToken('padding.4')} ${getToken('padding.6')};
  color: ${getToken('fg.accent-red.normal')};
  ${applyTypography('typography.body.medium')};
`;
