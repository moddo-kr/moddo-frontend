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

export const NumPadContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  padding: 0rem 1.25rem;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
`;

export const Description = styled.span`
  flex: 1 0 0;
  color: #444950;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 150%; /* 1.875rem */
`;

export const ButtonWrapper = styled.div`
  padding: 0 1.25rem 1rem 1.25rem;
  width: 100%;
`;

export const BottomButton = styled.button`
  height: 3.5rem;
  width: 100%;
  padding: 1rem 0.875rem;
  border-radius: 624.9375rem;
  color: #fff;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 150%; /* 1.6875rem */
  background-color: #35393e;
  &:disabled {
    background-color: #d2d4d5;
  }
`;
