import { useMemo } from 'react';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import useGetPayments from '@/features/payment-management/api/useGetPayments';
import { groupPaymentRequestsByDate } from '@/features/payment-management/lib/groupPaymentRequestsBySection';
import PaymentAlert from '@/features/payment-management/ui/PaymentAlert';
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
          type="TitleCenter"
          title="입금 관리"
          leftButtonContent={<ArrowLeft width={24} />}
          leftButtonOnClick={() => navigate(-1)}
          bgColor={color.semantic.background.normal.default}
        />
        {/* 로딩 UI */}
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Header
          type="TitleCenter"
          title="입금 관리"
          leftButtonContent={<ArrowLeft width={24} />}
          leftButtonOnClick={() => navigate(-1)}
          bgColor={color.semantic.background.normal.default}
        />
        {/* 에러 UI */}
      </>
    );
  }

  const handleReject = (_payment: PaymentRequest) => {
    // TODO: 입금 거절 API 연동
  };

  const handleConfirm = (_payment: PaymentRequest) => {
    // TODO: 입금 확인 API 연동
  };

  return (
    <>
      <Header
        type="TitleCenter"
        title="입금 관리"
        leftButtonContent={<ArrowLeft width={24} />}
        leftButtonOnClick={() => navigate(-1)}
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
                    <PaymentAlert
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
