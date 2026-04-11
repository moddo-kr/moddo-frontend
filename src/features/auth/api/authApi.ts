import axiosInstance from '@/shared/api/axios';

export const logout = () => axiosInstance.post('/logout');

export const unregister = () =>
  axiosInstance.delete('/users/me', {
    useMock: true,
  });
