import { useQueryClient, useMutation } from '@tanstack/react-query';
import { updatePaymentStatus } from '@/entities/settlement/api/updatePaymentStatus';
import { UpdatePaymentStatusVariable } from '@/entities/settlement/model/groupMember.type';

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
      queryClient.invalidateQueries({
        queryKey: ['memberExpenseDetails', groupToken],
      });
      queryClient.invalidateQueries({
        queryKey: ['groupHeader', groupToken],
      });
    },
  });
  return mutation;
};

export default useUpdatePaymentStatus;
