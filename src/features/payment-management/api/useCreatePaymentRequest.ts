import payment from '@/entities/payment/api/payment';
import { queryClient } from '@/shared/api/queryClient';
import useMutationWithHandlers from '@/shared/hooks/useMutationWithHanders';
import { showToast } from '@/shared/design-system/ui';

const useCreatePaymentRequest = () => {
  return useMutationWithHandlers({
    mutationFn: (code: string) => payment.create(code),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
    errorHandlers: {
      400: () =>
        showToast({
          type: 'error',
          content: '이미 입금 확인 요청이 진행 중이에요.',
        }),
    },
    ignoreBoundaryErrors: [400],
  });
};

export default useCreatePaymentRequest;
