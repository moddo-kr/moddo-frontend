import {
  AccountVariable,
  CreateGroupData,
  Group,
  GroupHeaderResponse,
} from '@/common/types/group.type';
import axiosInstance from './axios';

const group = {
  get: (groupToken: string): Promise<Group> =>
    axiosInstance
      .get(`/group?groupToken=${groupToken}`)
      .then((res) => res.data),

  post: async (groupData: CreateGroupData) => {
    const response = await axiosInstance.post<{ groupToken: string }>(
      '/group',
      groupData
    );
    return response.data;
  },

  put: async ({
    accountData,
    groupToken,
  }: {
    accountData: AccountVariable;
    groupToken: string;
  }) => {
    const response = await axiosInstance.put(
      `/group/account?groupToken=${groupToken}`,
      accountData
    );
    console.log(response);
    return response.data;
  },
};

export const getGroupHeader = (
  groupToken: string
): Promise<GroupHeaderResponse> => {
  return axiosInstance
    .get(`/group/header?groupToken=${groupToken}`)
    .then((res) => res.data);
};

export default group;
