import styled from 'styled-components';
import { getToken } from '@/shared/design-system';

export const AccordionWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  gap: ${getToken('gap.5')};
  width: 100%;
  height: fit-content;
  padding-block: ${getToken('padding.3')};
  border: none;
  justify-content: space-between;
`;

export const HeadingText = styled.span`
  all: unset;
  display: contents;
`;

export const AccordionContent = styled.div<{
  $isOpen: boolean;
  $height: number;
}>`
  max-height: ${({ $isOpen, $height }) => ($isOpen ? `${$height}px` : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  overflow: hidden;
  transition:
    max-height 0.18s ease-in-out,
    opacity 0.18s ease-in-out;
  will-change: max-height, opacity;
`;
