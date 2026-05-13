import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem ${getToken('padding.6')}; /* 의도적으로 토큰으로 정의되지 않은 값 사용 */
  gap: ${getToken('gap.6')};
`;
