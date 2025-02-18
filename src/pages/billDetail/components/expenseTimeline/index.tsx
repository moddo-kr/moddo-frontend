import useGetExpenseDetail from '@/common/queries/expense/useGetExpenseDetail';
import { format } from 'date-fns';

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
    <div>
      {data.expenses.map((expense) => (
        <div key={expense.id}>
          <div>{expense.content}</div>
          <div>{format(new Date(expense.date), 'yyyy')}</div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseTimeline;
