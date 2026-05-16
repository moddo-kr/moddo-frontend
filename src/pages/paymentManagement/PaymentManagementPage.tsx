import { useMemo } from 'react';
import { ArrowLeft } from '@/shared/assets/svgs/icon';
import useGetPayments from '@/features/payment-management/api/useGetPayments';
import useApprovePayment from '@/features/payment-management/api/useApprovePayment';
import useRejectPayment from '@/features/payment-management/api/useRejectPayment';
import { groupPaymentRequestsByDate } from '@/features/payment-management/lib/groupPaymentRequestsBySection';
import { PaymentAlertCard } from '@/features/payment-management/ui/PaymentAlertCard';
import { Header } from '@/shared/design-system/ui';
import { useNavigate } from 'react-router';
import type { PaymentRequest } from '@/entities/payment/model/payment.type';
import { PageLayout } from '@/shared/ui/PageLayout';
import * as S from './PaymentManagementPage.styles';

function PaymentManagementPage() {
  const navigate = useNavigate();

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
      <PageLayout>
        <Header
          type="default"
          title="입금 관리"
          headingIcon={<ArrowLeft width={24} />}
          headingLabel="뒤로가기"
          onHeadingIconClick={() => navigate(-1)}
        />
        <S.PaymentStatusContent>
          <S.PaymentStatusMessage>
            입금 내역을 불러오는 중입니다.
          </S.PaymentStatusMessage>
        </S.PaymentStatusContent>
      </PageLayout>
    );
  }

  if (isError) {
    return (
      <PageLayout>
        <Header
          type="default"
          title="입금 관리"
          headingIcon={<ArrowLeft width={24} />}
          headingLabel="뒤로가기"
          onHeadingIconClick={() => navigate(-1)}
        />
        <S.PaymentStatusContent>
          <S.PaymentStatusMessage>
            입금 내역을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
          </S.PaymentStatusMessage>
        </S.PaymentStatusContent>
      </PageLayout>
    );
  }

  const handleReject = (payment: PaymentRequest) => {
    rejectPayment(payment.paymentRequestId);
  };

  const handleConfirm = (payment: PaymentRequest) => {
    approvePayment(payment.paymentRequestId);
  };

  return (
    <PageLayout>
      <Header
        type="default"
        title="입금 관리"
        headingIcon={<ArrowLeft width={24} />}
        headingIconAriaLabel="뒤로가기"
        onHeadingIconClick={() => navigate(-1)}
      />
      {paymentSections.length > 0 ? (
        <S.PaymentListContainer>
          <S.PaymentSectionList>
            {paymentSections.map(({ label, items }) => (
              <S.PaymentDateGroup key={label}>
                <S.PaymentDateLabel>{label}</S.PaymentDateLabel>
                <S.PaymentCardList>
                  {items.map((payment) => (
                    <PaymentAlertCard
                      key={payment.paymentRequestId}
                      payment={payment}
                      onReject={handleReject}
                      onConfirm={handleConfirm}
                    />
                  ))}
                </S.PaymentCardList>
              </S.PaymentDateGroup>
            ))}
          </S.PaymentSectionList>
        </S.PaymentListContainer>
      ) : (
        // TODO: 입금 내역이 없을 경우에 대한 디자인 확정 시 변경
        <S.PaymentEmptyContainer>
          <S.PaymentEmptyMessage>입금 내역이 없습니다.</S.PaymentEmptyMessage>
        </S.PaymentEmptyContainer>
      )}
    </PageLayout>
  );
}

export default PaymentManagementPage;
