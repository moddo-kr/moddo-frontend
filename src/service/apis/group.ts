import { Group } from '@/common/types/group.type';
import axiosInstance from './axios';

const group = {
  get: (groupToken: string): Promise<Group> =>
    axiosInstance
      .get(`/api/v1/group?groupToken=${groupToken}`, {
        useMock: true,
      })
      .then((res) => res.data),
};

export default group;
