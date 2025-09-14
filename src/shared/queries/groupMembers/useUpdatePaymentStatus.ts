import { useQueryClient, useMutation } from '@tanstack/react-query';
import { UpdatePaymentStatusVariable } from '@/shared/types/groupMember';
import { updatePaymentStatus } from '@/service/apis/groupMembers';

const useUpdatePaymentStatus = ({
  groupToken,
  groupMemberId,
  isPaid,
}: UpdatePaymentStatusVariable) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () =>
      updatePaymentStatus({ groupToken, groupMemberId, isPaid }),
    onSuccess: () => {
      // 성공하면 memberExpenseDetails 쿼리를 다시 불러온다.
      queryClient.invalidateQueries({
        queryKey: ['memberExpenseDetails', groupToken],
      });
    },
  });
  return mutation;
};

export default useUpdatePaymentStatus;
