import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import ReactDOM from "react-dom";
import * as S from './index.style';

interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  isOpen: boolean;
  setOpen: (isOpen: false) => void;
  children: ReactNode;
}

function Modal({ isOpen = false, setOpen, children, ...rest }: ModalProps) {
  const modalRoot = document.querySelector("#modal") as HTMLElement;

  const onClose = () => {
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <>{
      isOpen ? (
        <div>
          <S.Backdrop onClick={onClose}/>
          <S.ModalWrapper {...rest}>{children}</S.ModalWrapper>
        </div>
      ): null
    }
    </>,
    modalRoot
  );
}

export default Modal;