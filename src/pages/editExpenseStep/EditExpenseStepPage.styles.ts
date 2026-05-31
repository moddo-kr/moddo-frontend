import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';
import { ACTION_AREA_BOTTOM_FIXED_PADDING } from '@/shared/design-system/ui';

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
  padding: 0 ${getToken('padding.6')} ${ACTION_AREA_BOTTOM_FIXED_PADDING};
  background: ${getToken('bg.neutral')};
`;
