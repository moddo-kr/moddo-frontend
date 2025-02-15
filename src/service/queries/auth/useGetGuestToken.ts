import { useMutation } from '@tanstack/react-query';
import { ROUTE } from '@/common/constants/route';
import { useNavigate } from 'react-router';
import { getGuestToken } from '../../apis/auth';

export interface GetGuestToken {
  accessToken: string;
  refreshToken: string;
  expiredAt: Date;
  isMember: boolean;
}

export const useGetGuestToken = () => {
  const navigate = useNavigate();
  return useMutation<GetGuestToken, Error>({
    mutationFn: () => {
      return getGuestToken();
    },
    onSuccess: (response) => {
      localStorage.setItem('accessToken', 'Bearer ' + response?.accessToken);
      navigate(ROUTE.selectGroup);
    },
    onError: (error) => {
      alert('guestToken 발급을 실패했습니다!');
      console.error('Error creating meeting:', error);
    },
  });
};
