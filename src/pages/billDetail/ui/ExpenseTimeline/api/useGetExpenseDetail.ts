import { useQuery } from '@tanstack/react-query';
import expense from '@/entities/expense/api/expense';

const useGetExpenseDetail = (groupToken: string) => {
  return useQuery({
    queryKey: ['expenseDetail', groupToken],
    queryFn: () => expense.getDetail(groupToken),
  });
};

export default useGetExpenseDetail;
