import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import { BillContext } from '@/pages/createBill/types/billContext.type';
import expense from '@/service/apis/expense';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UseCreateExpenseProps
  extends Pick<BaseFunnelStepComponentProps<BillContext>, 'moveToNextStep'> {}

const useCreateExpense = ({ moveToNextStep }: UseCreateExpenseProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: expense.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses'], // TODO : GroupToken 추가 필요함
      });
      moveToNextStep?.();
    },
  });

  return mutation;
};

export default useCreateExpense;
