import styled from 'styled-components';
import { Card, Field, Input } from '@chakra-ui/react';

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
