import useGetExpenseDetailSuspense from '@/features/expense-management/api/useGetExpenseDetailSuspense';
import ExpenseTimelineContent from '../ExpenseTimelineContent';
import * as S from './index.styles';

interface ExpenseTimelineProps {
  groupToken: string;
}

function ExpenseTimeline({ groupToken }: ExpenseTimelineProps) {
  const { data } = useGetExpenseDetailSuspense(groupToken);

  return (
    <S.TimelineContainer>
      {data.expenses.map((expense, index) => (
        <S.TimelineItem key={expense.id}>
          <S.TimelineLeft>
            <S.Line $hidden={index === 0} />
            <S.Dot />
            <S.Line $hidden={index === data.expenses.length - 1} />
          </S.TimelineLeft>
          <ExpenseTimelineContent expense={expense} />
          {index < data.expenses.length - 1 && (
            <>
              <S.TimelineLeft>
                <S.Line />
              </S.TimelineLeft>
              <S.Gap />
            </>
          )}
        </S.TimelineItem>
      ))}
    </S.TimelineContainer>
  );
}

export default ExpenseTimeline;
