import axiosInstance from '@/shared/api/axios';
import { AuthCheckResponse, User } from '../model/user.type';

export const getAuth = async (): Promise<AuthCheckResponse> => {
  const response = await axiosInstance.get<AuthCheckResponse>('/auth/check');
  return response.data;
};

export const getUserInfo = async () => {
  const response = await axiosInstance.get<User>('/user');
  return response.data;
};
