import styled from 'styled-components';

export const AccordionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.unit[12]};
  width: 100%;
  height: fit-content;
  padding-block: ${({ theme }) => theme.unit[8]};
`;

export const AccordionContent = styled.div<{ isOpen: boolean; height: number }>`
  max-height: ${({ isOpen, height }) => (isOpen ? `${height}px` : '0')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  overflow: hidden;
  transition:
    max-height 0.18s ease-in-out,
    opacity 0.18s ease-in-out;
  will-change: max-height, opacity;
`;
