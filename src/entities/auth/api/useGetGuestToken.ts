import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { ROUTE } from '@/shared/config/route';
import { getGuestToken } from './auth';

export const useGetGuestToken = () => {
  const navigate = useNavigate();
  return useQuery({
    queryKey: ['guestToken'],
    queryFn: async () => {
      const response = await getGuestToken();
      if (response?.accessToken) {
        localStorage.setItem('accessToken', `Bearer ${response?.accessToken}`);
        navigate(ROUTE.selectGroup);
        return response;
      }
      throw new Error('Access Token not found');
    },
    enabled: false, // refetch가 호출될 때만 실행되도록 설정
  });
};
