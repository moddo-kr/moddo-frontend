import styled from 'styled-components';
import { Card } from '@chakra-ui/react';

export const FormCard = styled(Card.Root)`
  width: 100%;
  padding: 1.75rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormCardTitleContainer = styled(Card.Title)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;

export const FormCardTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 700; // bold
  color: #000000;
`;

export const FormDeleteButton = styled.button``;
