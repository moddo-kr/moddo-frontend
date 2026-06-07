import { useQueryClient } from '@tanstack/react-query';
import { updatePaymentStatus } from '@/entities/settlement/api/updatePaymentStatus';
import { UpdatePaymentStatusVariable } from '@/entities/settlement/model/groupMember.type';
import useMutationWithHandlers from '@/shared/hooks/useMutationWithHanders';
import { showToast } from '@/shared/design-system/ui';

const useUpdatePaymentStatus = ({
  groupToken,
  groupMemberId,
  isPaid,
}: UpdatePaymentStatusVariable) => {
  const queryClient = useQueryClient();
  return useMutationWithHandlers({
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
    errorHandlers: {
      default: () =>
        showToast({
          type: 'error',
          content: '정산 상태 변경에 실패했어요. 다시 시도해 주세요.',
        }),
    },
    ignoreBoundaryErrors: [400, 409],
  });
};

export default useUpdatePaymentStatus;
