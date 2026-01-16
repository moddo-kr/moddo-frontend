import { useSuspenseQuery } from '@tanstack/react-query';
import { getMemberExpenseDetails } from '@/entities/expense/api/memberExpense';

export const useGetMemberExpenseDetailsSuspense = (groupToken: string) => {
  return useSuspenseQuery({
    queryKey: ['memberExpenseDetails', groupToken],
    queryFn: () => getMemberExpenseDetails(groupToken),
  });
};
