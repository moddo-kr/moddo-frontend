import { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { getRandomColor } from '@/common/utils/getRandomColor';
import { useGetMemberExpenseDetails } from '@/common/queries/memberExpense/useGetMemberExpenseDetails';
import Text from '@/common/components/Text';
import StatusChip from '@/common/components/StatusChip';
import Button from '@/common/components/Button';
import { ArrowDown, Receipt } from '@/assets/svgs/icon';
import { MemberExpense } from '@/common/types/memberExpense';
import * as S from './index.style';

interface ExpenseMembersProps {
  groupToken: string;
}

// 개별 멤버 렌더링 컴포넌트
interface ExpenseMemberItemProps {
  member: MemberExpense;
  color: string;
}

function ExpenseMemberItem({ member, color }: ExpenseMemberItemProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const theme = useTheme();
  const handleArrowButtonClick = () => {
    setIsDetailOpen(!isDetailOpen);
  };

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
          <S.StatusChipButton>
            <StatusChip status={member.isPaid ? 'paid' : 'unpaid'} />
          </S.StatusChipButton>
          <Button variant="text" onClick={handleArrowButtonClick}>
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
