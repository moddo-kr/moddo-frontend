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

const usePutUpdateAccount = () => {
  const queryClient = useQueryClient();

  return useMutation<AccountData, Error, AccountVariable>({
    mutationFn: (variable) => group.put(variable),
    onSuccess: (data) => {
      queryClient.setQueryData(['groupAccount'], data);
    },
    onError: (error) => {
      console.error('Error updating account:', error);
    },
  });
};

export default usePutUpdateAccount;
