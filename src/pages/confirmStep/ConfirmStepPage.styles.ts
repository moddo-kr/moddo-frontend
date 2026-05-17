import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const HeaderTrailingLabel = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
`;

export const TotalExpenseLabel = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
`;

export const TotalExpenseAmount = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.normal')};
`;

export const TotalExpenseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 1.5rem 1.25rem;
  background-color: ${getToken('bg.neutral')};
`;
