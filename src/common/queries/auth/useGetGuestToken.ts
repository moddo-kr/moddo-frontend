import { useQuery } from '@tanstack/react-query';
import { ROUTE } from '@/common/constants/route';
import { useNavigate } from 'react-router';
import { getGuestToken } from '@/service/apis/auth';

export const useGetGuestToken = () => {
  const navigate = useNavigate();
  return useQuery({
    queryKey: ['guestToken'],
    queryFn: async () => {
      const response = await getGuestToken();
      if (response?.accessToken) {
        localStorage.setItem('accessToken', 'Bearer ' + response?.accessToken);
        navigate(ROUTE.selectGroup);
      } else {
        console.error('Access token not found');
      }
    },
    enabled: false, // refetch가 호출될 때만 실행되도록 설정
  });
};
