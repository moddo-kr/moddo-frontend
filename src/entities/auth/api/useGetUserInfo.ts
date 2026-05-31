import { useSuspenseQuery } from '@tanstack/react-query';
import { getUserInfo } from './auth';

export const useGetUserInfo = () => {
  return useSuspenseQuery({
    queryKey: ['userInfo'],
    queryFn: getUserInfo,
  });
};
