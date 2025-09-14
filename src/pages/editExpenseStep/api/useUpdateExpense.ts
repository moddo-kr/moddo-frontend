import { useQueryClient } from '@tanstack/react-query';
import expense from '@/service/apis/expense';
import { ErrorHandlers, IgnoreBoundaryErrors } from '@/shared/types/error.type';
import useMutationWithHandlers from '@/shared/hooks/useMutationWithHanders';

const useUpdateExpense = (
  groupToken: string,
  errorHandlers: ErrorHandlers,
  ignoreBoundaryErrors: IgnoreBoundaryErrors
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
    ignoreBoundaryErrors,
  });
};

export default useUpdateExpense;
