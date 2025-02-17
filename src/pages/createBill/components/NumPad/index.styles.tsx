import { styled } from 'styled-components';

export const ValueWrapper = styled.div`
  display: flex;
  padding: 0.75rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
`;

export const DisplayValue = styled.span<{ $isEmpty?: boolean }>`
  color: ${({ $isEmpty }) => ($isEmpty ? '#6f7379' : '#292C30')};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 150%; /* 2.25rem */
  word-break: break-all;
  opacity: ${({ $isEmpty }) => ($isEmpty ? 0.5 : 1)};
`;

export const DisplayValueUnit = styled.span`
  color: #292c30;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 150%; /* 2.25rem */
`;

export const ShortcutWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 1.25rem;
  gap: 0.5rem;
`;

export const ShortcutButton = styled.button<{ $isDanger?: boolean }>`
  padding: 0.5rem 1rem;
  flex: 1 0 0;
  border-radius: 624.9375rem;
  background-color: ${({ $isDanger }) => ($isDanger ? '#FDEFEF' : '#edeeee')};
  color: ${({ $isDanger }) => ($isDanger ? '#EA605C' : '#444950')};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 150%; /* 1.3125rem */
`;

export const NumCellWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 1.25rem;
  width: 100%;
`;

export const NumCellButton = styled.button<{ $isSecondary?: boolean }>`
  height: 4rem;
  padding: 0.75rem 1rem;
  /* color: #292c30; */
  color: ${({ $isSecondary }) => ($isSecondary ? '#6F7379' : '#292c30')};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 150%; /* 2.25rem */
`;
