import { Grid } from '@chakra-ui/react';
import styled from 'styled-components';

export const TopWrapper = styled.div`
  padding: 0.625rem 1.25rem;
`;

export const TopMessage = styled.span`
  font-size: 1.25rem;
  font-weight: 600; // semibold
  color: #000000;
  white-space: pre-line;
  line-height: 150%; /* 1.875rem */
`;

export const BankInput = styled.input`
  width: 100%;
  outline: none;
  &::placeholder {
    color: #6f7379;
    opacity: 0.5;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.75rem;
  border: 1px solid #d2d4d5;
  background: #fff;
  color: #444950;
`;

export const BankBottomSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1.25rem 0 1.25rem;
  gap: 1.75rem;
`;

export const BottomSheetTitle = styled.span`
  color: #444950;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 150%; /* 1.875rem */
`;

export const BankList = styled(Grid)`
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  height: 370px;
  overflow-y: auto;
`;

export const BankItem = styled.button`
  display: flex;
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.75rem;
  background: #faf6f3;
`;

export const NullIcon = styled.div`
  width: 2.25rem;
  height: 2.25rem;
`;

export const BankName = styled.span`
  color: #1a1a1a;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1rem; /* 114.286% */
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

export const AccoutInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #d2d4d5;
  background: #fff;
  color: #444950;
  font-size: 1rem;
  font-weight: 400;
  line-height: 150%; /* 1.5rem */
  &::placeholder {
    color: #6f7379;
    opacity: 0.5;
  }
`;
