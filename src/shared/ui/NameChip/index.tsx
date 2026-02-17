import * as S from './index.styles';
import { NameChipSize, NameChipVariant } from './index.type';

interface NameChipProps {
  label: string;
  variant?: NameChipVariant;
  size?: NameChipSize;
}

function NameChip({ label, variant = 'orange', size = 'md' }: NameChipProps) {
  return (
    <S.Chip $variant={variant} $size={size}>
      {label}
    </S.Chip>
  );
}

export default NameChip;
