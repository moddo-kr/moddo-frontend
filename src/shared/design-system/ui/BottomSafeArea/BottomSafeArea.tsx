import { HTMLAttributes } from 'react';
import * as S from './BottomSafeArea.styles';

interface BottomSafeAreaProps extends HTMLAttributes<HTMLDivElement> {}

function BottomSafeArea(props: BottomSafeAreaProps) {
  return <S.BottomSafeArea {...props} />;
}

export { BottomSafeArea };
export type { BottomSafeAreaProps };
