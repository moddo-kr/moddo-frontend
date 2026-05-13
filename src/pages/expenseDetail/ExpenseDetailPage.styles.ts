import styled from 'styled-components';
import { applyTypography, getToken } from '@/shared/design-system';

export const NameHighlight = styled.span`
  color: ${getToken('fg.primary.normal')};
`;

export const ManageLabel = styled.span`
  ${applyTypography('typography.body.medium')};
  color: ${getToken('fg.alternative')};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const TabListContainer = styled.div`
  padding: 1.5rem ${getToken('padding.6')} 0; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  border-bottom: 1px solid ${getToken('border.alternative')}; /* HACK : #E8E8E7가 정의되어있는 곳이 없어 임의로 border.alternative 사용 */
  background-color: ${getToken('bg.normal')};
`;

export const BottomArea = styled.div`
  background-color: ${getToken('bg.normal')};
`;
