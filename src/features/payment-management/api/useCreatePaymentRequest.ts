import { useMutation } from '@tanstack/react-query';
import payment from '@/entities/payment/api/payment';
import { queryClient } from '@/shared/api/queryClient';

const useCreatePaymentRequest = () => {
  return useMutation({
    mutationFn: (code: string) => payment.create(code),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
};

export default useCreatePaymentRequest;
