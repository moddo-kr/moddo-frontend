import { useQuery } from '@tanstack/react-query';
import expense from '@/entities/expense/api/expense';

const useGetAllExpense = (groupToken: string) => {
  return useQuery({
    queryKey: ['expenses', groupToken],
    queryFn: () => expense.getAll(groupToken),
  });
};

export default useGetAllExpense;
