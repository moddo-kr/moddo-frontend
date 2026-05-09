import { Button, ProfileImage } from '@/shared/design-system/ui';
import * as S from './PaymentAlertCard.styles';

interface PaymentAlertCardProps {
  nickname: string;
  amount: number;
  src?: string;
  onReject: () => void;
  onConfirm: () => void;
}

function PaymentAlertCard({
  nickname,
  amount,
  src,
  onReject,
  onConfirm,
}: PaymentAlertCardProps) {
  return (
    <S.Container>
      <S.LeftSection>
        <ProfileImage size="40" src={src} />
        <S.TextGroup>
          <S.Nickname>{nickname}</S.Nickname>
          <S.Amount>{amount.toLocaleString('ko-KR')}원</S.Amount>
        </S.TextGroup>
      </S.LeftSection>
      <S.ButtonGroup>
        <Button variant="tertiary" size="small" onClick={onReject}>
          거절
        </Button>
        <Button variant="primary" size="small" onClick={onConfirm}>
          입금확인
        </Button>
      </S.ButtonGroup>
    </S.Container>
  );
}

export { PaymentAlertCard };
export type { PaymentAlertCardProps };
