import { Group } from '@/common/types/group.type';
import axiosInstance from './axios';

export interface CreateGroupData {
  name: string;
  password: string;
}

const group = {
  get: (groupToken: string): Promise<Group> =>
    axiosInstance
      .get(`/api/v1/group?groupToken=${groupToken}`, {
        useMock: true,
      })
      .then((res) => res.data),

  post: async (groupData: CreateGroupData) => {
    const response = await axiosInstance.post('/group', groupData, {
      useMock: true,
    });
    console.log(response);
    return response.data;
  },
};

export default group;
