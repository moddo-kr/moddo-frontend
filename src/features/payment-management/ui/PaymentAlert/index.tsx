import type { PaymentRequest } from '@/entities/payment/model/payment.type';
import { Button, ProfileImage } from '@/shared/design-system/ui';
import Text from '@/shared/ui/Text';
import Flex from '@/shared/ui/Flex';

export interface PaymentAlertProps {
  payment: PaymentRequest;
  onReject?: (payment: PaymentRequest) => void;
  onConfirm?: (payment: PaymentRequest) => void;
}

function PaymentAlert({ payment, onReject, onConfirm }: PaymentAlertProps) {
  return (
    <Flex direction="row" alignItems="center" gap={8} width="100%">
      <ProfileImage src={payment.profileUrl} size="40" />
      <Flex direction="column" alignItems="flex-start" gap={2} flex={1}>
        <Text
          variant="body1Sb"
          color="semantic.text.subtle"
          style={{ fontSize: '0.875rem' }}
        >
          {payment.name}
        </Text>
        <Text variant="title" color="semantic.text.strong">
          {payment.totalAmount.toLocaleString('ko-KR')}원
        </Text>
      </Flex>
      <Flex gap={8}>
        <Button
          type="button"
          variant="tertiary"
          size="small"
          onClick={() => onReject?.(payment)}
        >
          거절
        </Button>
        <Button
          type="button"
          variant="primary"
          size="small"
          onClick={() => onConfirm?.(payment)}
        >
          입금확인
        </Button>
      </Flex>
    </Flex>
  );
}

export default PaymentAlert;
