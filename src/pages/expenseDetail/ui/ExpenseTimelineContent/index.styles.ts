import { Accordion } from '@/shared/design-system/ui';
import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const ExpenseContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem ${getToken('padding.6')}; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  align-items: center;
  gap: ${getToken('gap.2')};
  border-radius: 1.25rem /* HACK: 토큰에 없는 border-radius 값 */;
  background: ${getToken('bg.neutral')};
`;

export const ContentTitle = styled.div`
  display: flex;
  gap: ${getToken('gap.4')};
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const MemberChipContainer = styled(Accordion)`
  width: 100%;
`;

export const MemberChipHeader = styled(Accordion.Header)`
  display: flex;
  gap: ${getToken('gap.2')};
  padding: 0;
  width: fit-content;
`;

export const MemberChipList = styled(Accordion.Content)`
  display: flex;
  flex-wrap: wrap;
  gap: ${getToken('gap.3')};
  margin-top: 0.375rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
`;

export const ExpenseContentName = styled.span`
  ${applyTypography('typography.body.medium-semibold')};
  color: ${getToken('fg.alternative')};
`;

export const ExpenseTotalAmount = styled.span`
  ${applyTypography('typography.heading.small')};
  color: ${getToken('fg.normal')};
`;

export const MemberCount = styled.span`
  ${applyTypography('typography.body.medium')};
`;
