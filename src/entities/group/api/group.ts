import axiosInstance from '@/shared/api/axios';
import {
  AccountVariable,
  CreateGroupData,
  Group,
  GroupHeaderResponse,
} from '@/entities/group/model/group.type';

export const getGroupList = async (): Promise<Group[]> => {
  const response = await axiosInstance.get('/groups', { useMock: true }); // NOTE : API 경로 확인 필요
  return response.data.groups;
};

export const getGroupDetail = async (groupToken: string): Promise<Group> => {
  const response = await axiosInstance.get('/group', {
    params: { groupToken },
  });
  return response.data;
};

export const createGroup = async (groupData: CreateGroupData) => {
  const response = await axiosInstance.post<{ groupToken: string }>(
    '/group',
    groupData
  );
  return response.data;
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

// NOTE : 기존에 groupToken을 전달하는 방식에서 settlementCode를 전달하는 방식으로 변경함
export const getGroupHeader = (
  settlementCode: string
): Promise<GroupHeaderResponse> => {
  return axiosInstance
    .get(`/groups/${settlementCode}/header`)
    .then((res) => res.data);
};
