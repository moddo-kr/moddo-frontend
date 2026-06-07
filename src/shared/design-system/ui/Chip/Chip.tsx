import type { MouseEventHandler } from 'react';
import * as S from './Chip.styles';

type ChipVariant = 'selected' | 'unselected' | 'disabled' | 'red' | 'black';
type ChipSize = 'm' | 's';

interface ChipProps {
  label: string;
  variant?: ChipVariant;
  size?: ChipSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Chip(props: ChipProps) {
  const { label, variant = 'selected', size = 'm', onClick } = props;

  return (
    <S.ChipRoot
      as={onClick ? 'button' : 'div'}
      $variant={variant}
      $size={size}
      $clickable={!!onClick}
      onClick={onClick}
    >
      {label}
    </S.ChipRoot>
  );
}

export { Chip };
export type { ChipProps, ChipVariant, ChipSize };
