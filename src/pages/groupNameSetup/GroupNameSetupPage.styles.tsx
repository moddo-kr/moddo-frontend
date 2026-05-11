import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.unit[28]} ${theme.unit[20]}`};
  flex: 1;
`;

export const ValidationMessage = styled.p`
  ${applyTypography('typography.caption.xsmall')};
  color: ${getToken('fg.accent-red.normal')};
`;
