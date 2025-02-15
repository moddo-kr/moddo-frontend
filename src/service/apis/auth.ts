import axiosInstance from './axios';

export const getGuestToken = async () => {
  const response = await axiosInstance.get('/user/guest/token');
  return response.data;
};
