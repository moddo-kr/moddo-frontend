import { Group } from '@/common/types/group.type';
import axiosInstance from './axios';

const group = {
  // NOTE: 토큰을 어떻게 전달해야 하는지 확인 필요함.
  get: (groupToken: string): Promise<Group> =>
    axiosInstance
      .get(`/api/v1/group`, {
        useMock: true,
      })
      .then((res) => res.data),
};

export default group;
