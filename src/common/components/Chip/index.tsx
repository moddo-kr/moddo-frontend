import { ChipVariant, ChipSize } from './index.type';
import * as S from './index.styles';

interface ChipProps {
  label: string;
  variant?: ChipVariant;
  size?: ChipSize;
}

function Chip({ label, variant = 'primary', size = 'md' }: ChipProps) {
  return (
    <S.Container $variant={variant} $size={size}>
      {label}
    </S.Container>
  );
}

export default Chip;
