import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BaseFunnelStepComponentProps } from '@/common/types/useFunnel.type';
import expense from '@/service/apis/expense';
import { BillContext } from '@/pages/createBill/types/billContext.type';

interface UseUpdateExpenseProps
  extends Pick<BaseFunnelStepComponentProps<BillContext>, 'moveToNextStep'> {}

const useUpdateExpense = ({ moveToNextStep }: UseUpdateExpenseProps) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: expense.update,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['expenses'], // TODO : GroupToken 추가 필요함
      });
      moveToNextStep?.({ initialExpense: undefined }); // 초기화한 뒤에 다음 스텝으로 이동
    },
  });

  return mutation;
};

export default useUpdateExpense;
