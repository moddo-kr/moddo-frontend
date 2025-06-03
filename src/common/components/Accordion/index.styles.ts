import styled from 'styled-components';

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  transition: transform 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`;