import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.unit[28]} 0`};
`;

export const TitleWrapper = styled.div`
  padding: ${({ theme }) => `${theme.unit[8]} ${theme.unit[20]}`};
`;

export const CharacterGrid = styled.div`
  padding: ${({ theme }) => theme.unit[20]};
`;
