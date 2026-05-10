import { useState } from 'react';
import { useTheme } from 'styled-components';
import Text from '@/shared/ui/Text';

import {
  Button,
  ProfileImage,
  useAccordionContext,
  BottomSheet,
} from '@/shared/design-system/ui';
import { Confirm, Next, Receipt } from '@/shared/assets/svgs/icon';
import { MemberSettlement } from '@/entities/settlement/model/settlement.type';
import useUpdatePaymentStatus from '@/features/settlement-details/api/useUpdatePaymentStatus';
import { useLoaderData } from 'react-router';
import * as S from './index.style';
import StatusChip from './ui/StatusChip';

interface ExpenseMemberItemProps {
  member: MemberSettlement;
  groupToken: string;
  status: string;
}

function MemberHeaderToggle({ member }: { member: MemberSettlement }) {
  const { isOpen, toggle, accordionId } = useAccordionContext();
  const theme = useTheme();

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
          <Text variant="body1Sb">
            <span style={{ color: theme.color.primitive.gray[500] }}>
              {member.name}
            </span>
          </Text>
          <Text variant="heading2" color="semantic.text.strong">
            {member.totalAmount.toLocaleString()}원
          </Text>
        </S.SubProfileWrapper>
      </S.LeftWrapper>
      <S.ChevronWrapper $isOpen={isOpen}>
        <Next width={32} height={32} />
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
  const theme = useTheme();
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
            <StatusChip status={member.isPaid ? 'paid' : 'unpaid'} />
          </S.StatusChipButton>
          {/* 정산 상태 변경 바텀시트 */}
          <BottomSheet
            open={open && status !== 'success'}
            onClose={resetState}
            title="정산 상태 변경"
          >
            <S.SheetContentWrapper>
              <S.TextButtonWrapper onClick={() => handleTextButtonClick(false)}>
                <Text
                  variant="title"
                  color={
                    isPaid
                      ? 'semantic.text.disabled'
                      : 'semantic.orange.default'
                  }
                >
                  미입금
                </Text>
                <Confirm
                  width={theme.unit[20]}
                  height={theme.unit[20]}
                  stroke={
                    isPaid ? 'none' : `${theme.color.semantic.orange.default}`
                  }
                />
              </S.TextButtonWrapper>
              <S.TextButtonWrapper onClick={() => handleTextButtonClick(true)}>
                <Text
                  variant="title"
                  color={
                    isPaid // 입금완료
                      ? 'semantic.orange.default'
                      : 'semantic.text.disabled'
                  }
                >
                  입금완료
                </Text>
                <Confirm
                  width={theme.unit[20]}
                  height={theme.unit[20]}
                  stroke={
                    isPaid ? `${theme.color.semantic.orange.default}` : 'none'
                  }
                />
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
              <Receipt width={theme.unit[24]} height={theme.unit[24]} />
              <Text>{expense.content}</Text>
            </S.PlaceWrapper>
            <Text variant="body1Sb" color="semantic.text.default">
              {expense.amount.toLocaleString()}원
            </Text>
          </S.ExpensesWrapper>
        ))}
      </S.ContentContainer>
    </S.Container>
  );
}

export default ExpenseMemberItem;
