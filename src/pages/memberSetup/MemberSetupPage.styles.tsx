import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const PageContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem ${getToken('padding.6')}; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  flex: 1;
`;
