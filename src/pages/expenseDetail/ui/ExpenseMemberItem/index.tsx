import { useState } from 'react';
import { useLoaderData } from 'react-router';
import {
  Button,
  ProfileImage,
  useAccordionContext,
  BottomSheet,
  PaidChip,
} from '@/shared/design-system/ui';
import { Confirm, Next, Receipt } from '@/shared/assets/svgs/icon';
import { MemberSettlement } from '@/entities/settlement/model/settlement.type';
import useUpdatePaymentStatus from '@/features/settlement-details/api/useUpdatePaymentStatus';
import { getToken } from '@/shared/design-system';
import * as S from './index.style';

interface ExpenseMemberItemProps {
  member: MemberSettlement;
  groupToken: string;
  status: string;
}

function MemberHeaderToggle({ member }: { member: MemberSettlement }) {
  const { isOpen, toggle, accordionId } = useAccordionContext();

  return (
    <S.HeaderToggleButton
      type="button"
      onClick={toggle}
      aria-expanded={isOpen}
      aria-controls={accordionId}
    >
      <S.LeftWrapper>
        <ProfileImage src={member.profile} size="40" />
        <S.SubProfileWrapper>
          <S.MemberName>{member.name}</S.MemberName>
          <S.MemberTotalAmount>
            {member.totalAmount.toLocaleString()}원
          </S.MemberTotalAmount>
        </S.SubProfileWrapper>
      </S.LeftWrapper>
      <S.ChevronWrapper $isOpen={isOpen}>
        <Next
          width={32}
          height={32}
          color={getToken('fill.inverse.alternative')}
        />
      </S.ChevronWrapper>
    </S.HeaderToggleButton>
  );
}

/** 개별 멤버 렌더링 컴포넌트 */
function ExpenseMemberItem({
  member,
  groupToken,
  status,
}: ExpenseMemberItemProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [isPaid, setIsPaid] = useState<boolean>(member.isPaid);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const { myProfile } = useLoaderData();
  const updatePaymentStatusMutation = useUpdatePaymentStatus({
    groupToken,
    groupMemberId: member.id,
    isPaid,
  });

  /** 상태 변경 함수 */
  const handleTextButtonClick = (paidUpdate: boolean) => {
    if (status === 'success') return;

    setIsPaid(paidUpdate);
    if (paidUpdate !== member.isPaid) {
      setIsConfirm(true); // 상태가 바뀌면 확인 버튼 활성화
    } else {
      setIsConfirm(false); // 상태가 같으면 확인 버튼 비활성화
    }
  };

  /** confim 버튼 클릭 시 api를 호출하는 함수 */
  const handleChangeButtonSubmit = async () => {
    await updatePaymentStatusMutation.mutate();
    setIsConfirm(false);
    setOpen(false);
  };

  /** 모든 상태값 초기화 후에 바텀시트 닫기 */
  const resetState = () => {
    setIsPaid(member.isPaid);
    setIsConfirm(false);
    setOpen(false);
  };

  // TODO: role에 따라 상태 변경 버튼 클릭 가능 여부 체크
  const handleStatusChipClick = () => {
    if (myProfile.role === 'MANAGER') setOpen(true);
  };

  return (
    <S.Container $isPaid={member.isPaid}>
      <S.HeaderContainer>
        <MemberHeaderToggle member={member} />
        <S.RightWrapper>
          <S.StatusChipButton
            type="button"
            onClick={handleStatusChipClick}
            aria-label={`${member.name}의 정산 상태 변경`}
          >
            <PaidChip status={member.isPaid ? '입금완료' : '미입금'} />
          </S.StatusChipButton>
          {/* 정산 상태 변경 바텀시트 */}
          <BottomSheet
            open={open && status !== 'success'}
            onClose={resetState}
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
                <S.PaymentStatusLabel>입금완료</S.PaymentStatusLabel>
                <Confirm width={20} height={20} />
              </S.TextButtonWrapper>
              <Button
                variant={isConfirm ? 'primary' : 'secondary'}
                onClick={isConfirm ? handleChangeButtonSubmit : resetState}
                disabled={!isConfirm}
              >
                {isConfirm ? '확인' : '닫기'}
              </Button>
            </S.SheetContentWrapper>
          </BottomSheet>
        </S.RightWrapper>
      </S.HeaderContainer>
      <S.ContentContainer>
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
      </S.ContentContainer>
    </S.Container>
  );
}

export default ExpenseMemberItem;
