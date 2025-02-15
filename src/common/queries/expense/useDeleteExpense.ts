import { useMutation, useQueryClient } from '@tanstack/react-query';
import expense from '@/service/apis/expense';

const useDeleteMutation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: expense.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses'], // TODO : groupToken 추가 필요함
      });
    },
  });

  return mutation;
};

export default useDeleteMutation;
