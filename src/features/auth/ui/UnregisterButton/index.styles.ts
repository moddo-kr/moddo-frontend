import styled from 'styled-components';
import { applyTypography } from '@/shared/design-system';

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[20]}`};
  ${applyTypography('typography.body.medium')};
`;
