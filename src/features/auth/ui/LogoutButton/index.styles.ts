import styled from 'styled-components';
import { applyTypography } from '@/shared/design-system';

export const Button = styled.button`
  padding: ${({ theme }) => `${theme.unit[12]} ${theme.unit[20]}`};
  color: ${({ theme }) => theme.color.semantic.state.danger};
  ${applyTypography('typography.body.medium')};
`;
