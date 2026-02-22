import styled from 'styled-components';

export const CharacterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.unit[8]};
  padding: ${({ theme }) => theme.unit[20]};
`;
