import { useMemo } from 'react';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import useGetPayments from '@/features/payment-management/api/useGetPayments';
import useApprovePayment from '@/features/payment-management/api/useApprovePayment';
import useRejectPayment from '@/features/payment-management/api/useRejectPayment';
import { groupPaymentRequestsByDate } from '@/features/payment-management/lib/groupPaymentRequestsBySection';
import { PaymentAlertCard } from '@/features/payment-management/ui/PaymentAlertCard';
import Header from '@/shared/ui/Header';
import { useNavigate } from 'react-router';
import { useTheme } from 'styled-components';
import Flex from '@/shared/ui/Flex';
import Text from '@/shared/ui/Text';
import type { PaymentRequest } from '@/entities/payment/model/payment.type';

const LIST_BOTTOM_SPACING_PX = '93px';

function PaymentManagementPage() {
  const navigate = useNavigate();
  const { color } = useTheme();

  const { data, isLoading, isError } = useGetPayments();
  const { mutate: approvePayment } = useApprovePayment();
  const { mutate: rejectPayment } = useRejectPayment();

  const paymentSections = useMemo(
    () =>
      data?.paymentRequests?.length
        ? groupPaymentRequestsByDate(data.paymentRequests)
        : [],
    [data?.paymentRequests]
  );

  if (isLoading) {
    return (
      <>
        <Header
          type="default"
          title="입금 관리"
          headingIcon={<ArrowLeft width={24} />}
          headingLabel="뒤로가기"
          onHeadingIconClick={() => navigate(-1)}
          bgColor={color.semantic.background.normal.default}
        />
        <Flex
          pt={24}
          px={20}
          flex={1}
          direction="column"
          bgColor={color.semantic.background.normal.default}
        >
          <Text variant="body1R" color="semantic.text.subtle">
            입금 내역을 불러오는 중입니다.
          </Text>
        </Flex>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Header
          type="default"
          title="입금 관리"
          headingIcon={<ArrowLeft width={24} />}
          headingLabel="뒤로가기"
          onHeadingIconClick={() => navigate(-1)}
          bgColor={color.semantic.background.normal.default}
        />
        <Flex
          pt={24}
          px={20}
          flex={1}
          direction="column"
          bgColor={color.semantic.background.normal.default}
        >
          <Text variant="body1R" color="semantic.text.subtle">
            입금 내역을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
          </Text>
        </Flex>
      </>
    );
  }

  const handleReject = (payment: PaymentRequest) => {
    rejectPayment(payment.paymentRequestId);
  };

  const handleConfirm = (payment: PaymentRequest) => {
    approvePayment(payment.paymentRequestId);
  };

  return (
    <>
      <Header
        type="default"
        title="입금 관리"
        headingIcon={<ArrowLeft width={24} />}
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
        bgColor={color.semantic.background.normal.default}
      />
      {paymentSections.length > 0 ? (
        <Flex
          pt={24}
          pb={LIST_BOTTOM_SPACING_PX}
          px={20}
          flex={1}
          height="auto"
          direction="column"
          bgColor={color.semantic.background.normal.default}
        >
          <Flex direction="column" gap={36}>
            {paymentSections.map(({ label, items }) => (
              <Flex key={label} direction="column" gap={16}>
                <Text variant="title" color="semantic.text.strong">
                  {label}
                </Text>
                <Flex direction="column" gap={20}>
                  {items.map((payment) => (
                    <PaymentAlertCard
                      key={payment.paymentRequestId}
                      payment={payment}
                      onReject={handleReject}
                      onConfirm={handleConfirm}
                    />
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      ) : (
        // TODO: 입금 내역이 없을 경우에 대한 디자인 확정 시 변경
        <Flex
          pt={24}
          pb={22}
          px={20}
          gap={8}
          flex={1}
          height="auto"
          direction="column"
          bgColor={color.semantic.background.normal.default}
        >
          <Text
            textAlign="center"
            variant="body1R"
            color="semantic.text.subtle"
          >
            입금 내역이 없습니다.
          </Text>
        </Flex>
      )}
    </>
  );
}

export default PaymentManagementPage;
