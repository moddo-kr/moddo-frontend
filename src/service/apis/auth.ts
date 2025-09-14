import axiosInstance from './axios';

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
