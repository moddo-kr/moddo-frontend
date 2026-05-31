import axiosInstance from '@/shared/api/axios';
import { AuthCheckResponse, User } from '../model/user.type';

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

export const getAuth = async (): Promise<AuthCheckResponse> => {
  const response = await axiosInstance.get<AuthCheckResponse>('/auth/check');
  return response.data;
};

export const getUserInfo = async () => {
  const response = await axiosInstance.get<User>('/user');
  return response.data;
};
