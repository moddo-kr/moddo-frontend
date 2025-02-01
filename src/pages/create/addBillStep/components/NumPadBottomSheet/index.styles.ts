import styled from 'styled-components';

export const ValueWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #cccccc;
  align-items: flex-end;
`;

export const DisplayValue = styled.span<{ isEmpty?: boolean }>`
  flex: 1;
  font-size: 1.5rem; // 24px
  font-weight: 700; // bold
  color: #1a1a1a;
  opacity: ${({ isEmpty }) => (isEmpty ? 0.5 : 1)};
  word-break: break-all;
`;

export const DisplayValueUnit = styled.span`
  font-size: 1.5rem; // 24px
  font-weight: 700; // bold
  color: #1a1a1a;
`;
