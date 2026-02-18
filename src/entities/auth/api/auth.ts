import axiosInstance from '@/shared/api/axios';
import { User } from '../model/user.type';

// CHECK - 게스트 토큰 정책 제거 가능성 있음
export interface GuestTokenData {
  accessToken: string;
  refreshToken: string;
  expiredAt: Date;
  isMember: boolean;
}

export const getGuestToken = async (): Promise<GuestTokenData> => {
  const response = await axiosInstance.get('/user/guest/token');
  return response.data;
};

// ==========

export const getAuth = async () => {
  const response = await axiosInstance.get('/user/auth/check', {
    useMock: true,
  });
  return response.data;
};

export const getUserInfo = async () => {
  const response = await axiosInstance.get<User>('/user/info', {
    useMock: true,
  });

  return response.data;
};
