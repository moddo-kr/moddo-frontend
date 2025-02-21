import { getMemberExpenseDetails } from '@/service/apis/memberExpense';
import { useQuery } from '@tanstack/react-query';

export const useGetMemberExpenseDetails = (groupToken: string) => {
  return useQuery({
    queryKey: ['memberExpenseDetails', groupToken],
    queryFn: () => getMemberExpenseDetails(groupToken),
  });
};
