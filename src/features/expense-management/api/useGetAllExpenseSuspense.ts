import { useSuspenseQuery } from '@tanstack/react-query';
import expense from '@/entities/expense/api/expense';

const useGetAllExpenseSuspense = (groupToken: string) => {
  return useSuspenseQuery({
    queryKey: ['expenses', groupToken],
    queryFn: () => expense.getAll(groupToken),
  });
};

export default useGetAllExpenseSuspense;
