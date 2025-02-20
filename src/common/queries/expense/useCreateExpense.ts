import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { BillContext } from '@/pages/createBill/types/billContext.type';
import expense from '@/service/apis/expense';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UseCreateExpenseProps
  extends Pick<BaseFunnelStepComponentProps<BillContext>, 'moveToNextStep'> {
  groupToken: string;
}

const useCreateExpense = ({
  moveToNextStep,
  groupToken,
}: UseCreateExpenseProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: expense.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses', groupToken],
      });
      moveToNextStep?.();
    },
  });

  return mutation;
};

export default useCreateExpense;
