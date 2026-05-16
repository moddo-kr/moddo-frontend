import { Button, ProfileImage } from '@/shared/design-system/ui';
import type { PaymentRequest } from '@/entities/payment/model/payment.type';
import * as S from './PaymentAlertCard.styles';

interface PaymentAlertCardProps {
  payment: PaymentRequest;
  onReject?: (payment: PaymentRequest) => void;
  onConfirm?: (payment: PaymentRequest) => void;
}

function PaymentAlertCard({
  payment,
  onReject,
  onConfirm,
}: PaymentAlertCardProps) {
  const { profileUrl, name, totalAmount } = payment;

  return (
    <S.Container>
      <S.LeftSection>
        <ProfileImage size="40" src={profileUrl} />
        <S.TextGroup>
          <S.Nickname>{name}</S.Nickname>
          <S.Amount>{totalAmount.toLocaleString('ko-KR')}원</S.Amount>
        </S.TextGroup>
      </S.LeftSection>
      <S.ButtonGroup>
        <Button
          variant="tertiary"
          size="small"
          onClick={() => onReject?.(payment)}
        >
          거절
        </Button>
        <Button
          variant="primary"
          size="small"
          onClick={() => onConfirm?.(payment)}
        >
          입금확인
        </Button>
      </S.ButtonGroup>
    </S.Container>
  );
}

export { PaymentAlertCard };
export type { PaymentAlertCardProps };
