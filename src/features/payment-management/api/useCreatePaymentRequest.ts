import { useMutation, useQueryClient } from '@tanstack/react-query';
import payment from '@/entities/payment/api/payment';

const useCreatePaymentRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (code: string) => payment.create(code),
    onSuccess: (_data, code) => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      queryClient.invalidateQueries({ queryKey: ['profiles', code] });
      queryClient.invalidateQueries({ queryKey: ['groupHeader', code] });
    },
  });
};

export default useCreatePaymentRequest;
