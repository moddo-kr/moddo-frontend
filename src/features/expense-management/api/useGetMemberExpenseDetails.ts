import { getMemberExpenseDetails } from '@/entities/expense/api/memberExpense';
import { useQuery } from '@tanstack/react-query';

export const useGetMemberExpenseDetails = (groupToken: string) => {
  return useQuery({
    queryKey: ['memberExpenseDetails', groupToken],
    queryFn: () => getMemberExpenseDetails(groupToken),
  });
};
