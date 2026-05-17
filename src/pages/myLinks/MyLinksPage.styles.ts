import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const EmptyStateMessage = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
  text-align: center;
`;

export const LinksLoadingState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem ${getToken('padding.6')} 1.375rem; /* semantic token으로 정의되지 않은 값을 의도적으로 사용함 */
  flex: 1;
  height: auto;
  background-color: ${getToken('bg.neutral')};
`;

export const LinkCardList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem ${getToken('padding.6')} 1.375rem; /* 24px/22px vertical padding is an intentional non-token value */
  gap: ${getToken('gap.4')};
  flex: 1;
  height: auto;
  background-color: ${getToken('bg.neutral')};
`;

export const LinksEmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem ${getToken('padding.6')} 1.375rem; /* 24px/22px vertical padding is an intentional non-token value */
  gap: ${getToken('gap.8')};
  flex: 1;
  height: auto;
  background-color: ${getToken('bg.neutral')};
`;
