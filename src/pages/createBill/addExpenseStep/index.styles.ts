import styled from 'styled-components';
import { Button } from '@chakra-ui/react';

export const TopWrapper = styled.div`
  padding: 1rem 1.25rem;
`;

export const MoimName = styled.span`
  font-size: 1.25rem;
  font-weight: 600; // semibold
  color: #999999;
`;

export const TopMessage = styled.span`
  font-size: 1.25rem;
  font-weight: 600; // semibold
  color: #000000;
  white-space: pre-line;
`;

export const AddExpenseButton = styled.span`
  color: #444950;
  font-size: 1rem;
  font-weight: 600;
`;

export const BillFormList = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 1.25rem;
`;

export const BottomButton = styled(Button)`
  width: calc(100% - 2.5rem);
  margin: 0 1.25rem;
  position: fixed;
  bottom: 2.125rem;
`;
