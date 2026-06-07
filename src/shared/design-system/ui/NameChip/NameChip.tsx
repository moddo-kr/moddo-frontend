import type { MouseEventHandler } from 'react';
import * as S from './NameChip.styles';

// HACK : ExpenseTimelineContent 에서 사용하는 NameChip이 정의되어 있지 않아서 임의로 black variant를 추가함.
type NameChipVariant = 'selected' | 'unselected' | 'disabled' | 'red' | 'black';
type NameChipSize = 'm' | 's';

interface NameChipProps {
  label: string;
  variant?: NameChipVariant;
  size?: NameChipSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function NameChip(props: NameChipProps) {
  const { label, variant = 'selected', size = 'm', onClick } = props;

  return (
    <S.Chip
      as={onClick ? 'button' : 'div'}
      $variant={variant}
      $size={size}
      $clickable={!!onClick}
      onClick={onClick}
    >
      {label}
    </S.Chip>
  );
}

export { NameChip };
export type { NameChipProps, NameChipVariant, NameChipSize };
