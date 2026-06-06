import { useState } from 'react';
import {
  Button,
  ProfileImage,
  useAccordionContext,
  BottomSheet,
  PaidChip,
  ActionArea,
} from '@/shared/design-system/ui';
import {
  Confirm,
  Receipt,
  ArrowDown,
  EllipsisVertical,
} from '@/shared/assets/svgs/icon';
import { useQueryClient } from '@tanstack/react-query';
import { MemberSettlement } from '@/entities/settlement/model/settlement.type';
import useUpdatePaymentStatus from '@/features/settlement-details/api/useUpdatePaymentStatus';
import useApprovePayment from '@/features/payment-management/api/useApprovePayment';
import useRejectPayment from '@/features/payment-management/api/useRejectPayment';
import { getToken } from '@/shared/design-system';
import * as S from './index.style';

interface ExpenseMemberItemProps {
  member: MemberSettlement;
  groupToken: string;
  status: string;
  isManager: boolean;
}

type ChipStatus = '입금완료' | '확인중' | '미입금';

function getChipStatus(member: MemberSettlement): ChipStatus {
  if (member.isPaid) return '입금완료';
  if (member.paymentRequestId) return '확인중';
  return '미입금';
}

function MemberAccordionToggle() {
  const { isOpen, toggle, accordionId } = useAccordionContext();

  return (
    <S.AccordionToggleButton
      type="button"
      onClick={toggle}
      aria-expanded={isOpen}
      aria-controls={accordionId}
    >
      <S.AccordionToggleLabel>자세히보기</S.AccordionToggleLabel>
      <S.ChevronWrapper $isOpen={isOpen}>
        <ArrowDown width={16} height={16} />
      </S.ChevronWrapper>
    </S.AccordionToggleButton>
  );
}

function ExpenseMemberItem({
  member,
  groupToken,
  status,
  isManager,
}: ExpenseMemberItemProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isPaid, setIsPaid] = useState(member.isPaid);
  const [isConfirm, setIsConfirm] = useState(false);

  const queryClient = useQueryClient();
  const updatePaymentStatusMutation = useUpdatePaymentStatus({
    groupToken,
    groupMemberId: member.id,
    isPaid,
  });
  const approveMutation = useApprovePayment();
  const rejectMutation = useRejectPayment();

  const isActionPending = approveMutation.isPending || rejectMutation.isPending;

  const displayName =
    member.role === 'MANAGER' ? `${member.name}(총무)` : member.name;

  const chipStatus = getChipStatus(member);

  const showManagerButtons = isManager && member.paymentRequestId != null;

  const handleTextButtonClick = (paidUpdate: boolean) => {
    if (status === 'success') return;
    setIsPaid(paidUpdate);
    setIsConfirm(paidUpdate !== member.isPaid);
  };

  const handleConfirm = async () => {
    try {
      await updatePaymentStatusMutation.mutateAsync();
    } catch {
      return;
    }
    setIsConfirm(false);
    setSheetOpen(false);
  };

  const resetSheet = () => {
    setIsPaid(member.isPaid);
    setIsConfirm(false);
    setSheetOpen(false);
  };

  const invalidateRelatedQueries = () => {
    queryClient.invalidateQueries({
      queryKey: ['memberExpenseDetails', groupToken],
    });
  };

  const handleApprove = () => {
    if (!member.paymentRequestId) return;
    approveMutation.mutate(member.paymentRequestId, {
      onSuccess: invalidateRelatedQueries,
    });
  };

  const handleReject = () => {
    if (!member.paymentRequestId) return;
    rejectMutation.mutate(member.paymentRequestId, {
      onSuccess: invalidateRelatedQueries,
    });
  };

  return (
    <S.Container $isPaid={member.isPaid}>
      {/* 헤더: 프로필 + 이름/칩/금액 + ⋮ */}
      <S.HeaderRow>
        <ProfileImage src={member.profile} size="40" />
        <S.InfoColumn>
          <S.MemberName>{displayName}</S.MemberName>
          <S.InfoSubRow>
            <PaidChip status={chipStatus} />
            <S.MemberTotalAmount>
              {member.totalAmount.toLocaleString()}원
            </S.MemberTotalAmount>
          </S.InfoSubRow>
        </S.InfoColumn>
        <S.KebabButton
          type="button"
          onClick={() => setSheetOpen(true)}
          aria-label={`${displayName}의 정산 상태 변경`}
        >
          <EllipsisVertical width={24} height={24} />
        </S.KebabButton>
      </S.HeaderRow>

      <S.Divider />

      {/* 아코디언 토글 */}
      <MemberAccordionToggle />

      {/* 아코디언 콘텐츠 */}
      <S.ContentContainer>
        <S.ContentInner>
          {member.expenses.map((expense) => (
            <S.ExpensesWrapper key={expense.content}>
              <S.PlaceWrapper>
                <Receipt
                  width={24}
                  height={24}
                  color={getToken('fill.primary.normal')}
                />
                <S.ExpenseContent>{expense.content}</S.ExpenseContent>
              </S.PlaceWrapper>
              <S.ExpenseAmount>
                {expense.amount.toLocaleString()}원
              </S.ExpenseAmount>
            </S.ExpensesWrapper>
          ))}
          {/* MANAGER 액션 버튼 (paymentRequestId 있을 때만) */}
          {showManagerButtons && (
            <ActionArea
              layout="horizontal"
              showBottomSafeArea={false}
              hasHorizontalPadding={false}
              mainAction={{
                label: member.isPaid ? '확인완료' : '요청확인',
                onClick: handleApprove,
                disabled: member.isPaid || isActionPending,
              }}
              alternativeAction={{
                label: '거절',
                onClick: handleReject,
                disabled: member.isPaid || isActionPending,
              }}
            />
          )}
        </S.ContentInner>
      </S.ContentContainer>

      {/* 정산 상태 변경 바텀시트 (⋮ 클릭 시) */}
      <BottomSheet
        open={sheetOpen && status !== 'success'}
        onClose={resetSheet}
        title="정산 상태 변경"
      >
        <S.SheetContentWrapper>
          <S.TextButtonWrapper
            $isActive={!isPaid}
            onClick={() => handleTextButtonClick(false)}
          >
            <S.PaymentStatusLabel>미입금</S.PaymentStatusLabel>
            <Confirm width={20} height={20} />
          </S.TextButtonWrapper>
          <S.TextButtonWrapper
            $isActive={isPaid}
            onClick={() => handleTextButtonClick(true)}
          >
            <S.PaymentStatusLabel>입금 완료</S.PaymentStatusLabel>
            <Confirm width={20} height={20} />
          </S.TextButtonWrapper>
          <Button
            variant={isConfirm ? 'primary' : 'secondary'}
            onClick={isConfirm ? handleConfirm : resetSheet}
            disabled={!isConfirm || updatePaymentStatusMutation.isPending}
          >
            확인
          </Button>
        </S.SheetContentWrapper>
      </BottomSheet>
    </S.Container>
  );
}

export default ExpenseMemberItem;
