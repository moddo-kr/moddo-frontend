// Accordion component

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import * as S from './index.styles';
import { Next } from '@/assets/svgs/icon';
import theme from '@/styles/theme';

interface AccordionContextType {
  isOpen: boolean;
  toggle: () => void;
  accordionId: string;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'Accordion 하위 컴포넌트는 Accordion 내부에서 사용되어야 합니다.'
    );
  }
  return context;
};

function Accordion({
  children,
  ...props
}: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const accordionId = useId();

  return (
    <AccordionContext.Provider value={{ isOpen, toggle, accordionId }}>
      <S.AccordionWrapper {...props}>{children}</S.AccordionWrapper>
    </AccordionContext.Provider>
  );
}

function AccordionHeader({
  iconSize = 24,
  children,
  ...props
}: {
  iconSize?: number;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { isOpen, toggle, accordionId } = useAccordionContext();
  return (
    <S.AccordionHeader
      role="heading"
      aria-level={3}
      aria-expanded={isOpen}
      aria-controls={accordionId}
      aria-disabled={true}
      onClick={toggle}
      {...props}
    >
      {children}
      <Next
        width={theme.unit[iconSize]}
        style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease-in-out',
        }}
      />
    </S.AccordionHeader>
  );
}

function AccordionContent({
  children,
  ...props
}: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  const { isOpen, accordionId } = useAccordionContext();
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);
  return (
    <S.AccordionContent
      isOpen={isOpen}
      height={height}
      ref={contentRef}
      id={accordionId}
      {...props}
    >
      {children}
    </S.AccordionContent>
  );
}

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export { useAccordionContext };
export default Accordion;
