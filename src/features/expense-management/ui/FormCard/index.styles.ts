import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const RefTarget = styled.div`
  height: 1.5rem;
`;

export const FormCard = styled.div`
  display: flex;
  padding: 1.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: ${getToken('gap.6')};
  border-radius: 1.25rem /* HACK: 토큰에 없는 border-radius 값 */;
  border: 1px solid #d2d4d5; /* HACK: 토큰에 정의되어 있지 않아 임시로 하드코딩함 */
  background: ${getToken('fill.normal')};
`;

export const FormCardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  width: 100%;
`;

export const ExpenseSequenceLabel = styled.span`
  ${applyTypography('typography.title.small')};
`;
