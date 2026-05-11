import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const PaymentStatusMessage = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
`;

export const PaymentDateLabel = styled.span`
  ${applyTypography('typography.title.small')};
  color: ${getToken('fg.normal')};
`;

export const PaymentEmptyMessage = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
  text-align: center;
`;
