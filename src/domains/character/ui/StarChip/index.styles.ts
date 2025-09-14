import styled from 'styled-components';

export const StarChip = styled.div`
  display: inline-flex;
  padding: ${({ theme }) => `${theme.unit[4]} ${theme.unit[8]}`};
  justify-content: center;
  align-items: center;
  border-radius: 62.4375rem;
  background-color: ${({ theme }) =>
    theme.color.semantic.background.normal.inverse};
`;

export const StarWrapper = styled.div<{ $isFirst: boolean }>`
  display: inline-flex;
  place-items: center;
  margin-left: ${({ $isFirst }) => ($isFirst ? '0' : '-0.1875rem')};
`;
