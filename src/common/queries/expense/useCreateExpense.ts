import { useMutation, useQueryClient } from '@tanstack/react-query';
import expense from '@/service/apis/expense';

interface UseCreateExpenseProps {
  onNext: () => void;
  groupToken: string;
}

const useCreateExpense = ({ groupToken, onNext }: UseCreateExpenseProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: expense.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses', groupToken],
      });
      onNext();
    },
  });

  return mutation;
};

export default useCreateExpense;
