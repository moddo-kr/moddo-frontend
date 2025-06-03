// Accordion component

import { createContext, ReactNode, useContext, useState } from 'react';
import * as S from './index.styles';
import { ArrowDown } from '@/assets/svgs/icon';
import theme from '@/styles/theme';

interface AccordionContextType {
  isOpen: boolean;
  toggle: () => void;
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

function Accordion(children: ReactNode) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionHeader(children: ReactNode) {
  const { isOpen, toggle } = useAccordionContext();
  return (
    <button onClick={toggle}>
      {children}
      <ArrowDown
        width={theme.unit[20]}
        style={{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out',
        }}
      />
    </button>
  );
}

function AccordionContent(children: ReactNode) {
  const { isOpen } = useAccordionContext();
  return <S.AccordionContent isOpen={isOpen}>{children}</S.AccordionContent>;
}

Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export { useAccordionContext };
export default Accordion;
