import { useMutation, useQueryClient } from '@tanstack/react-query';
import payment from '@/entities/payment/api/payment';

const useRejectPayment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (paymentRequestId: number) => payment.reject(paymentRequestId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
};

export default useRejectPayment;
