import * as S from './NameChip.styles';

type NameChipVariant = 'selected' | 'unselected' | 'disabled' | 'red';
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
