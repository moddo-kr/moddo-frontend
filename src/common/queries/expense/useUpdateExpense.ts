import { useQueryClient } from '@tanstack/react-query';
import expense from '@/service/apis/expense';
import { ErrorHandlers, NoBoundaryErrors } from '@/common/types/error.type';
import useMutationWithHandlers from '@/common/hooks/useMutationWithHanders';

const useUpdateExpense = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  noBoundaryErrors: NoBoundaryErrors
) => {
  const queryClient = useQueryClient();

  return useMutationWithHandlers({
    mutationFn: expense.update,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses', groupToken],
      });
    },
    errorHandlers,
    noBoundaryErrors,
  });
};

export default useUpdateExpense;
