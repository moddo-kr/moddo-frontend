import { useMutation, useQueryClient } from '@tanstack/react-query';
import expense from '@/entities/expense/api/expense';

const useDeleteMutation = (groupToken: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: expense.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses', groupToken],
      });
    },
  });

  return mutation;
};

export default useDeleteMutation;
