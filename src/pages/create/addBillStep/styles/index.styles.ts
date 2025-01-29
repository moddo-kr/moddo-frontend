import styled from 'styled-components';
import { Card, Field, Input, VStack } from '@chakra-ui/react';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 3rem;
  box-sizing: border-box;
  padding: 0.75rem 1.25rem;
  margin-bottom: 0.5rem;
`;

export const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  color: #000;
  margin: 0;
  padding: 0;
  font-weight: 400; // regular
`;

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

export const BillListWrapper = styled(VStack)`
  width: 100%;
  padding: 1rem 1.25rem;
`;

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

export const BillFormField = styled(Field.Root)``;

export const BillFormFieldLabel = styled(Field.Label)`
  font-size: 1rem;
  font-weight: 600; // semibold
  color: #000000;
`;

export const BillFormFieldInput = styled(Input)`
  font-size: 1rem;
  font-weight: 400; // regular
  color: #000000;
`;

export const BillFormFieldRequired = styled.span`
  font-size: 1rem;
  font-weight: 600; // semibold
  color: #f47c7c;
`;
