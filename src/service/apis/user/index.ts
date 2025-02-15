import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../axios';
import { ROUTE } from '@/common/constants/route';
import { useNavigate } from 'react-router';

export interface GetGuestToken {
  accessToken: string;
  refreshToken: string;
  expiredAt: Date;
  isMember: boolean;
}

export const getGuestToken = async () => {
  const response = await axiosInstance.get('/user/guest/token');
  return response.data;
};

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
    }
  });
};
