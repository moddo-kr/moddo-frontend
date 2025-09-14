import { PaymentStatus } from './index.type';
import * as S from './index.styles';

const statusLabel: Record<PaymentStatus, string> = {
  paid: '입금완료',
  unpaid: '미입금',
};

interface StatusChipProps {
  status: PaymentStatus;
}

function StatusChip({ status }: StatusChipProps) {
  return <S.StatusChip $status={status}>{statusLabel[status]}</S.StatusChip>;
}

export default StatusChip;
