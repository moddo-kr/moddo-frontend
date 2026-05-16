import { getToken } from '@/shared/design-system';
import styled from 'styled-components';

export const QuickAddContainer = styled.div`
  display: flex;
  gap: ${getToken('gap.4')};
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding: 0 ${getToken('padding.6')};
  > button {
    flex: 1;
  }
`;
