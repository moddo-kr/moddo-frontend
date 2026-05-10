import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Dimmed } from '../Dimmed';
import * as S from './Modal.styles';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

function Modal({
  open,
  onClose,
  children,
  ariaLabel,
  ariaLabelledBy,
}: ModalProps) {
  if (!open) return null;

  const modalRoot = document.querySelector('#modal');

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <>
      <Dimmed onClick={onClose} />
      <S.ContentWrapper
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
      >
        {children}
      </S.ContentWrapper>
    </>,
    modalRoot
  );
}

export { Modal };
export type { ModalProps };
