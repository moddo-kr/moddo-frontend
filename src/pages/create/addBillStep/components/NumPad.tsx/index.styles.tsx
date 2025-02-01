import { styled } from 'styled-components';
import { Button } from '@chakra-ui/react';

export const NumPadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShortcutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 1.25rem;
  gap: 0.5rem;
`;

export const ShortcutButton = styled(Button)`
  background-color: #e6e6e6;
  color: #000000;
  font-size: 0.75rem;
  border-radius: 0.75rem;
`;

export const NumCellWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1.25rem;
`;

export const NumCellButton = styled.button`
  background-color: #ffffff;
  color: #1a1a1a;
  font-weight: 800; // extra bold
  font-size: 1.5rem;
  opacity: 0.5;
  padding: 1rem;
`;
