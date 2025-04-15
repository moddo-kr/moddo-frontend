import { useQueryClient } from '@tanstack/react-query';
import { putGroupAccount } from '@/service/apis/group';
import { AccountVariable } from '@/common/types/group.type';
import { ErrorHandlers, NoBoundaryErrors } from '@/common/types/error.type';
import useMutationWithHandlers from '@/common/hooks/useMutationWithHanders';

interface AccountData {
  id: number;
  writer: number;
  createdAt: Date;
  expiredAt: Date;
  bank: string;
  accountNumber: string;
}

const usePutUpdateAccount = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  noBoundaryErrors: NoBoundaryErrors
) => {
  const queryClient = useQueryClient();

  return useMutationWithHandlers<
    AccountData,
    Error,
    {
      accountData: AccountVariable;
      groupToken: string;
    }
  >({
    mutationFn: (variable) => putGroupAccount(variable),
    onSuccess: (data) => {
      queryClient.setQueryData(['groupAccount', groupToken], data);
    },
    // CHECK - 실패 시 setQueryData를 복구하는 로직이 필요한지 확인
    errorHandlers,
    noBoundaryErrors,
  });
};

export default usePutUpdateAccount;
