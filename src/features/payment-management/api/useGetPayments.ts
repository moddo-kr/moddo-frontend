import { useQuery } from '@tanstack/react-query';
import payment from '@/entities/payment/api/payment';

const useGetPayments = () => {
  return useQuery({
    queryKey: ['payments'],
    queryFn: () => payment.getAll(),
  });
};

export default useGetPayments;
