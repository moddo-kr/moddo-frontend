import { useMutation, useQueryClient } from '@tanstack/react-query';
import payment from '@/entities/payment/api/payment';

const useApprovePayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (paymentRequestId: number) => payment.approve(paymentRequestId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
};

export default useApprovePayment;
