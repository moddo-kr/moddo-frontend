import styled from 'styled-components';
import { Card } from '@chakra-ui/react';

export const BillFormCard = styled(Card.Root)`
  width: 100%;
  padding: 1.75rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BillFormCardTitle = styled(Card.Title)`
  font-size: 1.25rem;
  font-weight: 700; // bold
  color: #000000;
`;

export const DatePickerWrapper = styled.div`
  width: 100%;
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  border: 1px solid #cccccc;
  min-height: 4rem;
  width: 100%;
`;
