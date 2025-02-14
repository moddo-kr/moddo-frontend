import styled from 'styled-components';

export const TopWrapper = styled.div`
  padding: 1rem 1.25rem;
`;

export const TopMessage = styled.span`
  font-size: 1.25rem;
  font-weight: 600; // semibold
  color: #000000;
  white-space: pre-line;
`;

export const TotalExpenseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0 1.25rem;
`;

export const TotalExpense = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #444950;
`;

export const TotalExpenseAmount = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #292c30;
`;

export const AddExpenseButton = styled.span`
  color: #444950;
  font-size: 1rem;
  font-weight: 600;
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
