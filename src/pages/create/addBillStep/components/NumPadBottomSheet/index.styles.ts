import styled from 'styled-components';

export const ValueWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #cccccc;
  align-items: flex-end;
`;

export const DisplayValue = styled.span<{ $isEmpty?: boolean }>`
  flex: 1;
  font-size: 1.25rem; // 20px
  font-weight: 500; // medium
  color: #1a1a1a;
  opacity: ${({ $isEmpty }) => ($isEmpty ? 0.5 : 1)};
  word-break: break-all;
`;

export const DisplayValueUnit = styled.span`
  font-size: 1.25rem; // 20px
  font-weight: 500; // medium
  color: #1a1a1a;
`;
