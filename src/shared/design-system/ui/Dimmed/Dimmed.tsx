import type { MouseEventHandler } from 'react';
import * as S from './Dimmed.styles';

interface DimmedProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function Dimmed(props: DimmedProps) {
  const { onClick } = props;

  return <S.Overlay onClick={onClick} />;
}

export { Dimmed };
export type { DimmedProps };
