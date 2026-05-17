import * as S from './NameChip.styles';

// HACK : ExpenseTimelineContent 에서 사용하는 NameChip이 정의되어 있지 않아서 임의로 black variant를 추가함.
type NameChipVariant = 'selected' | 'unselected' | 'disabled' | 'red' | 'black';
type NameChipSize = 'm' | 's';

interface NameChipProps {
  label: string;
  variant?: NameChipVariant;
  size?: NameChipSize;
}

function NameChip(props: NameChipProps) {
  const { label, variant = 'selected', size = 'm' } = props;

  return (
    <S.Chip $variant={variant} $size={size}>
      {label}
    </S.Chip>
  );
}

export { NameChip };
export type { NameChipProps, NameChipVariant, NameChipSize };
