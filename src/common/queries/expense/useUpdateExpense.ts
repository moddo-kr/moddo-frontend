import { useMutation, useQueryClient } from '@tanstack/react-query';
import expense from '@/service/apis/expense';

interface UseUpdateExpenseProps {
  onNext: () => void;
  groupToken: string;
}

const useUpdateExpense = ({ onNext, groupToken }: UseUpdateExpenseProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: expense.update,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses', groupToken],
      });
      onNext();
    },
  });

  return mutation;
};

export default useUpdateExpense;
