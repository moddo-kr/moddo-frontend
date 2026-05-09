import { PaidChip } from '@/shared/design-system/ui';
import type { PaidChipStatus } from '@/shared/design-system/ui';
import * as S from './PaymentRequestCard.styles';

type PaymentRequestCardStatus = Exclude<PaidChipStatus, '확인중'>;

interface PaymentRequestCardProps {
  description: string;
  amount: number;
  status: PaymentRequestCardStatus;
}

function PaymentRequestCard({
  description,
  amount,
  status,
}: PaymentRequestCardProps) {
  return (
    <S.Container>
      <S.TextGroup>
        <S.Description>{description}</S.Description>
        <S.Amount>{amount.toLocaleString('ko-KR')}원</S.Amount>
      </S.TextGroup>
      <PaidChip status={status} />
    </S.Container>
  );
}

export { PaymentRequestCard };
export type { PaymentRequestCardProps };
