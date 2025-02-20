import { useMutation, useQueryClient } from '@tanstack/react-query';
import group from '@/service/apis/group';
import { AccountVariable } from '@/common/types/group.type';

interface AccountData {
  id: number;
  writer: number;
  createdAt: Date;
  expiredAt: Date;
  bank: string;
  accountNumber: string;
}

const usePutUpdateAccount = (groupToken: string) => {
  const queryClient = useQueryClient();

  return useMutation<
    AccountData,
    Error,
    {
      accountData: AccountVariable;
      groupToken: string;
    }
  >({
    mutationFn: (variable) => group.put(variable),
    onSuccess: (data) => {
      queryClient.setQueryData(['groupAccount', groupToken], data);
    },
    onError: (error) => {
      console.error('Error updating account:', error);
    },
  });
};

export default usePutUpdateAccount;
