import styled from 'styled-components';
import { Accordion } from '@/shared/design-system/ui';

export const Container = styled(Accordion)<{ isPaid: boolean }>`
  padding: ${({ theme }) => theme.unit[20]};
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme, isPaid }) =>
    isPaid
      ? theme.color.semantic.orange.subtle
      : theme.color.semantic.background.normal.alternative};
  border-radius: ${({ theme }) => theme.radius.large};
  height: fit-content;
  flex: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.unit[4]};
  width: 100%;
`;

export const HeaderToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  min-width: 0;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.unit[8]};
`;

export const SubProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.unit[2]};
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.unit[4]};
`;

export const StatusChipButton = styled.button`
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  z-index: 100;
  border: none;
  background: transparent;
  padding: 0;
`;

export const ChevronWrapper = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease-in-out;
`;

export const ContentContainer = styled(Accordion.Content)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.unit[12]};
`;

export const ExpensesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) =>
    `${theme.unit[12]} ${theme.unit[12]} 0 ${theme.unit[12]}`};
`;

export const PlaceWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.unit[20]};
  align-items: center;
`;

export const SheetContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.unit[24]};
  height: 16.25rem;
  justify-content: space-between;
`;

export const TextWrapper = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextButtonWrapper = styled(TextWrapper)`
  cursor: pointer;
`;
