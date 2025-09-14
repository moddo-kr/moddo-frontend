import {
  AccountVariable,
  CreateGroupData,
  Group,
  GroupHeaderResponse,
} from '@/domains/group/model/group.type';
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
};

export const putGroupAccount = async ({
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
  return response.data;
};

export const getGroupHeader = (
  groupToken: string
): Promise<GroupHeaderResponse> => {
  return axiosInstance
    .get(`/group/header?groupToken=${groupToken}`)
    .then((res) => res.data);
};

export default group;
