import { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { getRandomColor } from '@/common/utils/getRandomColor';
import { useGetMemberExpenseDetails } from '@/common/queries/memberExpense/useGetMemberExpenseDetails';
import Text from '@/common/components/Text';
import StatusChip from '@/common/components/StatusChip';
import Button from '@/common/components/Button';
import { ArrowDown, Close, Confirm, Receipt } from '@/assets/svgs/icon';
import { MemberExpense } from '@/common/types/memberExpense';
import * as S from './index.style';
import BottomSheet from '@/common/components/BottomSheet';

interface ExpenseMembersProps {
  groupToken: string;
}

// 개별 멤버 렌더링 컴포넌트
interface ExpenseMemberItemProps {
  member: MemberExpense;
  color: string;
}

function ExpenseMemberItem({ member, color }: ExpenseMemberItemProps) {
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isPaid, setIsPaid] = useState<boolean>(member.isPaid);
  const theme = useTheme();

  return (
    <S.Container isPaid={member.isPaid}>
      <S.SummaryContainer>
        <S.LeftWrapper>
          <S.ProfileImg
            src={member.profile}
            alt="profile"
            $bgcolor={color || `${theme.color.semantic.orange.default}`}
          />
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
        <S.RightWrapper>
          <S.StatusChipButton onClick={() => setOpen(true)}>
            <StatusChip status={member.isPaid ? 'paid' : 'unpaid'} />
          </S.StatusChipButton>
          {/* 정산 상태 변경 모달 */}
          <BottomSheet open={open} setOpen={setOpen} isPadding={true} pb={16}>
            <S.SheetContentWrapper>
              <S.TextWrapper>
                <Text variant="heading2" color={'semantic.text.default'}>
                  정산 상태
                </Text>
                <Close
                  width={theme.unit[24]}
                  height={theme.unit[24]}
                  onClick={() => setOpen(false)}
                />
              </S.TextWrapper>
              <S.TextButtonWrapper onClick={() => setIsPaid(false)}>
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
              <S.TextButtonWrapper onClick={() => setIsPaid(true)}>
                <Text
                  variant="title"
                  color={
                    isPaid
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
              <Button variant="secondary" onClick={() => setOpen(!open)}>
                닫기
              </Button>
            </S.SheetContentWrapper>
          </BottomSheet>
          <Button variant="text" onClick={() => setIsDetailOpen(!isDetailOpen)}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: theme.unit[24],
                height: theme.unit[24],
              }}
            >
              <ArrowDown
                width={theme.unit[20]}
                style={{
                  transform: isDetailOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </div>
          </Button>
        </S.RightWrapper>
      </S.SummaryContainer>
      {/* 상세 내역 컨테이너: isDetailOpen && openIndex가 일치하면 보여줌 */}
      <S.DetailContainer isOpen={isDetailOpen}>
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
      </S.DetailContainer>
    </S.Container>
  );
}

function ExpenseMembers({ groupToken }: ExpenseMembersProps) {
  const {
    data: memberExpenseData,
    isLoading,
    isError,
  } = useGetMemberExpenseDetails(groupToken);

  const colors = useMemo(() => {
    return memberExpenseData
      ? memberExpenseData.map((_, index: number) => getRandomColor(index))
      : [];
  }, [memberExpenseData]);

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (isError || !memberExpenseData) {
    return <div>error...</div>;
  }

  return (
    <S.Wrapper>
      {memberExpenseData.map((member, index) => (
        <ExpenseMemberItem
          key={member.id}
          member={member}
          color={colors[index]}
        />
      ))}
    </S.Wrapper>
  );
}

export default ExpenseMembers;
