import styled from 'styled-components';

export const ValueWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
  padding-bottom: 0.75rem;
  align-items: flex-end;
  border-bottom: 1px solid #d2d4d5;
`;

export const DisplayValue = styled.span<{ $isEmpty?: boolean }>`
  flex: 1;
  color: ${({ $isEmpty }) => ($isEmpty ? '#6f7379' : '#444950')};
  opacity: ${({ $isEmpty }) => ($isEmpty ? 0.5 : 1)};
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%; /* 1.6875rem */
  word-break: break-all;
`;

export const DisplayValueUnit = styled.span`
  color: #292c30;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%; /* 1.6875rem */
`;
