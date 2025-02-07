import { useQuery } from '@tanstack/react-query';
import expense from '@/service/apis/expense';

const useGetAllExpense = (meedId: number) => {
  return useQuery({
    queryKey: ['expenses', meedId],
    queryFn: () => expense.getAll(meedId),
  });
};

export default useGetAllExpense;
