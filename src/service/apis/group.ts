import { Group } from '@/common/types/group.type';
import axiosInstance from './axios';

const group = {
  // TODO : grouptoken 사용 방법 적용 필요함
  get: (groupToken: string): Promise<Group> =>
    axiosInstance
      .get(`/api/v1/group`, {
        useMock: true,
      })
      .then((res) => res.data),
};

export default group;
