import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const CharacterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${getToken('gap.4')};
  padding: ${getToken('padding.6')};
`;
