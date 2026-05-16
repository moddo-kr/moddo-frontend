import { ReactNode, useEffect, useId, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from '@react-spring/web';
import { Close } from '@/shared/assets/svgs/icon';
import { Dimmed } from '../Dimmed';
import { IconButton } from '../IconButton';
import { getToken } from '../../lib/getToken';
import * as S from './BottomSheet.styles';

type BottomSheetA11yProps =
  | {
      title: ReactNode;
      ariaLabel?: string;
      ariaLabelledBy?: string;
    }
  | {
      title?: undefined;
      ariaLabel: string;
      ariaLabelledBy?: string;
    }
  | {
      title?: undefined;
      ariaLabel?: string;
      ariaLabelledBy: string;
    };

export type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
} & BottomSheetA11yProps;

function BottomSheet({
  open = false,
  onClose,
  children,
  title,
  ariaLabel,
  ariaLabelledBy,
}: BottomSheetProps) {
  const titleId = useId();
  const labelledBy =
    ariaLabelledBy ?? (title !== undefined ? titleId : undefined);

  const bottomSheetRoot = document.querySelector(
    '#bottom-sheet'
  ) as HTMLElement | null;

  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
    }
  }, [open]);

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

  // Dimmed 애니메이션 스타일
  const dimmedSpringProps = useSpring({
    opacity: open ? 1 : 0,
  });

  if (!isVisible || !bottomSheetRoot) return null;

  return ReactDOM.createPortal(
    <>
      <animated.div
        style={{
          ...dimmedSpringProps,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100dvh',
          zIndex: 9998,
        }}
      >
        <Dimmed onClick={onClose} />
      </animated.div>
      <S.BottomSheetWrapper
        style={springProps} // 애니메이션 스타일 적용
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={labelledBy}
      >
        {title !== undefined && (
          <S.Header>
            <S.Title id={titleId}>{title}</S.Title>
            <IconButton aria-label="바텀시트 닫기" onClick={onClose}>
              <Close width="1.5rem" color={getToken('fg.neutral')} />
            </IconButton>
          </S.Header>
        )}
        {children}
      </S.BottomSheetWrapper>
    </>,
    bottomSheetRoot
  );
}

export { BottomSheet };
