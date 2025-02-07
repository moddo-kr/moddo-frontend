import styled from 'styled-components';
import { Button } from '@chakra-ui/react';

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

export const BottomButton = styled(Button)`
  width: calc(100% - 2.5rem);
  margin: 0 1.25rem;
  position: fixed;
  bottom: 2.125rem;
`;
