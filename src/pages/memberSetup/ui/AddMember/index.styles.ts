import styled from 'styled-components';
import { getToken, applyTypography } from '@/shared/design-system';

export const InputRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.4')};
  width: 100%;
`;

export const MemberCount = styled.div`
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  ${applyTypography('typography.body.medium-semibold')}
`;
