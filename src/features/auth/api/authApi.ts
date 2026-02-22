import axiosInstance from '@/shared/api/axios';

export const logout = () =>
  axiosInstance.post('/user/logout', null, { useMock: true });

export const unregister = () =>
  axiosInstance.delete('/users/me', {
    useMock: true,
  });
