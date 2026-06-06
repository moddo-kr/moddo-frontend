import { useQueryClient } from '@tanstack/react-query';
import payment from '@/entities/payment/api/payment';
import useMutationWithHandlers from '@/shared/hooks/useMutationWithHanders';
import { showToast } from '@/shared/design-system/ui';

const useCreatePaymentRequest = () => {
  const queryClient = useQueryClient();

  return useMutationWithHandlers({
    mutationFn: (code: string) => payment.create(code),
    onSuccess: (_data, code) => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
      queryClient.invalidateQueries({ queryKey: ['profiles', code] });
      queryClient.invalidateQueries({ queryKey: ['groupHeader', code] });
    },
    // TODO: 400 에러 케이스가 추가되면 백엔드와 에러 코드 세분화 후 분기 처리 필요
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
