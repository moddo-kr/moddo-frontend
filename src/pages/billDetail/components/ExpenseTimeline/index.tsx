import useGetExpenseDetail from '@/common/queries/expense/useGetExpenseDetail';
import Text from '@/common/components/Text';
import Button from '@/common/components/Button';
import { Next } from '@/assets/svgs/icon';
import * as S from './index.styles';

interface ExpenseTimelineProps {
  groupToken: string;
}

function ExpenseTimeline({ groupToken }: ExpenseTimelineProps) {
  const { data, isLoading, isError } = useGetExpenseDetail(groupToken);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError || !data || !data.expenses) {
    return <div>error...</div>;
  }

  return (
    <S.TimelineContainer>
      {data.expenses.map((expense) => (
        <S.TimelineItem key={expense.id}>
          <S.TimelineLeft>{expense.content}</S.TimelineLeft>
          <S.ExpenseContent>
            <S.ContentTitle>
              <Text variant="body1Sb" color="semantic.text.subtle">
                {expense.content}
              </Text>
              <Text variant="heading2" color="semantic.text.strong">
                {expense.totalAmount.toLocaleString()}원
              </Text>
            </S.ContentTitle>
            <S.MemberChipContainer>
              <Button variant="text">
                <Text>{expense.groupMembers.length}명</Text>
                <Next width={24} />
              </Button>
            </S.MemberChipContainer>
          </S.ExpenseContent>
        </S.TimelineItem>
      ))}
    </S.TimelineContainer>
  );
}

export default ExpenseTimeline;
