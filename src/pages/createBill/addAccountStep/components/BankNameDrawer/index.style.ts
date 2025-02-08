import { Grid } from '@chakra-ui/react';
import styled from 'styled-components';

export const DrawerHeader = styled.h2`
  font-size: 1.25rem; // 20px
  font-weight: 700;
`;

export const DrawerBody = styled(Grid)`
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  height: 370px;
  overflow-y: auto;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 0.9rem; // 16px 14px
  border-radius: 2rem; // 32px
  background-color: black;
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 0.9rem; // 14px
  cursor: pointer;
`;

export const BankButton = styled.button<{ isSelected: boolean }>`
  width: 6.875rem; // 110px
  height: 5.75rem; // 92px
  cursor: pointer;
  border-radius: 12px;
  border: 2px solid ${({ isSelected }) => (isSelected ? '#FF802E' : 'none')};
  background-color: #faf6f3;
  padding: 1rem; // 20px
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const BankName = styled.p`
  font-size: 0.9rem; // 14px
  font-weight: 400;
`;
