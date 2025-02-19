import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop } from '../Modal/index.style';
import * as S from './index.style';
import { useSpring, animated } from '@react-spring/web';

export interface BottomSheetProps {
  open: boolean;
  setOpen: (open: false) => void;
  children: ReactNode;
  isPadding?: boolean;
  pb?: number;
}

function BottomSheet({
  open = false,
  setOpen,
  children,
  isPadding = false,
  pb,
  ...rest
}: BottomSheetProps) {
  const bottomSheetRoot = document.querySelector(
    '#bottom-sheet'
  ) as HTMLElement;

  const onClose = () => {
    setOpen(false);
  };

  // 애니메이션 스타일
  const springProps = useSpring({
    opacity: open ? 1 : 0, // 투명도 애니메이션
    from: { bottom: '-100%' },
    to: { bottom: open ? '0%' : '-100%' },
    config: { tension: 300, friction: 30 }, // 애니메이션 설정 (부드러운 효과)
  });

  return ReactDOM.createPortal(
    open ? (
      <>
        <Backdrop onClick={onClose} />
        <S.BottomSheetWrapper
          style={springProps} // 애니메이션 스타일 적용
          isPadding={isPadding}
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
