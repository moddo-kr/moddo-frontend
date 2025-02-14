import styled from 'styled-components';

export const TopWrapper = styled.div`
  padding: 0.625rem 1.25rem;
`;

export const MoimName = styled.span`
  color: #ff802e;
`;

export const TopMessage = styled.span`
  color: #292c30;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 150%;
  white-space: pre-line;
`;

export const BillFormList = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  flex: 1 0 0;
  overflow-y: auto;
  padding: 1rem 1.25rem;
  background: #faf6f3;
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
