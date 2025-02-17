import { PaymentStatus } from './index.type';
import * as S from './index.styles';

interface StatusChipProps {
  status: PaymentStatus;
}

function StatusChip({ status }: StatusChipProps) {
  return (
    <S.StatusChip $status={status}>
      {status === 'paid' ? '입금완료' : '미입금'}
    </S.StatusChip>
  );
}

export default StatusChip;
