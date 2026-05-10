import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { ActionArea } from '@/shared/design-system/ui';
import * as S from './index.style';
import Text from '../Text';

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open: boolean;
  setOpen: (open: boolean) => void;
  variant: 'default' | 'empty';
  /** variant : default인 경우에만 필요한 props */
  title?: string;
  subscribe?: string;
  cancel?: string;
  submit?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
  /** variant : empty인 경우에만 필요한 props */
  children?: ReactNode;
}

function Modal({
  open = false,
  setOpen,
  variant,
  title,
  subscribe,
  cancel,
  submit,
  onCancel,
  onSubmit,
  children,
  ...rest
}: ModalProps) {
  const modalRoot = document.querySelector('#modal') as HTMLElement;

  const onClose = () => {
    setOpen(false);
  };

  return ReactDOM.createPortal(
    open ? (
      <>
        <S.Backdrop onClick={onClose} />
        <S.ModalWrapper {...rest}>
          {variant === 'default' && (
            <S.DefaultWrapper>
              <S.TextWrapper>
                <Text variant="title" color="semantic.text.strong">
                  {title}
                </Text>
                <Text variant="body1R" color="semantic.text.strong">
                  {subscribe}
                </Text>
              </S.TextWrapper>
              <S.ButtonWrapper>
                <ActionArea
                  layout="horizontal"
                  showBottomSafeArea={false}
                  hasHorizontalPadding={false}
                  mainAction={{
                    label: submit ?? '',
                    onClick: onSubmit ?? (() => {}),
                  }}
                  alternativeAction={{
                    label: cancel ?? '',
                    onClick: onCancel ?? (() => {}),
                  }}
                />
              </S.ButtonWrapper>
            </S.DefaultWrapper>
          )}
          {variant === 'empty' && children}
        </S.ModalWrapper>
      </>
    ) : (
      <div />
    ),
    modalRoot
  );
}

export default Modal;
