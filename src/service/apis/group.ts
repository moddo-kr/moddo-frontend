import {
  AccountVariable,
  CreateGroupData,
  Group,
} from '@/common/types/group.type';
import axiosInstance from './axios';

const group = {
  get: (groupToken: string): Promise<Group> =>
    axiosInstance
      .get(`/group?groupToken=${groupToken}`, {
        useMock: true,
      })
      .then((res) => res.data),

  post: async (groupData: CreateGroupData) => {
    const response = await axiosInstance.post('/group', groupData);
    return response.data;
  },

  put: async (accountData: AccountVariable) => {
    const groupToken = localStorage.getItem('groupToken');
    const response = await axiosInstance.put(
      `/group/account?groupToken=${groupToken}`,
      accountData,
      {
        useMock: true,
      }
    );
    console.log(response);
    return response.data;
  },
};

export default group;
