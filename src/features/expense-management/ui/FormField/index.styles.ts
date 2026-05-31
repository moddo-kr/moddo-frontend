import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.4')};
  width: 100%;
`;

export const FormFieldHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: ${getToken('gap.2')};
`;

export const FieldLabel = styled.span`
  ${applyTypography('typography.body.small-semibold')};
`;

export const RequiredMark = styled.span`
  ${applyTypography('typography.body.small')};
  color: ${getToken('fg.accent-red.normal')};
`;
