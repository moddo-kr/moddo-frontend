import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const HeaderTrailingLabel = styled.span`
  ${applyTypography('typography.body.medium')};
`;

export const GroupNameHighlight = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.primary.normal')};
`;

export const ExpenseFormList = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  width: 100%;
  flex: 1 0 0;
  overflow-y: auto;
  padding: 0 ${getToken('padding.6')} 1.5rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  background: ${getToken('bg.neutral')};
`;
