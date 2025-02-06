import { Close } from '@/assets/svgs/icon';
import * as S from './index.styles';

interface ChipProps {
  label: string;
  closable?: boolean;
  onClose?: () => void;
}

function Chip({ label, closable, onClose }: ChipProps) {
  return (
    <S.Chip>
      <S.ChipLabel>{label}</S.ChipLabel>
      {closable && (
        <S.CloseButton onClick={onClose}>
          <Close />
        </S.CloseButton>
      )}
    </S.Chip>
  );
}

export default Chip;
