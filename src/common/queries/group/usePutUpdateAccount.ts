import { useMutation, useQueryClient } from '@tanstack/react-query';
import group, { AccountVariable } from '@/service/apis/group';

interface AccountData {
  id: number,
  writer: number,
  createdAt: Date,
  expiredAt: Date,
  bank: string,
  accountNumber: string
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
      alert('계좌 업데이트에 실패했습니다.');
    },
  });
};

export default usePutUpdateAccount;