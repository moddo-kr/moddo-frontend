import { useSuspenseQuery } from '@tanstack/react-query';
import expense from '@/entities/expense/api/expense';

function useGetExpenseDetailSuspense(groupToken: string) {
  return useSuspenseQuery({
    queryKey: ['expenseDetail', groupToken],
    queryFn: () => expense.getDetail(groupToken),
  });
}

export default useGetExpenseDetailSuspense;
