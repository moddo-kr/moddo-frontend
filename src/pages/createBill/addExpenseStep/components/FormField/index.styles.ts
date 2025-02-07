import styled from 'styled-components';
import { Field, Input } from '@chakra-ui/react';

export const FormField = styled(Field.Root)``;

export const FormFieldHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FormFieldLabel = styled(Field.Label)`
  font-size: 1rem;
  font-weight: 600; // semibold
  color: #000000;
`;

export const FormFieldInput = styled(Input)`
  font-size: 1rem;
  font-weight: 400; // regular
  color: #000000;
`;

export const FormFieldRequired = styled.span`
  font-size: 1rem;
  font-weight: 600; // semibold
  color: #f47c7c;
`;

export const FormFieldSubButton = styled.button`
  font-size: 0.75rem;
  font-weight: 500; // medium
`;
