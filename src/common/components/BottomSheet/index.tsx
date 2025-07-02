import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from '@react-spring/web';
import { Backdrop } from '../Modal/index.style';
import * as S from './index.style';

export interface BottomSheetProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  isPadding?: boolean;
  pb?: number;
  onCloseHandler?: () => void;
}

function BottomSheet({
  open = false,
  setOpen,
  children,
  isPadding = false,
  pb,
  onCloseHandler,
  ...rest
}: BottomSheetProps) {
  const bottomSheetRoot = document.querySelector(
    '#bottom-sheet'
  ) as HTMLElement;

  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    }
  }, [open]);

  const onClose = () => {
    onCloseHandler?.();
    setOpen(false);
  };

  // BottomSheet 애니메이션 스타일
  const springProps = useSpring({
    opacity: open ? 1 : 0, // 투명도 애니메이션
    from: { bottom: '-100%' },
    to: { bottom: open ? '0%' : '-100%' },
    config: open
      ? { tension: 300, friction: 30 }
      : { tension: 300, friction: 20 },
    onRest: () => {
      if (!open) {
        setIsVisible(false);
      }
    },
  });

  // Backdrop 애니메이션 스타일
  const backdropSpringProps = useSpring({
    opacity: open ? 1 : 0,
  });

  return ReactDOM.createPortal(
    isVisible ? (
      <>
        <animated.div
          style={{
            ...backdropSpringProps,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100dvh',
            zIndex: 9998,
          }}
        >
          <Backdrop onClick={onClose} />
        </animated.div>
        <S.BottomSheetWrapper
          style={springProps} // 애니메이션 스타일 적용
          $isPadding={isPadding}
          {...(pb && { pb })} // pd값이 존재할 때만 props로 넘겨줌
          {...rest}
        >
          {children}
        </S.BottomSheetWrapper>
      </>
    ) : (
      <div />
    ),
    bottomSheetRoot
  );
}

export default BottomSheet;
