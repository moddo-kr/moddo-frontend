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

export const PaymentStatusContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem ${getToken('padding.6')} 0; /* semantic token으로 정의되지 않은 값을 의도적으로 사용함 */
  flex: 1;
  background-color: ${getToken('bg.normal')};
`;

export const PaymentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem ${getToken('padding.6')} 5.8125rem; /* 24px top and LIST_BOTTOM_SPACING_PX(93px) are intentional non-token values */
  flex: 1;
  height: auto;
  background-color: ${getToken('bg.normal')};
`;

export const PaymentSectionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem; /* semantic token으로 정의되지 않은 의도적 값 */
`;

export const PaymentDateGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.6')};
`;

export const PaymentCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getToken('gap.7')};
`;

export const PaymentEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem ${getToken('padding.6')} 1.375rem; /* 24px/22px vertical padding is an intentional non-token value */
  gap: ${getToken('gap.4')};
  flex: 1;
  height: auto;
  background-color: ${getToken('bg.normal')};
`;
