import { ChipVariant, ChipSize } from './index.type';
import * as S from './index.styles';

interface ChipProps {
  label: string;
  variant?: ChipVariant;
  size?: ChipSize;
  onClick?: () => void;
}

function Chip({ label, variant = 'primary', size = 'md', onClick }: ChipProps) {
  return (
    <S.Container $variant={variant} $size={size} onClick={onClick}>
      {label}
    </S.Container>
  );
}

export default Chip;
