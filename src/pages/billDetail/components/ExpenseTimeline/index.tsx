import useGetExpenseDetail from '@/common/queries/expense/useGetExpenseDetail';
import ExpenseTimelineContent from '../ExpenseTimelineContent';
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
          <ExpenseTimelineContent expense={expense} />
        </S.TimelineItem>
      ))}
    </S.TimelineContainer>
  );
}

export default ExpenseTimeline;
