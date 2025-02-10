import { Close } from '@/assets/svgs/icon';
import * as S from './index.styles';

interface ChipProps {
  label: string;
  closable?: boolean;
  onClose?: () => void;
  variant?: 'gray' | 'white'; // NOTE : 컴포넌트 디자인 확정 전 임시
}

function Chip({ label, closable, onClose, variant = 'gray' }: ChipProps) {
  return (
    <S.Chip $variant={variant}>
      <S.ChipLabel>{label}</S.ChipLabel>
      {closable && (
        <S.CloseButton onClick={onClose}>
          <Close width="1.5rem" fill="#444950" />
        </S.CloseButton>
      )}
    </S.Chip>
  );
}

export default Chip;
